import React from 'react'

const Index = (props) => {
  return (
    <div>
      <h1>Bem-vindo!</h1>
      <div>{props.currentDate}</div>
      {props.repos.map(repo => {
        return (
          <div key={repo.id}>
            <h3>{repo.full_name}</h3>
            <p>{repo.language} / Stars: {repo.stargazers_count}</p>
          </div>
        )
      })}
    </div>
  )
}

export async function getServerSideProps(context) {
  const resRepos = await fetch('https://api.github.com/users/leonardocs1/repos?sort=update')
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
    props: {
      currentDate: new Date().toString(),
      repos
    }
  }
}

export default Index