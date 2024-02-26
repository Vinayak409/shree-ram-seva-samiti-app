"use client";
import { TypeAnimation } from "react-type-animation";

export function TypingAnimation() {
  return (
    <TypeAnimation
      sequence={["Welcome To Shree Ram Seva Samiti Portal", 1000]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
}
