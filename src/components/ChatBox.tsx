'use client';

import LangChat from '@/components/LangChat';

export default function MainHero() {
  return (
    <div className="h-screen text-white bg-gradient-to-b from-dark-bg to-dark-card overflow-hidden">
      <div className="w-full h-full rounded-xl shadow-lg p-2 sm:p-4">
        <div className="h-full w-full p-2 sm:p-5 sm:pr-20 sm:pl-20">
          <LangChat/>
        </div>
      </div>
    </div>
  );
}
