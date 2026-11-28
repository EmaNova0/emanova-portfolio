
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/projects">Projects</Link>
          <Link to="/about">About Me</Link>
        </div>

        <Link to="/" className="logo">
          Ema Nova
        </Link>

        <div className="nav-right">
          <a href="#footer">Connect!</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
