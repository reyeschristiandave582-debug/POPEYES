"use client";

import React, { useEffect, useState } from "react";
import { Check, Ghost, Flame } from "lucide-react";

interface NotificationItem {
  name: string;
  action: string;
}

// Brand new unique batch of 50 first names
const firstNames = [
  "Audrey", "Bennett", "Camden", "Dakota", "Easton", "Freya", "Gideon", "Hayden", "Iris", "Jonah",
  "Kinsley", "Landon", "Maeve", "Nico", "Ophelia", "Parker", "Reagan", "Sawyer", "Teagan", "Vance",
  "Wren", "Xavier", "Yara", "Zachary", "Ayla", "Bodhi", "Cora", "Declan", "Ember", "Finnegan",
  "Georgia", "Hendrix", "Ivy", "Jasper", "Kaia", "Lennon", "Margot", "Nehemiah", "Oakley", "Phoebe",
  "Reese", "Silas", "Tatum", "Valerie", "Westley", "Xiomara", "Yael", "Zion", "Adeline", "Beckett"
];

const lastInitials = ["A.", "C.", "E.", "G.", "H.", "J.", "K.", "L.", "M.", "N.", "P.", "R.", "S.", "T.", "W."];

const actions = [
  "just claimed a $100 Dunkin card!",
  "just claimed a $100 Halloween voucher!",
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
      {/* Top Banner Bar Container */}
      <div 
        className="sticky top-0 z-50 w-full bg-[#f17a20] border-b border-black/15 py-2.5 px-3 sm:px-4 shadow-md min-h-[44px]"
        style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 10px)" }}
      >
        {/* Background Floating Spooky Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <Ghost 
            className="absolute left-[3%] sm:left-[7%] top-1/2 -translate-y-1/2 w-4 h-4 text-white animate-bounce" 
            strokeWidth={2}
          />
          <Flame 
            className="absolute right-[3%] sm:right-[7%] top-1/2 -translate-y-1/2 w-4 h-4 text-yellow-200 animate-pulse" 
            strokeWidth={2}
          />
        </div>

        {/* Bottom Glowing Accent Line */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent w-full opacity-90 overflow-hidden">
          <div className="absolute inset-0 bg-white animate-shine"></div>
        </div>
      </div>

      {/* Floating Social Proof Toast */}
      {currentNotif && (
        <div
          className={`fixed top-16 left-3 right-3 sm:left-4 sm:right-auto z-[9999] max-w-[350px] mx-auto sm:mx-0 flex items-center gap-2.5 rounded-full border border-orange-300/40 bg-[#f17a20] text-white px-3.5 py-2 shadow-2xl transition-all duration-300 ease-in-out pointer-events-none ${
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
