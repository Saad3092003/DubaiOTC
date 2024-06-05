"use client";
import { Typewriter } from "react-simple-typewriter";

const Type = () => {
  return (
    <span>
      <Typewriter
        words={["Etherum", "USDT"]}
        loop={5}
        cursor
        cursorStyle="|"
        typeSpeed={200}
        deleteSpeed={100}
        delaySpeed={1000}
      />
    </span>
  );
};

export default Type;
