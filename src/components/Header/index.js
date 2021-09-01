// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <>
    <nav className="header-container">
      <Link to="/" className="link">
        <p className="link-text">Home</p>
      </Link>
      <Link to="/about" className="link">
        <p className="link-text">About</p>
      </Link>
    </nav>
  </>
)
export default Header
