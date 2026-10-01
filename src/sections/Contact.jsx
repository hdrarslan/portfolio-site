import './Contact.css';

export default function Contact() {
  return (
    <footer id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="contact-inner">
        <h2 id="contact-heading" className="contact-title">Contact</h2>
        <a href="mailto:hdr.arslann@gmail.com" className="contact-email">hdr.arslann@gmail.com</a>
        <ul className="contact-social" aria-label="Social links">
          <li><a href="https://www.linkedin.com/in/hidir-arslan/" target="_blank" rel="noopener noreferrer" className="contact-social-link">LinkedIn</a></li>
        </ul>
        <p className="contact-copy">© 2026. All rights reserved.</p>
      </div>
    </footer>
  );
}
