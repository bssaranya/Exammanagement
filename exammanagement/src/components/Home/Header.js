import React from 'react';
import { Link } from 'react-router-dom';
import CarouselPage from './Carousel';

// Header
const Header = () => {
  return (
    <div>
      <div>
        <nav className="navbar text-light navbar-light bg-dark  ">
          <h1>NEW YORK REGENTS SCHOOL</h1>
          <form className="container-fluid justify-content-end ">
            <Link
              to="/signup"
              className="btn btn-outline-success me-2"
              type="button"
            >
              Sign-up
            </Link>
            <Link
              to="/login"
              className="btn btn-sm btn-outline-secondary"
              type="button"
            >
              Login
            </Link>
          </form>
        </nav>
      </div>

      <CarouselPage />
    </div>
  );
};

export default Header;
