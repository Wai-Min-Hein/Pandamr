import React from "react";
import {FaFacebookF,FaTwitter,FaLinkedin,FaInstagram,FaYoutube,FaTelegramPlane,FaDiscord} from 'react-icons/fa'
// import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
// import { FaTelegramPlane } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-black py-10 mt-10 px-4">
      <div className="grid md:grid-cols-4 md:grid-rows-1 grid-cols-1 grid-row-4 lg:container lg:mx-auto lg:px-10 text-[#fafafa] ">
        <div className="md:col-start-1 md:col-end-2 col-start-1 col-end-2 ">
          <img
            src="https://static.pandamr.com/fs/userFiles/pandamrv2/images/2513-frame-427321994.png?v=1664179718"
            className=" lg:translate-x-[-1.5rem]"
            alt=""
          />
          <p className="text-[14px] font-normal font-light w-1/3 md:w-2/3 lg:w-[80%] mt-5 leading-4">
            PandaMR is a metaverse designed for the needs of businesses and
            communities with immersive 3D virtual solutions optimized for
            companies, educational entities, arts and entertainment industries.
          </p>
        </div>
        <div className="md:col-start-2 md:col-end-3  col-start-1 col-end-2">
          <h4 className="font- font-akiraBold font-semibold mb-4 text-[1.1rem] ">support</h4>
          <p className="capitalize text-[1rem] mb-2 font-light font-normal">
            contact us
          </p>
          <p className="capitalize text-[1rem] font-light font-normal">FAQ</p>
        </div>
        <div className="md:col-start-3 md:col-end-4 col-start-1 col-end-2">
          <h4 className="font- font-akiraBold font-semibold mb-4 text-[1.1rem]  ">
            resources
          </h4>
          <p className="capitalize text-[1rem]  font-light font-normal">
            blog
          </p>
          <p className="capitalize text-[1rem] my-2 font-light font-normal">
            careers
          </p>
          <p className="capitalize text-[1rem]  font-light font-normal">
            case studies
          </p>
        </div>
        <div className="md:col-start-4 md:col-end-5 col-start-1 col-end-2">
          <h4 className="font- font-akiraBold font-semibold mb-4 text-[1.1rem]  ">legal</h4>
          <p className="capitalize text-[1rem]  font-light font-normal">
            privacy policy
          </p>
          <p className="capitalize text-[1rem] my-2 font-light font-normal">
            terms and conditions
          </p>
          <p className="capitalize text-[1rem]  font-light font-normal">
            cookies policy
          </p>
        </div>
      </div>
      
      <div className=' flex flex-col items-center gap-3 justify-center mt-10'>
        <ul className='grid grid-cols-7  gap-8' >
            <li>
                <a href="https://www.facebook.com/PandamrMetaverse" target='_blank' aria-label='facebook'><FaFacebookF className='text-xl text-[#fafafa] '/></a>
            </li>
            <li>
                <a href="https://twitter.com/Metaverse_pmr" target='_blank' aria-label='twitter'><FaTwitter className="text-xl text-[#fafafa]"/></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/company/pandamr/" target='_blank' aria-label='linkedin'><FaLinkedin className="text-xl text-[#fafafa]"/></a>
            </li>
            <li>
                <a href="https://www.instagram.com/the_pandamr" target='_blank' aria-label='instagram'><FaInstagram className="text-xl text-[#fafafa]"/></a>
            </li>
            <li>
                <a href="https://youtube.com/@PandaMR_Metaverse" target='_blank' aria-label='youtube'><FaYoutube className="text-xl text-[#fafafa]"/></a>
            </li>
            <li>
                <a href="https://t.me/Pandamr_Metaverse" target='_blank' aria-label='telegram'><FaTelegramPlane className="text-xl text-[#fafafa]"/></a>
            </li>
            <li>
                <a href="https://discord.gg/pmrmetaverse" target='_blank' aria-label='discord'><FaDiscord className="text-xl text-[#fafafa]"/></a>
            </li>
        </ul>
        <p className="text-[.7rem] mt-5 font-heavy font-semibold text-[#fafafa] text-center">
          Copyright PandaMR 2023. All rights reserved
        </p>  
    </div>
    </footer>
  );
};

export default Footer;
