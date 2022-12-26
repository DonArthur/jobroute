import { NavLink, Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='root'>
    <header>
      <nav>
        <h1>JobRoute</h1>
        <NavLink to={'/'}>Home</NavLink>
        {/* With NavLink we can style the active class */}
        <NavLink to={'about'}>About</NavLink>
      </nav>
    </header>
    <main>
        <Outlet />
    </main>
    </div>
  )
}

export default MainLayout