import React from 'react'
import { useEffect, useState } from 'react';
import PikachuLoading from '../layout/PikachuLoading'

function RepoList() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRepos()
  }, [])

  const fetchRepos = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/tharoxes/repos`, {    
      headers:{
      Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
  })

  const data = await response.json()
  setRepos(data)
  setTimeout(function() 
    {setLoading(false)}, 3000)

  }
  if(!loading){
      return (
    <ul>{repos.map((repo) => (
      <li key={repo.id}>
       <a className='highlight' target='_blank' rel='noreferrer' href={repo.html_url}>{repo.name}</a>
      </li>
    ))}</ul>
  )
  } else {
    return <PikachuLoading />
  }

}

export default RepoList
