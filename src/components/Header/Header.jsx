import { CircleUser, Heart, Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <nav className="p-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link className="text-2xl font-bold" to="/">
            GeekyGlam
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link to="/search">
              <Search />
            </Link>
            <Link to="/profile">
              <CircleUser />
            </Link>
            <Link to="wishlist">
              <Heart />
            </Link>
            <Link to="/cartlist">
              <ShoppingCart />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-black focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
