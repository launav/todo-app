import { useState } from 'react'
import { Todos } from './components'


function App() {

  return (
    <>
      <header className='bg-dark text-light text-center py-5'>
        <p className='h1'>Práctica ToDo-List</p>
      </header>

      <main className='container my-5'>
          <Todos/>
      </main>

      <footer className='bg-dark text-light text-center py-1'>
        <p className='h6'>footer</p>
      </footer>
    </>
  )
}

export default App
