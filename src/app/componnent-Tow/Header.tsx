
// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import styles from "../component/Header.module.css"; // Import the custom CSS file

// const Header = () => {
//   const pathname = usePathname(); // Get the current path
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Projects", path: "/project" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <header className={styles.header}>
//       <div className={styles.headerContainer}>
//         <motion.h1
//           className={styles.headerTitle}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           AI Agent Developer
//         </motion.h1>

//         <motion.nav
//           className={styles.nav}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <ul className={styles.nav}>
//             {navItems.map((item) => (
//               <li key={item.path} className={styles.navItem}>
//                 <Link href={item.path}>
//                   <span
//                     className={`${
//                       pathname === item.path ? "active" : ""
//                     }`}
//                   >
//                     {item.name}
//                   </span>
//                 </Link>
//                 {pathname === item.path && (
//                   <motion.div
//                     className={styles.navUnderline}
//                     layoutId="underline"
//                     initial={false}
//                     animate={{ width: "100%" }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 )}
//                 <motion.div
//                   className={styles.navUnderline}
//                   initial={{ width: 0 }}
//                   whileHover={{ width: "100%" }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </li>
//             ))}
//           </ul>
//         </motion.nav>

//         {/* Show hamburger button only on mobile */}
//         <button onClick={toggleMenu} className={styles.menuButton}>
//           {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
//         </button>
//       </div>

//       {menuOpen && (
//         <motion.nav
//           className={styles.mobileNav}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           <ul>
//             {navItems.map((item) => (
//               <li key={item.path} onClick={() => setMenuOpen(false)} className={styles.mobileNavItem}>
//                 <Link href={item.path}>
//                   <span
//                     className={`${
//                       pathname === item.path ? "active" : ""
//                     }`}
//                   >
//                     {item.name}
//                   </span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </motion.nav>
//       )}
//     </header>
//   );
// };

// export default Header;



"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import styles from '../component/Header.module.css'; // Import the CSS module

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/project' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles['header-container']}>
        <motion.h1
          className={styles.logo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          AI Agent Developer
        </motion.h1>

        <motion.nav
          className={`${styles.nav} ${isMobile ? styles.hidden : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ul className={styles['nav-items']}>
            {navItems.map((item) => (
              <li key={item.path} className={styles['nav-item']}>
                <Link href={item.path}>
                  <span
                    className={`${styles['nav-link']} ${pathname === item.path ? styles.active : ''}`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>

        {isMobile && (
          <div className={styles['hamburger-container']}>
            <button onClick={toggleMenu} className={styles['hamburger-icon']}>
              {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        )}
      </div>

      {menuOpen && isMobile && (
        <motion.nav
          className={styles['mobile-menu']}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <ul className={styles['mobile-nav-items']}>
            {navItems.map((item) => (
              <li key={item.path} onClick={() => setMenuOpen(false)} className={styles['mobile-nav-item']}>
                <Link href={item.path}>
                  <span
                    className={`${styles['mobile-nav-link']} ${pathname === item.path ? styles.active : ''}`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
