import React from 'react'

const Nav = () => {

  const nav = [
    {
      id:1,
      name:'home'
    },
    {
      id:2,
      name:'about'
    },
    {
      id:3,
      name:'experience'
    },
    {
      id:4,
      name:'projects'
    },
    {
      id:5,
      name:'contact'
    }
  ]


  return (
    <div className='bg-black w-full h-20 text-white fixed'>
      <div className='w-full h-full flex justify-between items-center p-6'>
        <h1 className='text-3xl'>Andrew</h1>
        <ul className='flex gap-6 capitalize text-md'>
          {nav.map(({id,name}) => (
            <li className='hover:scale-110 duration-300 cursor-pointer' key={id}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Nav
