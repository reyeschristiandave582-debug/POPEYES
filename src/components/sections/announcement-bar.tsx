"use client";

import React, { useEffect, useState } from "react";
import { Check, Lock, ShieldCheck } from "lucide-react";

interface NotificationItem {
  name: string;
  action: string;
}

const firstNames = [
  "Audrey", "Bennett", "Camden", "Dakota", "Easton", "Freya", "Gideon", "Hayden", "Iris", "Jonah",
  "Kinsley", "Landon", "Maeve", "Nico", "Ophelia", "Parker", "Reagan", "Sawyer", "Teagan", "Vance",
  "Wren", "Xavier", "Yara", "Zachary", "Ayla", "Bodhi", "Cora", "Declan", "Ember", "Finnegan",
  "Georgia", "Hendrix", "Ivy", "Jasper", "Kaia", "Lennon", "Margot", "Nehemiah", "Oakley", "Phoebe",
  "Reese", "Silas", "Tatum", "Valerie", "Westley", "Xiomara", "Yael", "Zion", "Adeline", "Beckett"
];

const lastInitials = ["A.", "C.", "E.", "G.", "H.", "J.", "K.", "L.", "M.", "N.", "P.", "R.", "S.", "T.", "W."];

const actions = [
  "just claimed a $100 Popeyes card!",
  "just claimed a $100 voucher!",
  "just unlocked reward eligibility!",
  "just completed the review survey!",
  "just verified eligibility!"
];

const notifications: NotificationItem[] = Array.from({ length: 100 }, (_, i) => ({
  name: `${firstNames[(i * 3) % firstNames.length]} ${lastInitials[(i * 7) % lastInitials.length]}`,
  action: actions[i % actions.length]
}));

export default function AnnouncementBar() {
  const [currentNotif, setCurrentNotif] = useState<NotificationItem | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  
  // 5-minute initial timer countdown state (300 seconds)
  const [timeLeft, setTimeLeft] = useState<number>(271); // starts around 04:31

  // Countdown timer logic
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Format seconds to [ MM:SS ]
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `[ ${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")} ]`;
  };

  // Toast notification interval logic
  useEffect(() => {
    const showRandomNotif = () => {
      const randomIndex = Math.floor(Math.random() * notifications.length);
      setCurrentNotif(notifications[randomIndex]);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 3500);
    };

    const initialTimer = setTimeout(() => {
      showRandomNotif();
    }, 1500);

    const interval = setInterval(() => {
      showRandomNotif();
    }, 7000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Optimized Header Banner Container */}
      <div 
        className="sticky top-0 z-50 w-full bg-[#111111] text-white border-b border-white/10 shadow-lg select-none"
        style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 8px)", paddingBottom: "10px" }}
      >
        <div className="max-w-4xl mx-auto px-3 flex flex-col items-center justify-center gap-1.5 text-center">
          
          {/* Top Line: Reservation Message + Live Timer */}
          <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold tracking-tight">
            <span role="img" aria-label="lock" className="text-base leading-none">
              🔒
            </span>
            <span>
              Your <strong className="text-[#f17a20]">Popeyes</strong> reward spot is reserved for:
            </span>
            <span className="font-mono bg-white/10 text-white/90 px-2 py-0.5 rounded text-xs tracking-wider border border-white/10">
              {formatTime(timeLeft)}
            </span>
          </div>

          {/* Bottom Line: Social Proof & Security Badges */}
          <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs font-bold tracking-wider text-white/80 uppercase">
            <span>OVER 1,400+ VERIFIED TODAY</span>
            <span className="text-white/30">•</span>
            <div className="flex items-center gap-1 text-sky-400">
              <ShieldCheck className="w-3.5 h-3.5 fill-sky-500/20 text-sky-400 inline" strokeWidth={2.5} />
              <span className="text-white/90">256-BIT SSL SECURED</span>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Social Proof Toast */}
      {currentNotif && (
        <div
          className={`fixed top-20 left-3 right-3 sm:left-4 sm:right-auto z-[9999] max-w-[350px] mx-auto sm:mx-0 flex items-center gap-2.5 rounded-full border border-orange-400/30 bg-[#f17a20] text-white px-3.5 py-2 shadow-2xl transition-all duration-300 ease-in-out pointer-events-none ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-3 opacity-0"
          }`}
        >
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[#f17a20]">
            <Check className="w-3 h-3 text-[#f17a20]" strokeWidth={3} />
          </div>

          <div className="text-[10px] sm:text-[11px] text-white truncate leading-tight">
            <span className="font-extrabold text-yellow-100">{currentNotif.name} </span>
            <span className="text-white/90">{currentNotif.action}</span>
          </div>
        </div>
      )}
    </>
  );
}
