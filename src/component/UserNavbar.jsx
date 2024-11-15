import React from 'react'
import '../assets/homenavbar.css'
import { Link } from 'react-router-dom'

export default function UserNavbar() {
  return (
    <div id='home-nav'>
      <div className='logo'>
        <section>LOGO</section>
      </div>
      <div className='navopt'>
        <section>help</section>
        <section>Language</section>
        <section>Account</section>
      </div>
    </div>
  )
}
