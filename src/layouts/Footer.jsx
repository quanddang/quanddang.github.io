import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      Designed & Built by Quan Dang ©2023 – {currentYear}
    </footer>
  );
}

export default Footer;
