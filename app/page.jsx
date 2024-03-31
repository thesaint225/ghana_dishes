"use client";

import { CldUploadButton } from "next-cloudinary";

import Image from "next/image";
import photo from "@/public/b1.jpg";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Menu from "@/components/Menu";

export default function Home() {
  console.log(process.env.MONGODB_URI);
  return (
    <>
      <Navbar />
      <Card />
    </>
  );
}
