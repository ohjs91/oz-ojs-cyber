import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
        <div>123</div>
      </main>
      <Footer />
    </>
  );
};
export default Layout;
