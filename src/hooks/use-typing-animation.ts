"use client";

import { useState, useEffect, useCallback } from "react";

export function useTypingAnimation(
  texts: string[],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000
) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const fullText = texts[currentTextIndex];

    if (!isDeleting) {
      setCurrentText(fullText.substring(0, currentText.length + 1));

      if (currentText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      setCurrentText(fullText.substring(0, currentText.length - 1));

      if (currentText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        return;
      }
    }
  }, [currentText, currentTextIndex, isDeleting, texts, pauseDuration]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  return currentText;
}
