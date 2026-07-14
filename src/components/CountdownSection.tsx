import React, { useState, useEffect } from 'react';

const CountdownSection: React.FC = () => {
  const targetDate = new Date('2026-03-27T21:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0'),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="w-full h-screen relative overflow-hidden flex flex-col justify-center items-center bg-[#f5efe6] text-black font-mono">
      {/* Background Noise Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      ></div>

      {/* LEFT SIDEBAR */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-10 hidden md:flex">
        <div className="w-1.5 h-1.5 bg-[#f2b530]"></div>
        <div className="h-24 w-[1px] bg-gray-400"></div>
        <span className="text-[11px] tracking-[0.4em] font-medium" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          CALIBRATING SYSTEMS
        </span>
        <div className="h-24 w-[1px] bg-gray-400"></div>
        <div className="w-1.5 h-1.5 bg-[#f2b530]"></div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-10 hidden md:flex">
        <div className="w-1.5 h-1.5 bg-[#f2b530]"></div>
        <div className="h-24 w-[1px] bg-gray-400"></div>
        <span className="text-[11px] tracking-[0.4em] font-medium" style={{ writingMode: 'vertical-rl' }}>
          PREPARE TO TRANSCEND
        </span>
        <div className="h-24 w-[1px] bg-gray-400"></div>
        <div className="w-1.5 h-1.5 bg-[#f2b530]"></div>
      </div>

      {/* BOTTOM LEFT: STATUS */}
      <div className="absolute bottom-8 left-8 z-10 flex flex-col gap-1">
        <span className="text-[11px] tracking-[0.3em] font-medium uppercase">STATUS:</span>
        <div className="flex items-center gap-3">
          <span className="text-[11px] tracking-[0.3em] font-bold text-[#f2b530] uppercase">STANDBY</span>
          <div className="flex items-center gap-1 opacity-70">
            <div className="h-[2px] w-12 bg-gray-400"></div>
            <div className="h-[2px] w-2 bg-[#f2b530]"></div>
            <div className="h-[2px] w-2 bg-[#f2b530]"></div>
            <div className="h-[2px] w-4 bg-gray-800"></div>
          </div>
        </div>
      </div>

      {/* BOTTOM CENTER: HOURGLASS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center p-3">
        {/* Corner marks */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#f2b530]"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#f2b530]"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#f2b530]"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#f2b530]"></div>
        
        <svg width="14" height="18" viewBox="0 0 24 24" fill="none" stroke="#f2b530" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
          <path d="M5 22h14M5 2h14M12 12l7-10H5l7 10zM12 12l7 10H5l7-10z"/>
        </svg>
      </div>

      {/* BOTTOM RIGHT: COORDINATES */}
      <div className="absolute bottom-8 right-8 z-10 flex flex-col items-end gap-1">
        <span className="text-[12px] md:text-sm tracking-[0.2em] font-medium">17.437° N, 78.448° E</span>
        <span className="text-[10px] tracking-[0.3em] text-[#f2b530] font-bold uppercase">SRM AP</span>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 lg:gap-8 z-10">
        {/* First Row (Mobile) / Left Half (Desktop) */}
        <div className="flex items-center gap-4 lg:gap-8">
          <div className="border border-gray-400 w-24 h-24 flex flex-col items-center justify-center">
            <span>{timeLeft.days}</span>
            <span>Days</span>
          </div>
          <span>:</span>
          <div className="border border-gray-400 w-24 h-24 flex flex-col items-center justify-center">
            <span>{timeLeft.hours}</span>
            <span>Hours</span>
          </div>
        </div>

        {/* Center Colon (Hidden on Mobile) */}
        <span className="hidden md:block">:</span>

        {/* Second Row (Mobile) / Right Half (Desktop) */}
        <div className="flex items-center gap-4 lg:gap-8">
          <div className="border border-gray-400 w-24 h-24 flex flex-col items-center justify-center">
            <span>{timeLeft.minutes}</span>
            <span>Minutes</span>
          </div>
          <span>:</span>
          <div className="border border-gray-400 w-24 h-24 flex flex-col items-center justify-center">
            <span>{timeLeft.seconds}</span>
            <span>Seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
