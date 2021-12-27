import React from 'react'

const Index = ({ repos, user }) => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-5xl'>Olá, eu sou o Leonardo Costa</h1>
      <h2 className='font-bold text-3xl'>Meus repositórios no GitHub</h2>
      <p>Github stats: public repos: {user.public_repos} / public_gists: {user.public_gists} / followers: {user.followers}</p>
      {repos.map(repo => {
        return (
          <div key={repo.id} className='rounded bg-gray-200 mx-8 my-4 p-4 hover:shadow-md'>
            <h3 className='font-bold'>{repo.full_name}</h3>
            <p>{repo.language} / Stars: {repo.stargazers_count}</p>
          </div>
        )
      })}
    </div>
  )
}

export async function getServerSideProps(context) {
  const resUser = await fetch('https://api.github.com/users/leonardocs1')
  const user = await resUser.json()

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
      repos,
      user,
    }
  }
}

export default Index