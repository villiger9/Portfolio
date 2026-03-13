import { NavLink, Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className="layout">
      <header>
        <nav className="navbar">
          <h1 className="">Ali Shaker Portfolio</h1>
          <div className="nav-menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Certificates</NavLink>
            <NavLink to="/">Contact</NavLink>
          </div>
        </nav>
      </header>

      <main className="">
        <Outlet />
      </main>
    </div>
  );
}
