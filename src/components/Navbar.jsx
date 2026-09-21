
import logo from "../assets/images/logo.png";
import menu from "../assets/images/menu.png";

import Divider from "./Divider";
import { FiUser, FiChevronRight, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Login from "../modalWindow/login";
import { useState } from "react";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const onClose = () => {
    setShowLogin(false);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const openLogin = () => {
    setShowLogin(true);
    setShowMenu(false);
  };

  return (
    <>
      <header>
        <nav className="w-full bg-black/95 backdrop-blur-md shadow-lg px-6 md:px-20 flex items-center justify-between">

          {/* LOGO */}
          <div>
            <img
              src={logo}
              alt="Logo"
              className="h-24 md:h-32 w-auto transform scale-110 md:scale-120 py-1 cursor-none translate-y-1.5"
            />
          </div>


          {/* ================= DESKTOP NAVIGATION ================= */}
          <div className="hidden lg:flex flex-row gap-8 items-center">

            {/* HOME */}
            <NavLink to="/" end>
              {({ isActive }) => (
                <div className="relative py-3 group">
                  <div
                    className={`absolute bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-400 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  ></div>

                  <span className="text-2xl font-bold bg-gradient-to-b from-primary via-primary to-black bg-clip-text text-transparent">
                    Home
                  </span>
                </div>
              )}
            </NavLink>


            {/* ABOUT */}
            <NavLink to="/about" end>
              {({ isActive }) => (
                <div className="relative py-3 group">
                  <div
                    className={`absolute bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-400 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  ></div>

                  <span className="text-2xl font-bold bg-gradient-to-b from-primary via-primary to-black bg-clip-text text-transparent">
                    About
                  </span>
                </div>
              )}
            </NavLink>


            {/* SERVICES */}
            <NavLink to="/services" end>
              {({ isActive }) => (
                <div className="relative py-3 group">
                  <div
                    className={`absolute bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-400 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  ></div>

                  <span className="text-2xl font-bold bg-gradient-to-b from-primary via-primary to-black bg-clip-text text-transparent">
                    Services
                  </span>
                </div>
              )}
            </NavLink>


            {/* LOGIN */}
            <button
              onClick={() => setShowLogin(true)}
              className="relative px-4 py-2 rounded-xl shadow-[0_0_15px_var(--color-primary)] hover:shadow-[0_0_15px_var(--color-primary),inset_0_0_15px_var(--color-primary)] flex flex-row items-center gap-0.5"
            >
              <FiUser
                size={24}
                className="mr-1 text-primary"
              />

              <span className="text-3xl -translate-y-0.5 bg-gradient-to-b from-primary via-primary to-black/20 bg-clip-text text-transparent">
                |
              </span>

              <span className="text-2xl px-1.5 font-bold bg-gradient-to-b from-primary via-primary to-black/20 bg-clip-text text-transparent">
                Login
              </span>

              <FiChevronRight
                size={24}
                className="text-primary"
              />
            </button>

          </div>


          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setShowMenu(true)}
            className="lg:hidden flex items-center justify-center"
            aria-label="Open menu"
          >
            <img
              src={menu}
              alt="Menu"
              className="w-14 h-14 object-contain"
            />
          </button>

        </nav>
      </header>


      <Divider />


      {/* ================= MOBILE SIDEBAR OVERLAY ================= */}
      {showMenu && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden"
          onClick={closeMenu}
        >

          {/* SIDEBAR */}
          <aside
            onClick={(e) => e.stopPropagation()}
            className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-black border-l border-primary/40 shadow-[-10px_0_40px_rgba(255,23,68,0.25)] p-6"
          >

            {/* SIDEBAR HEADER */}
            <div className="flex items-center justify-end mb-12">

              {/* <span className="text-2xl font-bold bg-gradient-to-b from-primary via-primary to-black bg-clip-text text-transparent">
                Welcome to CyberLions!
              </span> */}

              <button
                onClick={closeMenu}
                className="text-primary hover:drop-shadow-[0_0_10px_var(--color-primary)] transition"
                aria-label="Close menu"
              >
                <FiX size={32} />
              </button>

            </div>


            {/* SIDEBAR NAVIGATION */}
            <div className="flex flex-col gap-6">

              {/* HOME */}
              <NavLink
                to="/"
                end
                onClick={closeMenu}
              >
                {({ isActive }) => (
                  <div
                    className={`relative py-3 px-4 border border-primary/20 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-primary/10 shadow-[0_0_15px_rgba(255,23,68,0.25)]"
                        : "hover:bg-primary/5 hover:border-primary/50"
                    }`}
                  >
                    <span className="text-xl font-bold bg-gradient-to-b from-primary via-primary to-white bg-clip-text text-transparent">
                      Home
                    </span>
                  </div>
                )}
              </NavLink>


              {/* ABOUT */}
              <NavLink
                to="/about"
                end
                onClick={closeMenu}
              >
                {({ isActive }) => (
                  <div
                    className={`relative py-3 px-4 border border-primary/20 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-primary/10 shadow-[0_0_15px_rgba(255,23,68,0.25)]"
                        : "hover:bg-primary/5 hover:border-primary/50"
                    }`}
                  >
                    <span className="text-xl font-bold bg-gradient-to-b from-primary via-primary to-white bg-clip-text text-transparent">
                      About
                    </span>
                  </div>
                )}
              </NavLink>


              {/* SERVICES */}
              <NavLink
                to="/services"
                end
                onClick={closeMenu}
              >
                {({ isActive }) => (
                  <div
                    className={`relative py-3 px-4 border border-primary/20 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-primary/10 shadow-[0_0_15px_rgba(255,23,68,0.25)]"
                        : "hover:bg-primary/5 hover:border-primary/50"
                    }`}
                  >
                    <span className="text-xl font-bold bg-gradient-to-b from-primary via-primary to-white bg-clip-text text-transparent">
                      Services
                    </span>
                  </div>
                )}
              </NavLink>


              {/* LOGIN */}
              <button
                onClick={openLogin}
                className="mt-2 w-full px-4 py-3 rounded-xl border border-primary/40 shadow-[0_0_15px_rgba(255,23,68,0.2)] hover:shadow-[0_0_20px_rgba(255,23,68,0.4)] flex items-center justify-center gap-2 transition"
              >
                <FiUser
                  size={22}
                  className="text-primary"
                />

                <span className="text-xl font-bold bg-gradient-to-b from-primary via-primary to-white bg-clip-text text-transparent">
                  Login
                </span>

                <FiChevronRight
                  size={22}
                  className="text-primary"
                />
              </button>

            </div>

          </aside>
        </div>
      )}


      {/* LOGIN MODAL */}
      {showLogin && <Login onClose={onClose} />}
    </>
  );
}

export default Navbar;

