"use client";
import Image from "next/image";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="hero-section py-6 sm:py-10 lg:py-16">
        <div className="hero-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Content Section - Shows first on mobile */}
            <div className="hero-content flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-400 leading-tight">
                Hello, I&apos;m{" "}
                <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
                  Piyal Islam
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-400 my-3 sm:my-4 lg:my-6">
                Jr. {" "}
                <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
                  MERN Stack Developer
                </span>
              </p>
              
              <p className="description text-sm sm:text-base text-gray-400 max-w-lg leading-relaxed mb-4 sm:mb-6">
                It&apos;s my dream to become a web developer from my childhood. I&apos;m a quick learner and I&apos;m always looking to improve my skills.
              </p>
              
              {/* Social Icons */}
              <div className="Contact-icons flex gap-3 sm:gap-4 my-4 sm:my-6">
                <Link href="https://github.com/piyal007" target="_blank" className="text-gray-400 hover:text-teal-500 cursor-pointer transition-all duration-300">
                  <GitHubIcon className="text-2xl sm:text-3xl hover:scale-105 transition-all duration-300"/>
                </Link>
                <Link href="https://www.linkedin.com/in/piyal-islam" target="_blank" className="text-gray-400 hover:text-teal-500 cursor-pointer transition-all duration-300">
                  <LinkedInIcon className="text-2xl sm:text-3xl hover:scale-105 transition-all duration-300"/>
                </Link>
                <Link href="https://wa.me/8801956475904" target="_blank" className="text-gray-400 hover:text-teal-500 cursor-pointer transition-all duration-300">
                  <WhatsAppIcon className="text-2xl sm:text-3xl hover:scale-105 transition-all duration-300"/>
                </Link>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <button className="cursor-pointer bg-gradient-to-b from-teal-500 to-teal-700 hover:from-teal-700 hover:to-teal-500 text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 hover:shadow-lg text-sm sm:text-base">
                  Contact
                </button>
                <button className="cursor-pointer bg-gradient-to-b from-teal-500 to-teal-700 hover:from-teal-700 hover:to-teal-500 text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 hover:shadow-lg text-sm sm:text-base">
                  Resume
                </button>
              </div>
            </div>
            
            {/* Image Section - Shows second on mobile */}
            <div className="hero-image flex justify-center items-center order-1 lg:order-2">
              <div className="ring-2 sm:ring-4 ring-teal-500 rounded-full p-1 sm:p-2">
                <Image
                  src="https://i.postimg.cc/HkgcqkZb/dev-piyal-round.png"
                  alt="Dev Piyal"
                  width={300}
                  height={300}
                  className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover"
                  priority
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
