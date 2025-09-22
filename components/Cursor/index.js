import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

const Cursor = () => {
  const { theme, resolvedTheme } = useTheme();
  const cursorRef = useRef(null);
  const rafRef = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const activeTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = activeTheme === "dark";
  const baseColor = isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)";
  const activeColor = isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)";
  const borderColor = isDark ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)";
  const mixBlendMode = isDark ? "difference" : "normal";

  useEffect(() => {
    if (!mounted) {
      return undefined;
    }

    const cursor = cursorRef.current;
    if (!cursor) {
      return undefined;
    }

    const hasFinePointer =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(pointer: fine)").matches;

    if (!hasFinePointer) {
      cursor.style.display = "none";
      return () => {
        cursor.style.display = "";
      };
    }

    cursor.style.display = "block";
    cursor.style.borderColor = borderColor;
    cursor.style.backgroundColor = baseColor;
    cursor.style.mixBlendMode = mixBlendMode;
    document.body.style.cursor = "none";

    const updateCursor = ({ x, y, size, active }) => {
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      cursor.style.width = `${size}px`;
      cursor.style.height = `${size}px`;
      cursor.style.backgroundColor = active ? activeColor : baseColor;
      cursor.style.opacity = "1";
    };

    const handleMove = (event) => {
      const isTarget = Boolean(event.target.closest(".link"));
      const size = isTarget ? 60 : 30;
      const next = {
        x: event.clientX,
        y: event.clientY,
        size,
        active: isTarget,
      };

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => updateCursor(next));
    };

    const handleLeave = () => {
      cursor.style.opacity = "0";
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      document.body.style.cursor = "";
      cursor.style.display = "";
      cursor.style.opacity = "0";
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = undefined;
      }
    };
  }, [mounted, baseColor, activeColor, borderColor, mixBlendMode]);

  if (!mounted) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate3d(-50%, -50%, 0)",
        transition:
          "transform 0.08s ease, width 0.2s ease, height 0.2s ease, opacity 0.2s ease, background-color 0.2s ease",
        border: `1px solid ${borderColor}`,
        backgroundColor: baseColor,
        zIndex: 9999,
        opacity: 0,
        mixBlendMode,
      }}
    />
  );
};

export default Cursor;
