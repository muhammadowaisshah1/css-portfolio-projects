// "use client";
// import Link from 'next/link';
// import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
// // import styles from './Footer.module.css';
// import "../component/Footer.module.css"
// import styles from"../component/Footer.module.css"
// const Footer = () => {
//   return (
//     <footer className={styles.footer}>
//       <div className={styles.container}>
//         {/* Footer Content Section */}
//         <div className={styles.content}>
//           {/* Left Side: Name and Copyright */}
//           <p className={styles.copyright}>
//             &copy; 2024 Muhammad Owais - AI Agent Developer
//           </p>

//           {/* Right Side: Social Media Icons */}
//           <div className={styles.icons}>
//             <span
//               onClick={() => window.open("https://github.com/muhammadowaisshah1", "_blank", "noopener,noreferrer")}
//               className={styles.icon}
//             >
//               <FaGithub />
//             </span>
//             <span
//               onClick={() => window.open("https://www.linkedin.com/in/syed-owais-shah-1b39962b7/", "_blank", "noopener,noreferrer")}
//               className={styles.icon}
//             >
//               <FaLinkedin />
//             </span>
//             <span
//               onClick={() => window.open("https://www.facebook.com/profile.php?id=61559959665152&mibextid=ZbWKwL", "_blank", "noopener,noreferrer")}
//               className={styles.icon}
//             >
//               <FaFacebook />
//             </span>
//           </div>
//         </div>

//         {/* Divider Line */}
//         <div className={styles.divider}></div>

//         {/* Hire Me Button Section */}
//         <div className={styles.hireMe}>
//           <Link href="/contact" passHref>
//             <span className={styles.hireMeButton}>Hire Me</span>
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




// "use client";

// import Link from 'next/link';
// import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
// import styles from '../component/Footer.module.css'; // Import the CSS module

// const Footer = () => {
//   return (
//     <footer className={styles.footer}>
//       <div className={styles['footer-container']}>
//         {/* Footer Content Section */}
//         <div className={`${styles['footer-content']} sm`}>
//           {/* Left Side: Name and Copyright */}
//           <p className={`${styles['footer-text']} sm`}>
//             &copy; 2024 Muhammad Owais - AI Agent Developer
//           </p>

//           {/* Right Side: Social Media Icons */}
//           <div className={styles['footer-social-icons']}>
//             <span
//               onClick={() => window.open("https://github.com/muhammadowaisshah1", "_blank", "noopener,noreferrer")}
//               className={styles['footer-social-icon']}
//             >
//               <FaGithub />
//             </span>
//             <span
//               onClick={() => window.open("https://www.linkedin.com/in/syed-owais-shah-1b39962b7/", "_blank", "noopener,noreferrer")}
//               className={styles['footer-social-icon']}
//             >
//               <FaLinkedin />
//             </span>
//             <span
//               onClick={() => window.open("https://www.facebook.com/profile.php?id=61559959665152&mibextid=ZbWKwL", "_blank", "noopener,noreferrer")}
//               className={styles['footer-social-icon']}
//             >
//               <FaFacebook />
//             </span>
//           </div>
//         </div>

//         {/* Divider Line */}
//         <div className={styles['footer-divider']} />

//         {/* Hire Me Button Section */}
//         <div className={styles['footer-button-container']}>
//           <Link href="/contact" passHref>
//             <span className={styles['footer-button']}>
//               Hire Me
//             </span>
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




// "use client";

// import Link from 'next/link';
// import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
// import styles from '../component/Footer.module.css'; // Import the CSS module

// const Footer = () => {
//   return (
//     <footer className={styles.footer}>
//       <div className={styles['footer-container']}>
//         {/* Footer Content Section */}
//         <div className={`${styles['footer-content']} sm`}>
//           {/* Left Side: Name and Copyright */}
//           <p className={`${styles['footer-text']} sm`}>
//             &copy; 2024 Muhammad Owais - AI Agent Developer       
//           </p>

//           {/* Right Side: Social Media Icons */}
//           <div className={styles['footer-social-icons']}>
//             <span
//               onClick={() => window.open("https://github.com/muhammadowaisshah1", "_blank", "noopener,noreferrer")}
//               className={styles['footer-social-icon']}
//             >
//               <FaGithub />
//             </span>
//             <span
//               onClick={() => window.open("https://www.linkedin.com/in/syed-owais-shah-1b39962b7/", "_blank", "noopener,noreferrer")}
//               className={styles['footer-social-icon']}
//             >
//               <FaLinkedin />
//             </span>
//             <span
//               onClick={() => window.open("https://www.facebook.com/profile.php?id=61559959665152&mibextid=ZbWKwL", "_blank", "noopener,noreferrer")}
//               className={styles['footer-social-icon']}
//             >
//               <FaFacebook />
//             </span>
//           </div>
//         </div>

//         {/* Divider Line */}
//         <div className={styles['footer-divider']} />

//         {/* Hire Me Button Section */}
//         <div className={styles['footer-button-container']}>
//           <Link href="/contact" passHref>
//             <span className={styles['footer-button']}>
//               Hire Me
//             </span>
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



"use client";

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import styles from '../component/Footer.module.css'; // Import the CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>
        {/* Footer Content Section */}
        <div className={`${styles['footer-content']} sm`}>
          {/* Left Side: Name and Copyright */}
          <p className={`${styles['footer-text']} sm`}>
            &copy; 2024 Muhammad Owais - AI Agent Developer
          </p>

          {/* Right Side: Social Media Icons */}
          <div className={styles['footer-social-icons']}>
            <span
              onClick={() => window.open("https://github.com/muhammadowaisshah1", "_blank", "noopener,noreferrer")}
              className={styles['footer-social-icon']}
            >
              <FaGithub />
            </span>
            <span
              onClick={() => window.open("https://www.linkedin.com/in/syed-owais-shah-1b39962b7/", "_blank", "noopener,noreferrer")}
              className={styles['footer-social-icon']}
            >
              <FaLinkedin />
            </span>
            <span
              onClick={() => window.open("https://www.facebook.com/profile.php?id=61559959665152&mibextid=ZbWKwL", "_blank", "noopener,noreferrer")}
              className={styles['footer-social-icon']}
            >
              <FaFacebook />
            </span>
          </div>
        </div>

        {/* Divider Line */}
        <div className={styles['footer-divider']} />

        {/* Hire Me Button Section */}
        <div className={styles['footer-button-container']}>
          <Link href="/contact" passHref>
            <span className={styles['footer-button']}>
              Hire Me
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

