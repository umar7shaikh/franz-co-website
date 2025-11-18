import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>
        {`
          @media (max-width: 767px) {
            .nav-wrapper {
              height: auto !important;
            }

            .nav-inner {
              height: 56px !important;
            }

            /* Mobile dropdown: natural flow, no scroll interference */
            .nav-mobile-menu {
              position: absolute !important;     /* instead of fixed */
              top: 56px !important;
              left: 0 !important;
              width: 100% !important;
              background: white !important;
              z-index: 20 !important;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
            }

            .nav-mobile-list {
              align-items: flex-start !important;
              padding: 16px 16px 24px 16px !important;
              gap: 16px !important;
            }

            .nav-mobile-item a {
              width: 100% !important;
              text-align: left !important;
            }

            /* Buttons: full width, contained */
            .nav-mobile-buttons {
              width: 100% !important;
              align-items: stretch !important;
              margin-top: 16px !important;
              padding: 0 !important;
            }

            .nav-mobile-buttons button {
              width: 100% !important;
              max-width: 100% !important;
              margin: 0 !important;
            }
          }
        `}
      </style>

      <header className="w-full bg-white shadow-sm h-18 nav-wrapper">
        <nav className="max-w-[1920px] mx-auto h-[72px] flex items-center px-4 nav-inner">
          {/* Logo */}
          <Link to="/" className="flex items-center h-[36px] mr-10 font-poppins">
            <span className="font-[800] text-2xl">Logo</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 flex-1 max-w-[600px] font-poppins">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  end={item.path === "/"}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-[16px] font-medium px-1 py-1 transition ${
                      isActive
                        ? "text-[#C34A36]"
                        : "text-zinc-700 hover:text-[#C34A36]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-3 ml-auto">
            <button
              type="button"
              className="font-poppins h-10 min-w-[90px] rounded-md px-5 border border-[#C34A36] text-[#C34A36] font-medium bg-white transition"
            >
              Quote
            </button>
            <button
              type="button"
              className="font-poppins h-10 min-w-[90px] rounded-md px-5 bg-[#C34A36] text-white font-medium border border-[#C34A36] transition"
            >
              Connect
            </button>
          </div>

          {/* Hamburger Icon */}
          <button
            className="md:hidden ml-auto"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-7 h-7 text-[#C34A36]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu - No Scroll Lock */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white md:hidden shadow-lg font-poppins nav-mobile-menu">
            <ul className="flex flex-col items-center gap-6 py-6 nav-mobile-list">
              {navItems.map((item) => (
                <li key={item.name} className="nav-mobile-item">
                  <NavLink
                    end={item.path === "/"}
                    to={item.path}
                    className={({ isActive }) =>
                      `block text-[18px] px-4 py-2 font-medium ${
                        isActive
                          ? "text-[#C34A36]"
                          : "text-zinc-700 hover:text-[#C34A36]"
                      }`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
              <div className="flex flex-col gap-4 w-full items-center mt-4 nav-mobile-buttons">
                <button
                  type="button"
                  className="w-[90%] h-10 rounded-md px-5 border border-[#C34A36] text-[#C34A36] font-medium bg-white transition"
                >
                  Quote
                </button>
                <button
                  type="button"
                  className="w-[90%] h-10 rounded-md px-5 bg-[#C34A36] text-white font-medium border border-[#C34A36] transition"
                >
                  Connect
                </button>
              </div>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
