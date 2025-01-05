import React from 'react';
import './../styles/footer.css';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer">
        <a href="/tutorial" className="footer-link">Full tutorial to get a pack</a>
        <p>Copyright © 2025 All rights reserved</p>
        <p className="footer-dev">
          Designed and developed by <a href="https://me.tudocomlizzyman.com">Lizzyman04</a>
        </p>
      </footer>
      <a href="https://t.me/wolowitz_admin04" className="assistance-button" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram Logo" />
        <span className="assistance-text">Need Assistance?</span>
      </a>
    </>
  );
};

export default Footer;

