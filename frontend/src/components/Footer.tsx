import React from "react";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  MapPin,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-black text-white p-6">
      <div className="flex flex-col-reverse md:flex-row md:space-x-6 justify-between items-center max-w-7xl mx-auto">
        <div className="order-1 md:order-none border p-6 rounded-lg w-full md:w-1/3 text-center">
          <h3 className="text-xl font-semibold mb-4 text-primary">
            Connect with Us
          </h3>
          <div className="flex flex-col items-center space-y-2 text-secondary-icon">
            <div className="flex items-center space-x-2">
              <Phone className="text-yellow-600 w-4 h-4" />
              <span>+91 9567843340</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="text-yellow-600 w-4 h-4" />
              <span>info@deepnetsoft.com</span>
            </div>
          </div>
        </div>

        <div className="order-2 md:order-none border  p-6 rounded-lg w-full md:w-1/3 text-center relative">
          <div className="absolute -top-8 left-1/2 bg-black transform -translate-x-1/2 p-2 ">
            <img
              src="/images/Logo.svg"
              alt="Deep Net Soft Logo"
              className="w-12 h-12"
            />
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-bold mt-6">
            <span className="text-primary">DEEP</span> NET{" "}
            <span className="text-secondary-icon">SOFT</span>
          </h2>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mt-4">
            <Facebook className="w-6 h-6 text-gray-500  cursor-pointer" />
            <Twitter className="w-6 h-6 text-gray-500  cursor-pointer" />
            <Youtube className="w-6 h-6 text-gray-500 cursor-pointer" />
            <Instagram className="w-6 h-6 text-gray-500 cursor-pointer" />
          </div>
        </div>

        <div className="order-1 md:order-none border p-6 rounded-lg w-full md:w-1/3 text-center">
          <h3 className="text-xl font-semibold mb-4 text-primary">Find us</h3>
          <div className="flex flex-col items-center space-y-2 text-secondary-icon">
            <div className="flex items-center space-x-2">
              <MapPin className="text-yellow-600 w-4 h-4" />
              <span>First floor, Geo infopark,</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>Infopark EXPY, Kakkanad</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
