import { Link } from "react-router-dom";
import "./Footer.css";
import alakhe from '../../assets/images/alakhe.png'
import { FaCopyright, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to='/' className="social-logo">
            ALAKHE <img src={alakhe} alt='alakheLogo' style={{width: '60px', height: '50px'}} />
            </Link>
          </div>
          <small className="website-rights">ALAKHE <FaCopyright /> 2021</small>
          <div className="social-icons">
            <Link className="social-icon-link facebook"
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link className="social-icon-link instagram"
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link className="social-icon-link twitter"
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link className="social-icon-link youtube"
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link className="social-icon-link linkedIn"
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;