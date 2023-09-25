'use client'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
export const Footer = () => {
    return (

      <footer className="bg-blue-800 text-white p-8">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h4 className="text-lg font-semibold">Download Our App</h4>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4">
            <h4 className="text-lg font-semibold">Navigation</h4>
            <ul className="mt-4">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">My List</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4">
            <h4 className="text-lg font-semibold">Legal</h4>
            <ul className="mt-4">
              <li>
                <a href="#">General legal info</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <p className="mt-4">support@moovie.com</p>
            <p>Tel: +254000034278</p>
            <span>Or Access by:</span>
            <div className="mt-4">
              <a href="#" className="mr-4">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="mr-4">
                <FaTwitter size={24} />
              </a>
              <a href="#">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <h4 className="text-lg font-semibold">Share Website via:</h4>
          <a href="#" className="mr-4">
            <FaFacebook size={24} />
          </a>
          <a href="#">
            <FaInstagram size={24} />
          </a>
        </div>
      </footer>

    );
  };
