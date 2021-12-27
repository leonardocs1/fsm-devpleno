import { useState, useEffect } from 'react'
import useSWR from 'swr'
import Link from 'next/link'

// conceito 01
const Home = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setInterval(() => {
      setCount((old) => old + 1)
    }, 1000)
  }, [])
  const { data } = useSWR('https://jsonplaceholder.typicode.com/users')
  return (
    <>
      <h1>Olá DevPleno! {count}</h1>
      <div>
        <Link href='/ssr'>
          <a>SSR</a>
        </Link>
        <Link href='/blog'>
          <a>Blog (SSG)</a>
        </Link>
      </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
export default Home;