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
    <div>{repos.map((repo) => (
      <div>
       <a className='highlight' target='_blank' rel='noreferrer' href={repo.html_url} key={repo.id}>{repo.name}</a>
      </div>
    ))}</div>
  )
  } else {
    return <PikachuLoading />
  }

}

export default RepoList
