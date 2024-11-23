"use client";

import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../FormUI/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input/input";
import { Button } from "../Button/button";
import Cookies from "js-cookie";

const FormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginFrom = () => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  const staticLogin = (data) => {
    const { email, password } = data;

    if (email === "neeraj@aisv.in" && password === "neeraj@123") {
      // Simulate setting a token cookie for successful login
      Cookies.set("token", "static-login-token", { expires: 7 });
      alert("Login successful!");
      // window.location.href = "/dashboard"; // Redirect to dashboard
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(staticLogin)} className="w-full">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>UserName</FormLabel>
                <FormControl>
                  <Input className="bg-white" placeholder="UserName" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white"
                    type="password"
                    placeholder="Enter your Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button className="w-full mt-6" type="submit" variant="pinkBlue">
          Submit
        </Button>
        <button
          type="button"
          className="mt-3 p-2 w-full rounded-lg cursor-pointer text-center bg-white text-[#505050]"
          onClick={() => alert("Google Sign-In is disabled in this demo.")}
        >
          Sign in with Google
        </button>
      </form>
      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        or
      </div>
      <p className="text-center text-sm text-gray-600 mt-6">
        Developed by{" "}
        <a
          href="https://www.neerajkumar.in/"
          target="_blank"
          className="text-blue-500 underline"
        >
          Neeraj Kumar
        </a>
      </p>
    </Form>
  );
};

export default LoginFrom;
