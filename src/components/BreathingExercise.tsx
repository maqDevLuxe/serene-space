import { useState, useEffect, useCallback } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const BreathingExercise = () => {
  const [phase, setPhase] = useState<"idle" | "inhale" | "hold" | "exhale">("idle");
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const phaseDurations = { inhale: 4, hold: 7, exhale: 8 };
  const phaseLabels = { idle: "Press play to begin", inhale: "Breathe In...", hold: "Hold...", exhale: "Breathe Out..." };

  const nextPhase = useCallback(() => {
    setPhase((p) => {
      if (p === "idle" || p === "exhale") return "inhale";
      if (p === "inhale") return "hold";
      return "exhale";
    });
    setSeconds(0);
  }, []);

  useEffect(() => {
    if (!running) return;
    if (phase === "idle") {
      setPhase("inhale");
      setSeconds(0);
      return;
    }

    const interval = setInterval(() => {
      setSeconds((s) => {
        const duration = phaseDurations[phase as keyof typeof phaseDurations];
        if (s + 1 >= duration) {
          nextPhase();
          return 0;
        }
        return s + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [running, phase, nextPhase]);

  const reset = () => {
    setRunning(false);
    setPhase("idle");
    setSeconds(0);
  };

  const circleScale = phase === "inhale" ? 1.15 : phase === "exhale" ? 0.85 : 1;
  const duration = phase !== "idle" ? phaseDurations[phase as keyof typeof phaseDurations] : 0;
  const progress = duration > 0 ? (seconds / duration) * 100 : 0;

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Breathing circle */}
      <div className="relative w-48 h-48 md:w-64 md:h-64">
        <div
          className="absolute inset-0 rounded-full bg-accent/50 transition-transform ease-in-out"
          style={{
            transform: `scale(${circleScale})`,
            transitionDuration: phase === "inhale" ? "4s" : phase === "exhale" ? "8s" : "1s",
          }}
        />
        <div
          className="absolute inset-4 rounded-full bg-primary/20 transition-transform ease-in-out"
          style={{
            transform: `scale(${circleScale})`,
            transitionDuration: phase === "inhale" ? "4s" : phase === "exhale" ? "8s" : "1s",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-display text-xl md:text-2xl text-accent-foreground text-center px-4">
            {phaseLabels[phase]}
          </p>
        </div>
      </div>

      {/* Progress bar */}
      {phase !== "idle" && (
        <div className="w-48 h-1.5 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Controls */}
      <div className="flex gap-3">
        <Button
          variant="calm"
          size="sm"
          onClick={() => setRunning(!running)}
        >
          {running ? <Pause className="h-4 w-4 mr-1" /> : <Play className="h-4 w-4 mr-1" />}
          {running ? "Pause" : "Start"}
        </Button>
        <Button variant="calm-outline" size="sm" onClick={reset}>
          <RotateCcw className="h-4 w-4 mr-1" />
          Reset
        </Button>
      </div>
    </div>
  );
};

export default BreathingExercise;
