import React from 'react'
import { useEffect, useState } from 'react';


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
  setLoading(false)
  }
  if(!loading){
      return (
    <div>{repos.map((repo) => (
      <h3 key={repo.id}>{repo.name}</h3>
    ))}</div>
  )
  } else {
    <spam>..loading</spam>
  }

}

export default RepoList
