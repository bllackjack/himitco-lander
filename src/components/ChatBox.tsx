'use client';

import LangChat from '@/components/LangChat';

export default function ChatBox() {
  return (
    <div className="h-screen text-white bg-gradient-to-b from-dark-bg to-dark-card overflow-hidden">
      <div className="w-full h-full rounded-xl shadow-lg p-2 sm:p-4">
        <div className="h-full w-full px-2 sm:px-5">
          <LangChat/>
        </div>
      </div>
    </div>
  );
}
