import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-info">
                    <h2>Mechhelp</h2>
                    <p>Your trusted automotive solution provider</p>
                    <p>&copy; 2024 Mechhelp. All Rights Reserved.</p>
                </div>
                
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                    </ul>
                </div>
                
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p>Email: support@mechhelp.com</p>
                    <p>Phone: +91 9270199836</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
