"use client";
import Image from "next/image";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="hero-section py-10">
        <div className="hero-container max-w-7xl mx-auto grid grid-cols-2">
          <div className="hero-image flex justify-center items-center">
            <div className="ring-4 ring-teal-500 rounded-full">
              <Image
                src="https://i.postimg.cc/HkgcqkZb/dev-piyal-round.png"
                alt="Dev Piyal"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="hero-content flex flex-col justify-center items-center p-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-400">
              Hello, I&apos;m{" "}
              <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
                Piyal Islam
              </span>
            </h1>
            <p className="text-lg text-gray-400 my-4">
              Jr. {" "}
              <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
                MERN Stack Developer
              </span>
            </p>
            <p className="description text-gray-400">
              It&apos;s my dream to become a web developer from my childhood. I&apos;m a quick learner and I&apos;m always looking to improve my skills.
            </p>
            <div className="Contact-icons flex gap-4 my-4">
                <div className="github-icon">
                <Link href="https://github.com/piyal007" target="_blank" className="text-gray-400 hover:text-teal-500 cursor-pointer"><GitHubIcon className="hover:scale-105 transition-all duration-300"/></Link>
                </div>
                <div className="linkedin-icon">
                <Link href="https://www.linkedin.com/in/piyal-islam" target="_blank" className="text-gray-400 hover:text-teal-500 cursor-pointer"><LinkedInIcon className="hover:scale-105 transition-all duration-300"/></Link>
                </div>
                <div className="whatsapp-icon">
                <Link href="https://wa.me/8801956475904" target="_blank" className="text-gray-400 hover:text-teal-500 cursor-pointer"><WhatsAppIcon className="hover:scale-105 transition-all duration-300"/></Link>
                </div>
            </div>
            <div className="flex gap-4">
              <button className="cursor-pointer bg-gradient-to-b from-teal-500 to-teal-700 hover:from-teal-700 hover:to-teal-500 text-white font-semibold px-4 py-2 rounded-md">
                Contact
              </button>
              <button className="cursor-pointer bg-gradient-to-b from-teal-500 to-teal-700 hover:from-teal-700 hover:to-teal-500 text-white font-semibold px-4 py-2 rounded-md">
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
