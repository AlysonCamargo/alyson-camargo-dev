import { useState, useEffect } from "react";

export const TypeAnimation = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const texts = [
    "Desenvolvedor Full Stack",
    "Criador de Experiências",
    "Entusiasta de Tecnologia",
  ];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % texts.length;
      const fullText = texts[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <div className="h-20 flex items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-mono font-semibold text-gradient-purple">
        {text}
        <span className="animate-glow">|</span>
      </h2>
    </div>
  );
};
