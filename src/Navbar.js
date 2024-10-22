import { Link } from "react-router-dom"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1> Lista de compras das receitas</h1>
      <div className="links">
        <Link to="/"> Lista de receitas </Link>
        <Link to="/NovaReceita"> Nova receita </Link>
      </div>
    </nav>
  );
};

export default Navbar;
