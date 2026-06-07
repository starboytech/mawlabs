"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "software that thinks.",
  "agents that work 24/7.",
  "systems that scale.",
  "security that holds.",
  "data that decides.",
];

export default function TypewriterText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const phrase = PHRASES[phraseIndex];

    if (paused) {
      const t = setTimeout(() => setPaused(false), 1800);
      return () => clearTimeout(t);
    }

    if (!deleting && displayed.length < phrase.length) {
      const t = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 42);
      return () => clearTimeout(t);
    }

    if (!deleting && displayed.length === phrase.length) {
      const t = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(t);
    }

    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 22);
      return () => clearTimeout(t);
    }

    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPaused(true);
      setPhraseIndex((i) => (i + 1) % PHRASES.length);
    }
  }, [displayed, deleting, paused, phraseIndex]);

  return (
    <span className="gradient-text">
      {displayed}
      <span className="animate-pulse text-amber-400">|</span>
    </span>
  );
}
