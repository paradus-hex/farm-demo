"use client";
import React from "react";
import { useTimer } from "react-timer-hook";

const ColostrumTimer = ({ expiryTimestamp }: any) => {
  const { seconds, minutes, hours} = useTimer({
    expiryTimestamp,
  });
  
  return (
    <div className="text-center">
        
      <div className="text-[50px]">
        <span>{String(hours).padStart(2, "0")}</span>:
        <span>{String(minutes).padStart(2, "0")}</span>:
        <span>{String(seconds).padStart(2, "0")}</span>
      </div>

    </div>
  );
};
export default ColostrumTimer;
