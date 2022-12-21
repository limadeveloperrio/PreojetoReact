import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaPinterest />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaWhatsapp />
        </li>
        <li>
          <FaYoutube />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Orçamento</span> &copy; 2022
      </p>
    </footer>
  );
}

export default Footer;
