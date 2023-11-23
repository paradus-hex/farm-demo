"use client";
import React from "react";
import { useTimer } from "react-timer-hook";
import { Button } from "./ui/button";

const ColostrumTimer = ({ expiryTimestamp }: any) => {
  const { seconds, minutes, hours, start} = useTimer({
    expiryTimestamp,
    autoStart:false
  });
  return (
    <div className="text-center">
        <Button className="text-xl" onClick={start}>Apply Colostrum</Button>
      <div className="text-[50px]">
        <span>{String(hours).padStart(2, "0")}</span>:
        <span>{String(minutes).padStart(2, "0")}</span>:
        <span>{String(seconds).padStart(2, "0")}</span>
      </div>

    </div>
  );
};
export default ColostrumTimer;
