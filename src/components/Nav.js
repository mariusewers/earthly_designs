import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="globalnavigation">
      <NavLink to="/">Hjem</NavLink>
      <NavLink to="/Cases">Cases</NavLink>
      <NavLink to="/Priser">Priser</NavLink>
      <NavLink to="/Kontakt">Kontakt</NavLink>
    </nav>
  );
}
