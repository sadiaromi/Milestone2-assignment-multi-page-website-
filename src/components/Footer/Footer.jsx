import React from 'react';
import { FaFacebookF, FaGoogle, FaInstagram} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";



const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary pt-12 pb-8 text-white">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {/*Company details section */}
                <div  data-aos="fade-up" className="space-y-6">
                    <h1 className="text-4xl font-bold">Orange Mint</h1>
                    <p className="text-sm  max-w-[300px]">
                    Orange mint is a refreshing herb with a citrusy twist, combining mint's coolness with a hint of orange flavor. It's great in teas, cocktails, and as a garnish.
                    </p>
                </div>

                {/* Navlink section */}
                <div 
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="space-y-6">
                    <h1 className="text-4xl font-bold">Quick Links</h1>
                    <div className="grid grid-cols-2 gap-3">
                        {/* First Column Links */}
                        <div>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                                <li>
                                    <a href="#">Search Fruits</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                         {/* Second Column Links */}
                         <div>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                                <li>
                                    <a href="#">Search Fruits</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Social links section */}
                <div 
                   data-aos="fade-up"
                   data-aos-delay="500"
                   className="space-y-6">
                <h1 className="text-4xl font-bold">Follow Us
                </h1>
                <div>
                    <p> (+92) 3123-456789</p>
                    <p>Karachi, Pakistan</p>
                </div>
                <div className="flex items-center gap-3">
                <FaFacebookF  className="text-3xl hover:scale-105 duration-300" />
                <FaInstagram  className="text-3xl hover:scale-105 duration-300" />
                <FaGithub  className="text-3xl hover:scale-105 duration-300" />
                <FaGoogle  className="text-3xl hover:scale-105 duration-300" />
                </div>
                </div>
               </div>
               {/* copy right section */}
               <p className="text-white text-center mt-8 pt-8 border-t-2">
                  Copyright &copy; 2024 Company Name. All rights reserved.
               </p>
        </div>
    </div>
  );
};

export default Footer;
