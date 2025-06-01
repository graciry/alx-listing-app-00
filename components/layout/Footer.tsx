import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center p-6 mt-12">
      <p className="text-gray-600">&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
