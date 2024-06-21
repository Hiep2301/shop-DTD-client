"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function ButtonRedirect() {
  const router = useRouter();
  const handleNavigateLoginPage = () => {
    router.push("/login");
  };

  return (
    <>
      <Button onClick={handleNavigateLoginPage}>Chuyển đến trang login</Button>
    </>
  );
}
