import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Header = () => {

  return (
    <div>
      <header>
        <nav className='flex justify-center space-x-15'>
          <Link to='/home' className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>Home</Link>
          <Link to='/about' className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>About</Link>
          <Link to='/calculadora' className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>Calculadora</Link>
          <Link to='/to-do-list' className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>To-do-list</Link>
          <Link to='/hide-show' className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>HideShow</Link>
          <Link to='/temperature' className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>Temperature</Link>
          <Link to='/random-number' className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>Random Number</Link>
          <Link to='/random-name' className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>Random Name</Link>
          <Link to='/calculate-age' className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>Calculate Age</Link>
          <Link to='/filter-list' className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>Filter List</Link>
          <Link to='/paste-images' className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>Paste Images</Link>
          <Link to='/contador' className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>Contador</Link>
          <Link to='/quiz' className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>Quiz</Link>
         <Link to='/palindromos' className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>Palindromos</Link>
         <Link to='/listProd' className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>Products</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
