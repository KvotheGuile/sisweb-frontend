import { NavLink } from "react-router-dom"

const Navbar = () =>
{
    return (
        <nav
            className="flex flex-wrap items-center gap-1 sm:gap-2"
            aria-label="Principal"
          >
            <NavLink to="/" end>
              Inicio
            </NavLink>
            <NavLink to="/products">
              Productos
            </NavLink>
          </nav>
    )
}

export default Navbar;
