"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";

type Line = {
  type: "command" | "error" | "output" | "success";
  text: string;
};

function getTerminalLines(path: string): Line[] {
  return [
    { type: "command", text: `$ kubectl get page ${path}` },
    { type: "error", text: `Error from server (NotFound): pages "${path}" not found` },
    { type: "command", text: "$ skyhook status --page" },
    { type: "output", text: "Status: 404" },
    { type: "output", text: "Message: The requested page has been evicted" },
    { type: "command", text: "$ skyhook recover --help" },
    { type: "success", text: "Tip: Try the homepage instead" },
  ];
}

function TypedText({ text, onComplete }: { text: string; onComplete: () => void }) {
  const [charCount, setCharCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (charCount < text.length) {
      const timeout = setTimeout(() => {
        setCharCount((c) => c + 1);
      }, 35);
      return () => clearTimeout(timeout);
    } else if (!done) {
      setDone(true);
      onComplete();
    }
  }, [charCount, text.length, onComplete, done]);

  return (
    <>
      {text.slice(0, charCount)}
      {!done && <span className="animate-pulse">▋</span>}
    </>
  );
}

export default function NotFound() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showButton, setShowButton] = useState(false);

  const terminalLines = getTerminalLines(pathname || "/unknown");

  useEffect(() => {
    setMounted(true);
  }, []);

  const advanceToNextLine = useCallback(() => {
    setIsTyping(false);
    setTimeout(() => {
      if (currentLine < terminalLines.length - 1) {
        setCurrentLine((c) => c + 1);
        setIsTyping(true);
      } else {
        setTimeout(() => setShowButton(true), 400);
      }
    }, 300);
  }, [currentLine, terminalLines.length]);

  // Handle instant output lines
  useEffect(() => {
    if (!mounted || !isTyping) return;

    const line = terminalLines[currentLine];
    if (line && line.type !== "command") {
      const timeout = setTimeout(() => {
        advanceToNextLine();
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [mounted, currentLine, isTyping, terminalLines, advanceToNextLine]);

  const getColorClass = (type: string) =>
    ({
      command: "text-white",
      error: "text-red-400",
      output: "text-gray-400",
      success: "text-green-400",
    })[type];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Big 404 */}
        <h1 className="text-[120px] md:text-[180px] font-bold text-ink-primary leading-none tracking-tight select-none">
          404
        </h1>

        <p className="text-xl text-ink-secondary mb-8 -mt-4">
          Page not found
        </p>

        {/* Terminal */}
        <div className="bg-ink-primary rounded-lg shadow-hard overflow-hidden text-left mb-8">
          {/* Terminal header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <span className="font-mono text-xs text-white/50">bash</span>
            <div className="w-12" />
          </div>

          {/* Terminal content */}
          <div className="p-4 font-mono text-sm">
            {terminalLines.map((line, index) => {
              const isVisible = mounted && index <= currentLine;
              const isCurrentLine = index === currentLine;
              const isTypingCommand = isCurrentLine && isTyping && line.type === "command";

              if (!isVisible) {
                return (
                  <div key={index} className="min-h-5 invisible">
                    {line.text}
                  </div>
                );
              }

              if (isTypingCommand) {
                return (
                  <div key={index} className={`min-h-5 break-all ${getColorClass(line.type)}`}>
                    <TypedText text={line.text} onComplete={advanceToNextLine} />
                  </div>
                );
              }

              return (
                <div key={index} className={`min-h-5 break-all ${getColorClass(line.type)}`}>
                  {line.text}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div
          className={`transition-all duration-500 ${
            showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button href="/" className="inline-flex">
            Back to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
}
