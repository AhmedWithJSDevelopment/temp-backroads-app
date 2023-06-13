import { pageLinks } from '../data'
import PageLink from './PageLink'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id='nav-links'>
      {pageLinks.map((link) => {
        return <PageLink key={link.id} link={link} itemClass={itemClass} />
      })}
    </ul>
  )
}
export default PageLinks
