import { useEffect, useState } from "react";
import Antigravity from "./React-bits-Components/LightRays";

function Background() {

  const [count, setCount] = useState(200); // ✅ FIX

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCount(300);
      } else {
        setCount(200);
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);

  return (
    <div style={{ width: "100%", height: "100vh", position: "absolute" }}>
      <Antigravity
        count={count}
        magnetRadius={6}
        ringRadius={7}
        waveSpeed={0.4}
        waveAmplitude={1}
        particleSize={1.5}
        lerpSpeed={0.05}
        color="#5227FF"
        autoAnimate
        particleVariance={1}
        rotationSpeed={0}
        depthFactor={1}
        pulseSpeed={3}
        particleShape="capsule"
        fieldStrength={10}
      />
    </div>
  );
}

export default Background;