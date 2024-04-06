// import mongoose, { Schema, model, models } from "mongoose";

// // Define food schema
// const foodSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//   },
// });

// // Create food model based on the schema
// const Food = models.Food || model("Food", foodSchema);

//

import { Schema, models, model } from "mongoose";

// you define the Schema

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});
// create the model base on the Schema

const Food = models.Food || model("Food", foodSchema);

export default Food;
