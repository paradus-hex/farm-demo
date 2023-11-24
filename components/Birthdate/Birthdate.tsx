"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CardHeader } from "../ui/card";
const FormSchema = z.object({
  dob: z.date({
    // required_error: "A date of birth is required.",
    required_error: "Se requiere una fecha de nacimiento.",
  }),
});

const Birthdate = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    data.dob;
    const birth_date = new Date(data.dob.setDate(data.dob.getDate() + 274));
    setDate(birth_date);
    setVisulaizeDate(true);
    console.log(birth_date);
  }
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [visualize, setVisulaizeDate] = React.useState<boolean>(false);
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center">
                <CardHeader className="text-lg md:text-2xl">
                  {/* Calculate date of birth */}
                  Calcular fecha de nacimiento
                </CardHeader>
                <FormDescription className="text-base mb-2">
                  {/* Select Insemination Date to get a birthdate */}
                  Seleccione la fecha de inseminación para obtener una fecha de
                  nacimiento
                </FormDescription>
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  className="rounded-md border"
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">
            {/* Submit */}
            Entregar
          </Button>
        </form>
      </Form>
      {visualize ? (
        <div className="lg:space-x-2 text-lg md:text-2xl py-8">
          {/* Expected birth date is between  */}
          <div>La fecha aproximado de nacimiento sera entre </div>
          <div>
            {"( "}
            {String(date).slice(0, 15)} -{" "}
            {String(new Date(date?.setDate(date.getDate() + 10)!)).slice(0, 15)}
            {" )"}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Birthdate;
