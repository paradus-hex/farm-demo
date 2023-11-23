"use client";
import ColostrumTimer from "@/components/ColostrumTimer";
import Timer from "@/components/Timer";
import MyTimer2 from "@/components/Timer2";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function Home() {
  const [time, setTime] = useState(false);
  const [time2, setTime2] = useState(false);
  const [complete, setComplete] = useState(false);
  const [colostrumTime, setColostrumTime] = useState(false)
  const first_4hrs = new Date(Date.now() + 4 * 1000);
  const secnd_12hrs = new Date(Date.now() + 12 * 1000);
  const colostrum = new Date(Date.now() + 10 * 1000);
  const birth_date = new Date(Date.now());
  return (
    <div className="container my-20">
      <h1 className="text-5xl font-bold text-center"> Farm Demo </h1>
      <Card>
        <Tabs defaultValue="InSemination" className="w-full ">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              value="InSemination"
              className="text-2xl font-semibold"
            >
              InSemination
            </TabsTrigger>
            <TabsTrigger value="Colostrum" className="text-2xl font-semibold">
              Colostrum
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="InSemination"
            className="text-center font-semibold p-10"
          >
            {!time && !time2  ?<CardHeader className="text-2xl">
              If The Cow is in heat start Insemination by clicking the button
              below.
            </CardHeader>:<CardHeader className="text-2xl">
              If The Insemination has completed then click the button
              below.
            </CardHeader>}
            {!time && !time2 ? (
              <Button
                className="text-xl"
                onClick={() => {
                  setTime(true);
                  setComplete(false);
                }}
              >
                {" "}
                Start Insemination
              </Button>
            ) : (
              <Button
                className="text-xl"
                onClick={() => {
                  setTime(false);
                  setTime2(false);
                  setComplete(true);
                }}
              >
                {" "}
                complete
              </Button>
            )}
            {time ? (
              <>
                <Timer
                  expiryTimestamp={first_4hrs}
                  setTime={setTime}
                  setTime2={setTime2}
                />
                <CardDescription className="text-lg">
                  Please Inseminate between 16 hours
                </CardDescription>
              </>
            ) : (
              <div></div>
            )}
            {time2 ? (
              <>
                <MyTimer2
                  expiryTimestamp={secnd_12hrs}
                  setTime={setTime}
                  setTime2={setTime2}
                />
                <CardDescription className="text-rose-600 text-lg">
                  Please Inseminate before 12 hours
                </CardDescription>
              </>
            ) : (
              <div></div>
            )}
            {complete && !time && !time2? (
            <>
              <CardHeader className="text-2xl">
                Estimated birth date is between{" ("}
                {String(
                  new Date(birth_date.setDate(birth_date.getDate() + 262))
                ).slice(0, 15)}{" "}
                -{" "}
                {String(
                  new Date(birth_date.setDate(birth_date.getDate() + 262))
                ).slice(0, 15)}{")"}
              </CardHeader>
            </>
             ) : (
              <div></div>
            )} 
          </TabsContent>
          <TabsContent value="Colostrum" className="text-center font-semibold p-10">
          <CardHeader className="text-2xl">
            Apply Colostrum within 4 hours
            </CardHeader>
            <Button className="text-xl" onClick={()=>setColostrumTime(true)}>Apply Colostrum</Button>
            {colostrumTime?
            <ColostrumTimer expiryTimestamp={colostrum}/>
            :
            <div></div>
            }
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
