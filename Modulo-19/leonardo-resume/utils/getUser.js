const getUser = async (username) => {
  const resUser = await fetch('https://api.github.com/users/' + username)
  const user = await resUser.json()

  const resRepos = await fetch('https://api.github.com/users/' + username + '/repos?sort=update')
  const originalRepos = await resRepos.json()

  const dontShowRepos = ['leonardocs1/fsm-devpleno', 'leonardocs1/leonardocs1']

  const dontShowFilter = repo => dontShowRepos.indexOf(repo.full_name) === -1
  const extractData = repo => ({
    id: repo.id,
    full_name: repo.full_name,
    language: repo.language,
    stargazers_count: repo.stargazers_count
  })
  const repos = originalRepos.filter(dontShowFilter).map(extractData)

  return {
    repos,
    user
  }
}

export default getUser