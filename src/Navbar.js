const Navbar = () => {
  return (
    <nav className="navbar">
      <h1> Lista de compras das receitas</h1>
      <div className="links">
        <a href="/"> Lista de receitas </a>
        <a href="/NovaReceita"> Nova receita </a>
      </div>
    </nav>
  );
};

export default Navbar;
