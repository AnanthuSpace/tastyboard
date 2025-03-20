import React from "react";

const FooterBottom: React.FC = () => {
  return (
    <div className="w-full border-t border-gray-800 py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center text-sm text-secondary-icon">

        <div className="mb-2 md:mb-0">
          © 2024 Deepnetsoft Solutions. All rights reserved.
        </div>

        <div className="flex space-x-4">
          <a href="#" className="hover:text-white transition">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
