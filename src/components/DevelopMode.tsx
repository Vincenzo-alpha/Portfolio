import React from 'react'
import { Link } from 'react-router-dom'

export default function DevelopMode() {
  return (
    <div className='text-center py-5'>
      <h1>PAGE UNDER DEVELOP</h1>
      <p><strong>COMING SOON...</strong></p>
        <Link to='/'>Home</Link>
    </div>
  )
}
