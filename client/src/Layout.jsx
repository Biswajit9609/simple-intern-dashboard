import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-4rem)] relative">
        <Outlet />
      </main>
    </>
  );
}