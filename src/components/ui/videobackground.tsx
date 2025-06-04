// components/VideoBackground.js
'use Client';

const VideoBackground = ({ children }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video element */}
      <video
        autoPlay
        loop
        muted
        playsInline // Important for mobile autoplay
        className="absolute w-full h-full object-cover opacity-10"
      >
        <source src="/videos/background-video2.mp4" type="video/mp4" />
        {/* You can add another source for WebM for better browser compatibility */}
        {/* <source src="/videos/my-background-video.webm" type="video/webm" /> */}
 
      </video>

      {/* Content overlay */}
      <div className="relative z-10 flex items-center justify-center h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;