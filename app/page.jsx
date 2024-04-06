// "use client";

// import { CldUploadButton } from "next-cloudinary";

import Image from "next/image";
import photo from "@/public/b1.jpg";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Menu from "@/components/Menu";
import connectedDB from "@/db";
import Food from "@/models/Food";

export default async function Home() {
  console.log(process.env.MONGODB_URI);

  connectedDB();
  // console.log(process.env.DOMAIN);

  // Create a new instance of Food
  // const newFood = new Food({
  //   name: "Pizza",
  //   description: "Delicious Italian dish",
  // });

  // console.log(newFood);

  // Save the newFood instance to the database
  // newFood
  //   .save()
  //   .then((savedFood) => {
  //     console.log("Food saved successfully:", savedFood);
  //   })
  //   .catch((error) => {
  //     console.error("Error saving food:", error);
  //   });
  return (
    <>
      <Navbar />
      <Card />
    </>
  );
}
