import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const WorkCard = ({ img, name, description, onClick, isHomepage, alt, className, enableParallax }) => {
  const truncatedDescription = description?.length > 160 ? `${description.slice(0, 160)}...` : description;
  
  const { theme } = useTheme();
  const [scrollOffset, setScrollOffset] = useState(0);

  const handleScroll = () => {
    setScrollOffset(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const transformValue = enableParallax ? `translateY(${-scrollOffset * 0.4}px)` : 'none';

  return (
    <div
      className={`relative rounded-lg mb-8 first:ml-0 link ${className}`}
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{
          height: "600px",
          position: "relative",
          overflow: "hidden",
          boxShadow: theme === "dark" ? "0 0 12px rgba(13, 10, 44, 0.6)" : "0 0 12px rgba(33, 24, 81, 0.5)",
        }}
      >
        <img
          alt={alt}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
          style={{
            position: "relative",
          }}
        />
        <div
          className="bg-image-container"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            transform: transformValue,
            backgroundImage: `url('../images/card-bg.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "100%",
            height: "400%",
            zIndex: "-1",
          }}
        />
      </div>
      <h3 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h3>
      {isHomepage ? (
        <h4 className="text-xl opacity-50 line-clamp-2">
          {truncatedDescription ? truncatedDescription : "Description"}
        </h4>
      ) : (
        <h4 className="text-xl opacity-50">
          {description ? description : "Description"}
        </h4>
      )}
    </div>
  );
};

export default WorkCard;
