"use client";
import Timer from "@/components/Timer";
import MyTimer2 from "@/components/Timer2";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function Home() {
  const [time, setTime] = useState(false);
  const [time2, setTime2] = useState(false);
  const [complete, setComplete] = useState(false);
  const first_4hrs = new Date(Date.now() + 4 * 1000);
  const secnd_12hrs = new Date(Date.now() + 12 * 1000);
  const birth_date = new Date(Date.now())
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
            <CardHeader className="text-2xl">
              If The Cow is in heat start Insemination by clicking the button
              below.
            </CardHeader>
            {!time && !time2 ? (
              <Button className="text-xl" onClick={() => setTime(true)}>
                {" "}
                Start Insemination
              </Button>
            ) : (

              <Button className="text-xl" onClick={() => {setTime(false); setComplete(true)}}>
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
            {complete ? (
              <>
                
                <CardHeader className="text-2xl">
              Estimated birth date is {String(birth_date.getDate())}
            </CardHeader>
              </>
            ) : (
              <div></div>
            )}

          </TabsContent>
          <TabsContent value="Colostrum">colos</TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
