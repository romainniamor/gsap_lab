import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useState, useLayoutEffect, useRef } from "react";
import ReactLogo from "../assets/react.svg";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, RoughEase);
import { gsap } from "gsap";
import { RoughEase } from "gsap/EasePack";

import "../App.css";
import "../Header.css";

export function AnimatedHeader() {
  const titleUp = useRef();
  const titleDown = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .fromTo(
          "span:nth-child(1)",
          {
            rotateX: "180deg",
          },
          {
            rotateX: 0,

            duration: 0.8,
          }
        )
        .fromTo(
          "span:nth-child(2)",
          {
            x: -30,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
          }
        )
        .fromTo(
          ".title .down",
          { y: "-100%" },
          { y: 0, delay: 0.5, stagger: 0.05, duration: 0.2 }
        )
        .to(".title span:nth-child(4)", {
          rotateY: "1080deg",
          duration: 0.5,
        })
        .fromTo(
          ".title span:nth-child(7)",
          {
            x: 200,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.4,
            ease: "elastic.out(1,1)",
          }
        )
        .fromTo(
          ".title .up",
          { y: "100%", rotate: "80deg" },
          { y: 0, rotate: 0, delay: 0.5, stagger: 0.05, duration: 0.4 }
        )
        .to(".title .up, .shadow ", {
          y: "-100%",
          delay: 0.5,
          stagger: 0.2,
          duration: 1,
          ease: "elastic.out(1,0.3)",
        });
    }, titleUp);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .fromTo(
          "span:nth-child(1)",
          {
            scale: 0,
          },
          {
            delay: 1,
            scale: 1,
            duration: 0.5,
            rotateY: "360deg",
          }
        )
        .fromTo(
          ".subtitle .up",
          { y: "100%", rotate: "80deg" },
          { y: 0, rotate: 0, delay: 0.5, stagger: 0.05, duration: 0.2 }
        )
        .fromTo(
          "span:nth-child(4)",
          {
            y: "-100%",
          },
          { y: 0 }
        )
        .fromTo(
          "span:nth-child(3)",
          {
            rotateX: 0,
          },
          {
            delay: 2,
            rotateX: "1080deg",
            duration: 2.5,
            ease: "power4.out",
          }
        );
    }, titleDown);
  }, []);

  return (
    <div className="title-box">
      <div className="title" ref={titleUp}>
        <span>A</span>
        <span>n</span>
        <span className="char down">i</span>
        <span className="char down">m</span>
        <span className="char down">a</span>

        <span className="up">e</span>
        <span className="up">t</span>
        <div className="shadow">
          <span>t</span>
          <span>e</span>
        </div>
      </div>
      <div className="subtitle" ref={titleDown}>
        <span className="char">S</span>
        <span className="char up ">t</span>
        <span className="char up">u</span>
        <span className="char up">f</span>
        <span className="char up ">f</span>
      </div>
    </div>
  );
}
