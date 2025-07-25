// import React from 'react';
// import '../styles/Header.css';


// const Header = () => {
//   return (
//     <header className="header">
//       <nav className="nav-links">
//         <a href="#">Home</a>
//         <a href="#about">About</a>

//         <div className="nav-item">
//           <a>Skill</a>
//           <div className="dropdown">
//             <a href="#skill1">Skill 1</a>
//             <a href="#skill2">Skill 2</a>
//           </div>
//         </div>

//         <div className="nav-item">
//           <a>Projects</a>
//           <div className="dropdown">
//             <a href="#project1">Project 1</a>
//             <a href="#project2">Project 2</a>
//           </div>
//         </div>

//         <div className="nav-item">
//           <a>Experience</a>
//           <div className="dropdown">
//             <a href="#company1">Company 1</a>
//             <a href="#company2">Company 2</a>
//           </div>
//         </div>

//         <div className="nav-item">
//           <a>Certifications & Achievements</a>
//           <div className="dropdown">
//             <a href="#cert1">Certificate 1</a>
//             <a href="#cert2">Certificate 2</a>
//           </div>
//         </div>

//         <a href="#contact">Contact</a>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import '../styles/Header.css';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <img src="/path/to/logo.png" alt="Logo" style={{ width: '100px' }} />
        <p>
          Waters divided said alent kind seico winged form it tree after female the deep a itself an creepth land bring place day sea doner
        </p>
        <h3>Follow us</h3>
        <div className="footer-social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaPinterestP /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>

      <div className="footer-column">
        <h3>Our Services</h3>
        <ul>
          <li>Business Frustration</li>
          <li>Anxiety Disorder</li>
          <li>Personal Meeting</li>
          <li>Couple Therapy</li>
          <li>Family Counselling</li>
          <li>Dating & Relation</li>
          <li>Depression Problem</li>
          <li>Mental Problem</li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Contact Info</h3>
        <p>House no 35, Palmall street, London, England</p>
        <p><span className="highlight">Email:</span> info@basictheme.com</p>
        <p><span className="highlight">Support:</span> +1 325 562 3265</p>
        <p><span className="highlight">Website:</span> www.basictheme.com</p>
      </div>

      <div className="footer-column">
        <h3>Instagram</h3>
        <div className="instagram-gallery">
          <img src="/path/to/img1.jpg" alt="Instagram 1" />
          <img src="/path/to/img2.jpg" alt="Instagram 2" />
          <img src="/path/to/img3.jpg" alt="Instagram 3" />
          <img src="/path/to/img4.jpg" alt="Instagram 4" />
          <img src="/path/to/img5.jpg" alt="Instagram 5" />
          <img src="/path/to/img6.jpg" alt="Instagram 6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
