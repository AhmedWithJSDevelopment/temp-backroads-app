import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from '../data'
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Navbar = () => {
  return (
    <nav className='navbar  bg-blue-700'> 
      <div className='nav-center'>
        <div className='nav-header '>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}

        <PageLinks parentClass='nav-links' itemClass='nav-link bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  ' />
 
        <ul className='nav-icons  '>
          {socialLinks.map((link) => {
            return <SocialLink {...link} key={link.id} itemClass='nav-icon bg-blue-700' />
          })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
