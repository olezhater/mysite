import React, { useRef, useState, useEffect } from 'react';

function VideoCompare() {
  const videoContainerRef = useRef(null);
  const videoClipperRef = useRef(null);
  const clippedVideoRef = useRef(null);
  const sliderRef = useRef(null);
  const videoAfterRef = useRef(null);
  const videoBeforeRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);

  useEffect(() => {
    // Set the initial clip value to 50vw when the component mounts
    videoClipperRef.current.style.clip = `rect(auto, ${sliderValue}vw, auto, auto)`;

    // Function to handle autoplay based on screen size
    const handleAutoplay = () => {
      const isLaptop = window.innerWidth >= 1024;

      if (videoAfterRef.current && videoBeforeRef.current) {
        if (isLaptop) {
          videoAfterRef.current.setAttribute('autoplay', true);
          videoBeforeRef.current.setAttribute('autoplay', true);
        } else {
          videoAfterRef.current.removeAttribute('autoplay');
          videoBeforeRef.current.removeAttribute('autoplay');
        }
      }
    };

    // Check autoplay on mount and window resize
    handleAutoplay();
    window.addEventListener('resize', handleAutoplay);

    return () => window.removeEventListener('resize', handleAutoplay);
  }, [sliderValue]);

  function trackLocation(e) {
    if (!isDragging) return;

    const rect = videoContainerRef.current.getBoundingClientRect();
    const position = ((e.pageX - rect.left) / videoContainerRef.current.offsetWidth) * 100;
    if (position >= 0 && position <= 100) {
      setSliderValue(position);
    }
  }

  function startDragging() {
    setIsDragging(true);
  }

  function stopDragging() {
    setIsDragging(false);
  }

  return (
    <div
      className="hidden laptop:block"
      id="video-compare-container"
      ref={videoContainerRef}
      onMouseMove={trackLocation}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
      style={{ backgroundColor: "#1B1B1B" }}
    >
      <video
        ref={videoAfterRef}
        loop
        muted
        playsInline
        poster="../images/after_redesign.jpg"
      >
        <source src="../images/after_redesign.mp4" />
        <source src="../images/after_redesign.webm" />
      </video>

      <div
        id="video-clipper"
        ref={videoClipperRef}
        onMouseDown={startDragging}
        onMouseUp={stopDragging}
      >
        <video
          ref={videoBeforeRef}
          loop
          muted
          playsInline
          className="video-before"
          poster="../images/before_redesign.jpg"
          style={{ backgroundColor: "#1B1B1B" }}
        >
          <source src="../images/before_redesign.mp4" />
          <source src="../images/before_redesign.webm" />
        </video>
      </div>

      <div
        className="image-comparison__slider"
        data-image-comparison-slider=""
        style={{ left: `${sliderValue}vw` }}
        ref={sliderRef}
        onMouseDown={startDragging}
        onMouseUp={stopDragging}
      >
        <span className="image-comparison__thumb" data-image-comparison-thumb="">
          <svg
            className="image-comparison__thumb-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="currentColor"
          >
            <path
              className="image-comparison__thumb-icon--left"
              d="M12.121 4.703V.488c0-.302.384-.454.609-.24l4.42 4.214a.33.33 0 0 1 0 .481l-4.42 4.214c-.225.215-.609.063-.609-.24V4.703z"
            ></path>
            <path
              className="image-comparison__thumb-icon--right"
              d="M5.879 4.703V.488c0-.302-.384-.454-.609-.24L.85 4.462a.33.33 0 0 0 0 .481l4.42 4.214c.225.215.609.063.609-.24V4.703z"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
}

export default VideoCompare;