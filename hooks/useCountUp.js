"use client";
import { useEffect, useState } from "react";

export default function useCountUp(end, duration = 2000, startWhen = true) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!startWhen) return;

    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;

      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setValue(Math.floor(progress * end));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [end, duration, startWhen]);

  return value;
}
