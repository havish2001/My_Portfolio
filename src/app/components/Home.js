import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function HomePage() {
  return (
    <div className="border flex flex-col md:flex-row px-4 py-2 items-center w-full ">
      <div className="md:w-2/3 md:pr-4">
        <p className="text-3xl font-semibold text-orange-600">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'I am Vadlamani',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'I am Havish',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </p>
        {/* <p className="text-base mt-2">
          Looking for oppor
        </p> */}
        <p className="text-sm mt-5">
        Recent graduate with a degree in Electronic and Communication Engineering (ECE), eager to start a career in IT
industry. Excited to apply my skills in a dynamic environment and learn from experienced professionals while
contributing to the company’s success.
        </p>
      </div>
      <div className="md:w-1/3 md:pl-4 mt-4 md:mt-0 md:justify-center flex items-center">
        <img
          src="https://img.freepik.com/premium-photo/asian-young-man-thinking-doubts-illustration-male-hipster-character-with-dreamy-face-abstract-background-ai-generated-bright-drawn-colorful-poster_107173-45235.jpg"
          alt="image"
          className="rounded-2xl w-32 md:w-60"
        />
      </div>
    </div>
  );
}

export default HomePage;
