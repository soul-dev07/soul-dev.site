import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Meetings = () => {
  const [dotLottie, setDotLottie] = React.useState(null);
  const dotLottieRefCallback = (dotLottie) => {
    setDotLottie(dotLottie);
  };

  function play() {
    if (dotLottie) {
      dotLottie.play();
    }
  }

  function stop() {
    if (dotLottie) {
      dotLottie.pause();
    }
  }
  return (
    <div className="my-16 border-t border-b border-black/30">
      <div className="my-16 flex flex-col items-center justify-center text-center gap-8">
        <h2 className="xl:text-[50px] md:text-[40px] text-[30px] font-[poppins] tracking-tight">
          <div>
            Your website is your{' '}
            <span className="text-[#007D98]">24/7 salesman</span>
          </div>
          <div>Don't just settle for an ordinary one.</div>
          <div>
            Go <span className="text-[#00982A]">beyond</span> with Masked
          </div>
        </h2>
        <button
          className="bg-[#00982A] font-semibold md:text-[22px] text-[16px] p-3 rounded-full text-white flex items-center justify-evenly"
          onMouseEnter={play}
          onMouseLeave={stop}
        >
          <span>Schedule a Meeting</span>
          <DotLottieReact
            src="../m12i99hy.lottie"
            loop
            mode="reverse"
            speed={1.2}
            className="md:h-[30px] h-[25px]"
            id="player"
            dotLottieRefCallback={dotLottieRefCallback}
          />
        </button>
      </div>
    </div>
  );
};

export default Meetings;
