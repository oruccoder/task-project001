import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Loader from './components/Loader';
import Scene3D from './components/Scene3D';
import UIOverlay from './components/UIOverlay';

function App() {
  const container = useRef();
  const sceneRef = useRef();
  const titleRef = useRef();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 800);
          return 100;
        }
        return prev + 1;
      });
    }, 40);
    return () => clearInterval(timer);
  }, []);

  useGSAP(() => {
    if (loading) return;

    const text = titleRef.current.innerText;
    titleRef.current.innerHTML = text.split("").map(char => 
      `<span class="char inline-block">${char === " " ? "&nbsp;" : char}</span>`
    ).join("");

    const chars = titleRef.current.querySelectorAll('.char');

    const tl = gsap.timeline();
    tl.set(".side-el", { opacity: 0 });
    tl.set(".central-structure", { scale: 1.5, opacity: 0 });

    tl.to(".central-structure", { scale: 1, opacity: 1, duration: 2, ease: "power3.out" })
      .from(chars, { 
        y: 100, opacity: 0, rotateX: -90, stagger: 0.03, duration: 1, ease: "back.out(1.7)" 
      }, "-=1.2")
      .to(".side-el", { opacity: 1, x: 0, stagger: 0.1, duration: 1 }, "-=0.5");

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5);
      const y = (clientY / window.innerHeight - 0.5);

      gsap.to(sceneRef.current, {
        rotateY: x * 25,
        rotateX: -y * 20,
        duration: 1.2,
        ease: "power2.out"
      });

      gsap.to(".bg-layer-1", { x: x * 70, y: y * 70, duration: 1.5 });
      gsap.to(".bg-layer-2", { x: -x * 50, y: -y * 50, duration: 1.2 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, { scope: container, dependencies: [loading] });

  return (
    <main ref={container} className="relative h-screen w-full overflow-hidden bg-black text-white select-none perspective-1000">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-scan { animation: scan 2.5s linear infinite; }
        .perspective-1000 { perspective: 1500px; }
      `}} />

      {loading ? (
        <Loader progress={progress} />
      ) : (
        <>
          <Scene3D sceneRef={sceneRef} />
          <UIOverlay titleRef={titleRef} />
        </>
      )}
    </main>
  );
}

export default App;