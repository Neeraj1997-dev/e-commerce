"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";  // Using next/navigation's router
import Sidebar from "@/components/Sidebar";
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/Card/card";
import Cookies from "js-cookie";

const Dashboard = () => {
  const router = useRouter();  // Now safe to use next/navigation
  const token = Cookies.get("token");

  useEffect(() => {
    if (!token) {
      router.push("/login");  // Redirect to login if no token
    }
  }, [router, token]);  // Only runs after component is mounted

  // Return null while redirecting to avoid rendering content
  if (!token) {
    return null;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full">
        <Card className="w-full max-w-lg mx-auto mt-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-lg font-medium">Welcome to your dashboard!</p>
              <p className="text-sm text-muted-foreground mt-2">Here you can view your details, manage tasks, and more.</p>
            </div>
            <div className="mt-6 space-y-4">
              <button className="btn btn-primary" onClick={() => alert("View your profile")}>
                View Profile
              </button>
              <button className="btn btn-secondary" onClick={() => alert("Manage tasks")}>
                Manage Tasks
              </button>
              <button
                className="btn btn-outline"
                onClick={() => {
                  Cookies.remove("token");  // Clear token on logout
                  router.push("/login");    // Redirect to login
                }}
              >
                Logout
              </button>
            </div>
          </CardContent>
          <CardFooter className="text-center text-sm text-muted-foreground">
            <p>
              Developed by{" "}
              <a
                href="https://www.neerajkumar.in"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                Neeraj Kumar
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
