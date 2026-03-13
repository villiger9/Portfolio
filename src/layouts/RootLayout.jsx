import { NavLink, Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className="layout">
      <header>
        <nav className="navbar">
          <h1 className="text-3xl font-bold">Ali Shaker Portfolio</h1>
          <div className="nav-menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Contact</NavLink>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-2xl p-5">
        <Outlet />
      </main>
    </div>
  );
}
