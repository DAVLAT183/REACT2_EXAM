import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date().getTime() + 4 * 24 * 60 * 60 * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-5 text-center">
      <div>
        <span className="text-sm text-gray-600">Days</span>
        <span className="block text-3xl font-bold">{timeLeft.days}</span>
      </div>
      <div className="flex items-center text-3xl font-bold text-red-400">:</div>
      <div>
        <span className="text-sm text-gray-600">Hours</span>
        <span className="block text-3xl font-bold">{timeLeft.hours}</span>
      </div>
      <div className="flex items-center text-3xl font-bold text-red-400">:</div>
      <div>
        <span className="text-sm text-gray-600">Minutes</span>
        <span className="block text-3xl font-bold">{timeLeft.minutes}</span>
      </div>
      <div className="flex items-center text-3xl font-bold text-red-400">:</div>
      <div>
        <span className="text-sm text-gray-600">Seconds</span>
        <span className="block text-3xl font-bold">{timeLeft.seconds}</span>
      </div>
    </div>
  );
}
