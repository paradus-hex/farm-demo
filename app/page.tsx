"use client";
import ColostrumTimer from "@/components/ColostrumTimer";
import Timer from "@/components/Timer";
import MyTimer2 from "@/components/Timer2";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar"
import Birthdate from "@/components/Birthdate/Birthdate";
export default function Home() {
  const [time, setTime] = useState(false);
  const [time2, setTime2] = useState(false);
  const [complete, setComplete] = useState(false);
  const [colostrumTime, setColostrumTime] = useState(false);
  const first_4hrs = new Date(Date.now() + 4 * 1000);
  const secnd_12hrs = new Date(Date.now() + 12 * 1000);
  const colostrum = new Date(Date.now() + 10 * 1000);
  const current = new Date(Date.now());
  const birth_date = new Date(current.setDate(current.getDate() + 274));
  const birth_date2 = new Date(current.setDate(current.getDate() + 10));

  return (
    <div className="container my-20">
      <h1 className="text-4xl font-bold text-center md:text-5xl pb-4">
        {/* Farm Demo  */}
        Demo para Granjeros
      </h1>
      <Card>
        <Tabs defaultValue="InSemination" className="w-full ">
          <TabsList className="grid w-full grid-cols-3 space-x-2">
            <TabsTrigger
              value="InSemination"
              className="text-base md:text-2xl font-semibold"
            >
              {/* InSemination */}
              Inseminación
            </TabsTrigger>
            <TabsTrigger
              value="Colostrum"
              className="text-base md:text-2xl font-semibold"
            >
              {/* Colostrum */}
              Calostro
            </TabsTrigger>
            <TabsTrigger
              value="Birthdate"
              className="text-base md:text-2xl font-semibold"
            >
              {/* Calculate date of birth */}
              Nacimiento
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="InSemination"
            className="text-center font-semibold p-10"
          >
            {!time && !time2 ? (
              <CardHeader className="text-lg md:text-2xl">
                {/* If the cow is heat, click button below to track insemination window. */}
                Si la vaca está en celo, haga clic en el botón de abajo para
                comenzar el periodo de inseminación.
              </CardHeader>
            ) : !time ? (
              <CardHeader className="text-lg md:text-2xl">
                {/* If The Insemination has completed then click the button
              below. */}
                Una vez termiada la inseminación, haga clic en el botón de
                abajo.
              </CardHeader>
            ) : (
              <CardHeader className=" text-lg md:text-2xl">
                {/* {`Don't`} start Insemination until the countdown ends. */}
                No comience con la inseminación hasta que termine el reloj.
              </CardHeader>
            )}
            {!time && !time2 ? (
              <Button
                className="md:text-xl"
                onClick={() => {
                  setTime(true);
                  setComplete(false);
                }}
              >
                {" "}
                {/* Start Insemination */}
                Iniciar Periodo de Inseminación
              </Button>
            ) : !time ? (
              <Button
                className="text-xl"
                onClick={() => {
                  setTime(false);
                  setTime2(false);
                  setComplete(true);
                }}
              >
                {" "}
                {/* complete */}
                Terminado
              </Button>
            ) : (
              <div></div>
            )}
            {time ? (
              <>
                <Timer
                  expiryTimestamp={first_4hrs}
                  setTime={setTime}
                  setTime2={setTime2}
                />
                <CardDescription className="text-lg">
                  {/* Please start insemination after the timer ends */}
                  Comience la inseminación después de que el reloj termine.
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
                  {/* Please complete insemination before timer ends */}
                  Termine la inseminación antes de que el reloj termine.
                </CardDescription>
              </>
            ) : (
              <div></div>
            )}
            {complete && !time && !time2 ? (
              <>
                <div className="lg:space-x-2 text-lg md:text-2xl py-8">
                  {/* Expected birth date is between  */}
                  <div>La fecha aproximado de nacimiento sera entre </div>
                  <div>
                    {" ("}
                    {String(new Date(birth_date)).slice(0, 15)} -{" "}
                    {String(new Date(birth_date2)).slice(0, 15)}
                    {")"}
                  </div>
                </div>
              </>
            ) : (
              <div></div>
            )}
          </TabsContent>
          <TabsContent
            value="Colostrum"
            className="text-center font-semibold p-10"
          >
            <CardHeader className="text-lg md:text-2xl">
              {/* Apply Colostrum within 4 hours */}
              Darle calostro al becerro dentro de las proximas 4 horas
            </CardHeader>
            <Button
              className="md:text-xl"
              onClick={() => setColostrumTime(true)}
            >
              {/* Apply Colostrum */}
              Iniciar Reloj
            </Button>
            {colostrumTime ? (
              <ColostrumTimer expiryTimestamp={colostrum} />
            ) : (
              <div></div>
            )}
          </TabsContent>
          <TabsContent
            value="Birthdate"
            className="text-center font-semibold p-10"
          >
           <Birthdate/>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
