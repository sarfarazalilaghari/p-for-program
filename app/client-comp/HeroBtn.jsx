'use client'
import React from 'react'

import { useRouter } from 'next/navigation'


const HeroBtn = () => {
// const a=Login()
//     const handleLogin=()=>{
// console.log("login",a)
//     }
const router=useRouter()
const navigate=()=>{
router.push("auth/login")
}
  return (
   <button onClick={navigate} className='get-started'>Get Started</button>
  )
}

export default HeroBtn
