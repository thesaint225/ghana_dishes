import connectedDB from "@/db";
import Food from "@/models/Food";
// GET  /api//properties
export const GET = async (request) => {
  try {
    await connectedDB();
    const foods = await Food.find({});
    return new Response(JSON.stringify(foods), {
      status: 200,
    });
  } catch (error) {
    console.error;
    return new Response("something went wrong", { status: 500 });
  }
};
