import React from 'react';

const UIOverlay = ({ titleRef }) => {
  return (
    <div className="relative z-20 min-h-screen w-full flex flex-col items-center justify-between py-6 md:py-10 pointer-events-none overflow-hidden">
      
      {/* Üst Hissə: Loqo və Accessible Button */}
      <div className="side-el w-full flex flex-row items-start justify-between px-5 md:px-10 pointer-events-auto">
        <div className="flex flex-col items-start opacity-80">
          <div className="h-[1px] w-6 bg-green-500 mb-2 md:hidden" /> 
          <span className="text-[7px] md:text-[10px] tracking-[0.3em] md:tracking-[0.6em] font-bold uppercase leading-none">
            Wakanda <br className="md:hidden" /> Forever
          </span>
        </div>

        <button className="text-[7px] md:text-[9px] tracking-widest border border-white/20 px-3 py-1.5 md:px-6 md:py-2 hover:bg-green-500 hover:border-green-500 transition-all duration-500 uppercase whitespace-nowrap">
          Accessible <span className="hidden sm:inline">Version</span> &gt;&gt;
        </button>
      </div>

      {/* Mərkəzi Hissə: Başlıqlar (Responsive Düzəlişlərlə) */}
      <div className="text-center px-4 w-full max-w-[95vw] mx-auto">
        <p className="side-el text-[10px] md:text-[15px] tracking-[1em] md:tracking-[1.5em] text-green-400/70 mb-2 md:mb-4 font-medium uppercase">
          THE
        </p>
        
        <h1 
          ref={titleRef} 
          className="text-[22px] sm:text-4xl md:text-[50px] lg:text-[60px] font-extrabold tracking-[0.05em] md:tracking-[0.15em] leading-[1.2] drop-shadow-[0_0_30px_rgba(34,197,94,0.4)] break-words uppercase"
        >
          HALL OF <br className="md:hidden" /> ZERO LIMITS
        </h1>

        <p className="side-el mt-4 md:mt-6 text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.8em] text-gray-400 uppercase opacity-50 px-2">
          Explore new paths. <br className="sm:hidden" /> Find your gift.
        </p>

        {/* ENTER Düyməsi */}
        <div className="side-el mt-8 md:mt-16 pointer-events-auto flex justify-center">
          <button className="group relative px-10 py-3.5 md:px-20 md:py-5 bg-green-950/20 border border-green-500/40 overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-green-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 text-[9px] md:text-[10px] tracking-[0.5em] md:tracking-[0.8em] font-bold group-hover:text-white transition-colors">ENTER</span>
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-400 to-transparent animate-scan" />
          </button>
        </div>
      </div>

      {/* Sol tərəfdəki şaquli yazı (Yalnız böyük ekranlar üçün) */}
      <div className="side-el hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 flex-col items-center pl-6 space-y-8 opacity-40">
        <div className="text-[9px] rotate-180 [writing-mode:vertical-lr] tracking-[1.2em]">MISSION: ZERO</div>
        <div className="w-[1px] h-32 bg-gradient-to-b from-green-500 to-transparent" />
      </div>

      {/* Alt Hissə: Footer Məlumatları */}
      <div className="side-el w-full min-h-[60px] border-t border-white/5 flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-4 md:py-0 bg-black/40 backdrop-blur-md space-y-3 md:space-y-0">
        <div className="flex space-x-4 md:space-x-8 text-[7px] md:text-[9px] tracking-[0.3em] md:tracking-[0.4em] opacity-40 uppercase">
          <span>Sprite</span>
          <span>Wakanda Forever</span>
        </div>
        <div className="text-[6px] md:text-[8px] tracking-[0.1em] md:tracking-[0.2em] opacity-30 text-center uppercase font-mono">
          SPRITE ZERO SUGAR® | © 2026 MARVEL
        </div>
      </div>
      
    </div>
  );
};

export default UIOverlay;