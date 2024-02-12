import React, { useContext } from 'react'
import { UserContext } from '../context/context'

const HomeList = () => {

  const user = useContext(UserContext)
  console.log("🚀 ~ HomeList ~ user:", user)

  return (
    <div id='home'>
      <h3>{user.name} is a context data</h3>
      <h2>Home</h2>
    </div>
  )
}

export default HomeList