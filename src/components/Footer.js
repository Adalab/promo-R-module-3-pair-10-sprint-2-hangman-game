import { NavLink } from 'react-router-dom';
import '../styles/Footer.scss';

function Footer() {
  return (
    <footer class='footer'>
      <nav>
        <ul>
          <li class='footer__menu-item'>
            <NavLink to='/' class='footer__menu-link'>
              A jugar
            </NavLink>
          </li>
          <li class='footer__menu-item'>
            <NavLink class='footer__menu-link active'>¿Cómo se juega?</NavLink>
          </li>
          <li class='footer__menu-item'>
            <NavLink class='footer__menu-link'>Más opciones</NavLink>
          </li>
        </ul>
      </nav>
      <small class='footer__copy'>© Adalab</small>
    </footer>
  );
}
export default Footer;
