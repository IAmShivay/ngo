import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith('/dashboard');

  return (
    <div className="min-h-screen flex flex-col">
      {!isDashboardRoute && <Header />}
      <main className={`flex-grow ${isDashboardRoute ? '' : 'mt-4'}`}>
        <Outlet />
      </main>
      {!isDashboardRoute && <Footer />}
    </div>
  );
}
