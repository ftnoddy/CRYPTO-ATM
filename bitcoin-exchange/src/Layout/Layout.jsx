import React from "react";
import backgroundImg from '../assets/1353026.png'; // Import your background image

const Layout = ({ children }) => {
  return (
    <div className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="absolute inset-0">{children}</div>
    </div>
  );
};

export default Layout;
