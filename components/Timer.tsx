"use client";
import React from "react";
import { useTimer } from "react-timer-hook";

const MyTimer = ({ expiryTimestamp, setTime,setTime2 }: any) => {
  const { seconds, minutes, hours, days,isRunning } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      setTime(false);
      setTime2(true);
    },
  });
  return (
    <div className="text-center">
      <div className="text-[50px]">
        <span>{String(days).padStart(2, "0")}</span>:
        <span>{String(hours).padStart(2, "0")}</span>:
        <span>{String(minutes).padStart(2, "0")}</span>:
        <span>{String(seconds).padStart(2, "0")}</span>
      </div>

    </div>
  );
};
export default MyTimer;
