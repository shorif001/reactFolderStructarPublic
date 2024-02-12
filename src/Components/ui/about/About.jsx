import React, { useContext } from 'react'
import { UserContext } from '../context/context'

function About() {

  const user = useContext(UserContext)
  console.log("🚀 ~ About ~ user:", user)

  return (
    <div id='about'>
      <h2>About</h2>
    </div>
  )
}

export default About