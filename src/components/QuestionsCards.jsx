import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useCallback,
  useMemo,
} from 'react';

const QuestionCard = React.memo(
  ({
    question,
    answer,
    index,
    setHoveredIndex,
    isOpen,
    toggleQuestion,
    updateHeight,
  }) => {
    const cardRef = useRef(null);
    const contentRef = useRef(null);

    useLayoutEffect(() => {
      if (cardRef.current) {
        updateHeight(index, cardRef.current.offsetHeight, false);
      }
    }, [updateHeight, index]);

    useEffect(() => {
      if (contentRef.current) {
        contentRef.current.style.maxHeight = isOpen
          ? `${contentRef.current.scrollHeight}px`
          : '0px';
        if (isOpen) {
          const timer = setTimeout(
            () => updateHeight(index, cardRef.current.offsetHeight, true),
            300
          );
          return () => clearTimeout(timer);
        }
      }
    }, [isOpen, index, updateHeight]);

    return (
      <div
        ref={cardRef}
        className="relative flex flex-col items-start p-3 border-b border-black dark:border-white/20 w-full cursor-pointer"
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        onClick={() => toggleQuestion(index)}
        data-index={index}
      >
        <div className="w-full flex items-center justify-between">
          <p className="md:text-[26px] text-[20px] unselectable dark:text-white w-fit">
            {question}
          </p>
          <button className="rounded-full border border-black dark:border-white leading-none w-7 h-7 text-[25px] transition-transform duration-300">
            <div
              className="transition-transform duration-300 dark:text-white"
              style={{ transform: `rotate(${isOpen ? 45 : 0}deg)` }}
            >
              +
            </div>
          </button>
        </div>
        <div
          ref={contentRef}
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: isOpen ? '1000px' : '0px' }}
        >
          <p className="text-[18px] text-[#686868] dark:text-[#A0A0A0] mt-3">
            {answer}
          </p>
        </div>
      </div>
    );
  }
);

const AdoptionQuestions = ({ redirect }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoverStyle, setHoverStyle] = useState({});
  const [openQuestions, setOpenQuestions] = useState({});
  const [heights, setHeights] = useState({});
  const containerRef = useRef(null);
  const lastWindowSize = useRef({
    width: window.innerWidth,
  });

  const questions = useMemo(
    () => [
      'Why not hire a full-time designer and developer',
      'How do we communicate during the project?',
      "What if I'm not happy with the results?",
      'Will I be able to get a refund?',
      'How quickly will I receive my project?',
    ],
    []
  );

  const answers = useMemo(
    () => [
      'Hiring full-time professionals is expensive and hard to manage. A senior designer can cost $100k+ and a developer over $300k, plus benefits and vacations totaling $500k+. We offer expert designers and developers for a fraction of that cost, without the hassle of managing them full-time.',
      "We can communicate through WhatsApp, Discord, Slack, or any platform you prefer. We're flexible and keep you updated regularly to ensure the project meets your expectations.",
      "This doesn't happen very often, if you're not happy, we offer unlimited revisions. We'll continue refining the project until you're 100% satisfied.",
      'Refunds are handled on a case-by-case basis. If the project hasn’t progressed beyond the initial stages, we may offer one. Once significant work has been completed, refunds may not be possible.',
      "Project timelines vary based on complexity, but most are completed within 2-6 weeks. We'll provide a detailed timeline after discussing your specific needs.",
    ],
    []
  );

  const updateHeight = useCallback((index, height, isOpen) => {
    setHeights((prev) => ({
      ...prev,
      [index]: { ...prev[index], [isOpen ? 'open' : 'closed']: height },
    }));
  }, []);

  const toggleQuestion = useCallback((index) => {
    setOpenQuestions((prev) => ({ ...prev, [index]: !prev[index] }));
  }, []);

  const updateHoverStyle = useCallback(() => {
    if (hoveredIndex !== null && containerRef.current) {
      const card = containerRef.current.querySelector(
        `[data-index="${hoveredIndex}"]`
      );
      if (card) {
        const { offsetTop } = card;
        const isOpen = openQuestions[hoveredIndex];
        const height = isOpen
          ? heights[hoveredIndex]?.open
          : heights[hoveredIndex]?.closed;
        setHoverStyle({
          top: `${offsetTop}px`,
          height: `${height || card.offsetHeight}px`,
          opacity: 1,
        });
      }
    } else {
      setHoverStyle({ opacity: 0 });
    }
  }, [hoveredIndex, openQuestions, heights]);

  const recalculateHeights = useCallback(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('[data-index]');
      cards.forEach((card, index) => {
        const isOpen = openQuestions[index];
        const contentElement = card.querySelector('div[style]');

        // Update closed height
        updateHeight(index, card.offsetHeight, false);

        // Update open height
        if (isOpen && contentElement) {
          contentElement.style.maxHeight = 'none';
          updateHeight(index, card.offsetHeight, true);
          contentElement.style.maxHeight = `${contentElement.scrollHeight}px`;
        }
      });
    }
  }, [openQuestions, updateHeight]);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      const currentHeight = window.innerHeight;
      const widthDiff = Math.abs(currentWidth - lastWindowSize.current.width);
      const heightDiff = Math.abs(
        currentHeight - lastWindowSize.current.height
      );

      if (widthDiff >= 10) {
        recalculateHeights();
        lastWindowSize.current = { width: currentWidth };
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [recalculateHeights]);

  useEffect(() => {
    updateHoverStyle();
  }, [updateHoverStyle, openQuestions, heights]);

  return (
    <div className="md:w-[85vw] sm:w-[90vw] xss:w-[92.5vw] relative mx-auto bg-white dark:bg-[#131313] font-[poppins] flex">
      <div className="flex w-full mx-auto justify-between gap-24">
        <div className="flex-1 relative">
          <div ref={containerRef} className="w-full">
            <div
              className="absolute left-0 w-full bg-[#f5f5f5] dark:bg-white/5 transition-all duration-300 ease-in-out"
              style={hoverStyle}
            />
            {questions.map((question, index) => (
              <QuestionCard
                key={index}
                question={question}
                answer={answers[index]}
                index={index}
                setHoveredIndex={setHoveredIndex}
                isOpen={!!openQuestions[index]}
                toggleQuestion={toggleQuestion}
                updateHeight={updateHeight}
              />
            ))}
          </div>
        </div>
        <div className="hidden lg:flex bg-[#F1F1F1] dark:bg-[#1F1F1F] w-1/4 aspect-square rounded-xl flex-col align-middle justify-center mx-auto">
          <h2 className="text-center text-[5.25rem] leading-7 mb-11">🤔</h2>
          <h2 className="text-center font-bold font-inter text-2xl dark:text-white">
            Have more Questions? <br />
            Book a FREE Call
          </h2>
          <div className="flex justify-center mt-5">
            <button
              onClick={redirect}
              className="sm:px-[1.42rem] xss:px-[2rem] xss:py-[0.7rem] xss:text-lg sm:py-[0.4rem] bg-[#158928] border border-[#158928] transition-all hover:scale-[1.03] hover:bg-[#1e802e] hover:border-[#1e802e] text-white sm:text-base font-pop font-medium rounded-full dark:bg-[#1A9F30] dark:border-[#1A9F30] dark:hover:bg-[#23B33A] dark:hover:border-[#23B33A]"
            >
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AdoptionQuestions);
