import React from 'react';
import { Ghost, Skull, Wand2, Sparkles, Flame, Bug } from 'lucide-react';
import Image from 'next/image';

const AnimatedBackground = () => {
  return (
    <>
      {/* Light Central Radial Vignette - Clean White Center for High Readability */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(250,245,255,0.95) 50%, rgba(243,232,255,0.9) 100%)'
        }}
      />

      {/* Floating Halloween Vector Icons on Sides */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20 z-0">
        <Ghost className="absolute top-16 left-3 w-6 h-6 text-purple-600 animate-rotate-slow" />
        <Flame className="absolute top-44 left-4 w-6 h-6 text-orange-500 animate-float-spin" />
        <Sparkles className="absolute top-28 right-4 w-6 h-6 text-amber-500 animate-twinkle" />
        <Skull className="absolute bottom-36 left-4 w-6 h-6 text-purple-700 animate-rotate-reverse" />
        <Bug className="absolute bottom-52 right-4 w-6 h-6 text-orange-600 animate-float-gentle" />
        <Wand2 className="absolute top-[60%] left-2 w-6 h-6 text-amber-600 animate-rotate-slow" />
        <Ghost className="absolute top-[40%] right-3 w-6 h-6 text-purple-600 animate-float-spin" />
      </div>

      {/* Edge Image Overlays */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-[0.08] z-0">
        <Image
          src="https://i.imgur.com/wBR1AeN.png"
          alt=""
          width={100}
          height={100}
          quality={100}
          className="absolute top-12 left-2 w-14 h-14 object-contain animate-float-gentle delay-1000"
        />
        <Image
          src="https://i.imgur.com/ygxHoLg.png"
          alt=""
          width={160}
          height={160}
          quality={100}
          className="absolute top-24 right-2 w-16 h-16 object-contain animate-float-gentle"
        />
        <Image
          src="https://i.imgur.com/GOC3Kll.png"
          alt=""
          width={160}
          height={160}
          quality={100}
          className="absolute top-[42%] left-2 w-16 h-16 object-contain animate-float-gentle"
        />
        <Image
          src="https://i.imgur.com/lXjkpxD.png"
          alt=""
          width={160}
          height={160}
          quality={100}
          className="absolute top-[78%] right-2 w-16 h-16 object-contain animate-float-gentle"
        />
        <Image
          src="https://i.imgur.com/jTqrn7Y.png"
          alt=""
          width={160}
          height={160}
          quality={100}
          className="absolute bottom-20 left-3 w-16 h-16 object-contain animate-float-gentle"
        />
        <Image
          src="https://i.imgur.com/lD0F3KY.png"
          alt=""
          width={80}
          height={80}
          quality={100}
          className="absolute bottom-12 right-3 w-14 h-14 object-contain animate-float-gentle"
        />
      </div>
    </>
  );
};

export default AnimatedBackground;
