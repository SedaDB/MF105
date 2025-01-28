import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Hotel App</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-200">Ana Sayfa</Link>
          <Link to="/search" className="hover:text-blue-200">Otel Ara</Link>
          <Link to="/reservations" className="hover:text-blue-200">Rezervasyonlarım</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 