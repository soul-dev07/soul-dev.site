import React from 'react';

const Footer = () => {
  return (
    <div className="font-[poppins] md:w-[85vw] sm:w-[90vw] xss:w-[92.5vw] mx-auto flex flex-col justify-between gap-[47px] pb-16 mt-16">
      <div className="space-y-[47px] border-b border-black/30 dark:border-white/30 pb-4">
        <div className="flex xs:flex-row flex-col w-full xs:justify-between">
          <h3 className="2xl:text-[50px] lg:text-[40px] md:text-[32px] text-[26px] tracking-tighter sm:leading-[4rem] font-serif w-fit dark:text-white">
            We Don't Just Build <br />
            Websites, <span className="text-[#00982a] dark:text-[#00c037]">We Build Dreams</span>
          </h3>
          <nav className="lg:gap-6 md:gap-2 hidden xs:flex">
            {/* <i className="ri-linkedin-box-fill text-[40px] text-black dark:text-white transition-all duration-300 ease-in-out hover:scale-110 hover:filter active:drop-shadow-[0_0_5px_rgba(10,102,194,0.5)] active:text-[#0A66C2] cursor-pointer"></i> */}
            <i className="ri-github-fill text-[40px] text-black dark:text-white transition-all duration-300 ease-in-out hover:scale-110 hover:filter active:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] active:text-gray-600 dark:active:text-gray-400 cursor-pointer"></i>
            <i className="ri-discord-fill text-[40px] text-black dark:text-white transition-all duration-300 ease-in-out hover:scale-110 hover:filter active:drop-shadow-[0_0_5px_rgba(114,137,218,0.5)] active:text-[#7289DA] cursor-pointer"></i>
          </nav>
        </div>
        <div className="font-[poppins] w-full flex justify-between">
          <div className="xs:space-y-2">
            <p className="font-medium 2xl:text-[16px] text-[12px] text-black/60 dark:text-white/60">
              Email us:
            </p>
            <a
              href="mailto:hello@Soul-dev.site"
              target="_blank"
              rel="noopener noreferrer"
              className="2xl:text-[24px] xs:text-[18px] text-[16px] hover:underline dark:text-white"
            >
              hello@Soul-dev.site
            </a>
          </div>
          <div className="xs:gap-3 gap-1 items-center hidden xs:flex">
            <img
              src="ph_shower-bold.png"
              alt=""
              className="2xl:h-[35px] xs:h-[35px] h-[30px] dark:invert"
            />
            <p className="2xl:text-[22px] sm:text-[23px] xs:text-[22px] text-[20px] xs:tracking-normal tracking-tighter font-semibold dark:text-white">
              SOUL Web
            </p>
          </div>
          <nav className="flex xs:hidden gap-3">
            {/* <i className="ri-linkedin-box-fill text-[28px] text-black dark:text-white transition-all duration-300 ease-in-out hover:scale-110 hover:filter active:drop-shadow-[0_0_5px_rgba(10,102,194,0.5)] active:text-[#0A66C2] cursor-pointer"></i> */}
            <i className="ri-github-fill text-[28px] text-black dark:text-white transition-all duration-300 ease-in-out hover:scale-110 hover:filter active:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] active:text-gray-600 dark:active:text-gray-400 cursor-pointer"></i>
            <i className="ri-discord-fill text-[28px] text-black dark:text-white transition-all duration-300 ease-in-out hover:scale-110 hover:filter active:drop-shadow-[0_0_5px_rgba(114,137,218,0.5)] active:text-[#7289DA] cursor-pointer"></i>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
