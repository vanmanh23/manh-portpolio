import React from 'react'
import { Navbar, Works } from '../components'
import { styles } from '../styles'

export default function AllProjects() {
  return (
    <div className='relative z-0 bg-primary'>
    <div className=''>
      <Navbar />
    </div>
    <div className={`${styles.padding} max-w-7xl mx-auto relative z-0 pt-20`}>
          <Works isopen={true}/>
    </div>
  </div>
  )
}
