import mongoose from "mongoose";

const emailSchema = new mongoose.Schema(
  {
    to: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
    },
    body: {
      type: String,
    },
    date: {
      type: Date,
      required: true,
    },
    image: {
      type: String,
    },
    sentBy:{
        type: String,
      required: true,
    },
    starred:{
        type:Boolean,
        required: true,
        default:false
    },
    type:{
        type:String,
        required:true
    },
    trash:{
        type:Boolean,
        required:true,
        default:false
    }
  },
  { timestamps: true }
);

export default mongoose.model("emails", emailSchema);
