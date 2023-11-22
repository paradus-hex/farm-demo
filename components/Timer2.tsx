"use client";
import React from "react";
import { useTimer } from "react-timer-hook";

const MyTimer2 = ({ expiryTimestamp, setTime2,setTime }: any) => {
    const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      setTime2(false);
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
export default MyTimer2;
