const db = require('./db')
const fs = require('fs')


const initMigration = async (connection) => {
  const [results] = await connection.query(`show tables like 'migration_version'`)
  // nao iniciado
  if (results.length === 0) {
    await connection.query('START TRANSACTION;')
    await connection.query(`
      CREATE TABLE migration_version (
        id INT NOT NULL AUTO_INCREMENT,
        version INT NOT NULL,
        PRIMARY KEY (id)
      );
    `)
    await connection.query('INSERT INTO migration_version (id, version) VALUES (1, 0)')
    await connection.query('COMMIT;')
  }
}

const getCurrentVersion = async (connection) => {
  const [results] = await connection.query('select * from migration_version where id = 1')
  return results[0].version
}

const migration = async () => {
  const connection = await db
  await initMigration(connection)

  const currentVersion = await getCurrentVersion(connection)
  const targetVersion = 1000

  const migrations = fs.readdirSync('./migrations')
  const migrationSorted = migrations
    .map(version => {
      return version.split('.')[0]
    })
    .map(version => parseInt(version))
    .sort((a, b) => {
      if (a > b) {
        return 1
      }
      return -1
    })
  for await (const migration of migrationSorted) {
    if (migration > currentVersion && targetVersion >= migration) {
      const m = require('./migrations/' + migration + '.js')
      await connection.query('START TRANSACTION;')
      if (m.up) {
        await m.up(connection)
      }
      await connection.query('update migration_version set version = ? where id = ?', [migration, 1])
      await connection.query('COMMIT;')
    }
  }

  /*
  const versao1 = [
    `
    CREATE TABLE categories (
      id INT NOT NULL AUTO_INCREMENT,
      category VARCHAR(250) NULL DEFAULT NULL,
      PRIMARY KEY (id)
    );
    CREATE TABLE products (
      id INT NOT NULL AUTO_INCREMENT,
      product VARCHAR(250) NULL DEFAULT NULL,
      price FLOAT,
      PRIMARY KEY (id)
    );
    CREATE TABLE images (
      id INT NOT NULL AUTO_INCREMENT,
      description TEXT NULL DEFAULT NULL,
      url VARCHAR(500) NULL DEFAULT NULL,
      product_id INT NOT NULL,
      PRIMARY KEY (id),
      KEY fk_images_products_index (product_id),
      CONSTRAINT fk_images_products_constraint FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE ON UPDATE CASCADE
    );
    CREATE TABLE categories_products (
      product_id INT NOT NULL,
      category_id INT NOT NULL,
      KEY fk_categories_products_index (product_id, category_id),
      CONSTRAINT fk_categories_products_constraint1 FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE ON UPDATE CASCADE,
      CONSTRAINT fk_categories_products_constraint2 FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE ON UPDATE CASCADE
    )
    `
  ]
  const versao1Undo = [
    `
    DROP TABLE categories;
    DROP TABLE products;
    DROP TABLE images;
  `
  ]
  */
}
migration()
