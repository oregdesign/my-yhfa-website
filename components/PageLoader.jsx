"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`islamic-loader ${hidden ? "hidden" : ""}`}>
      <div className="islamic-shape">
        <span></span>
      </div>
    </div>
  );
}
