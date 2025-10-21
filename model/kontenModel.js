import mongoose from "mongoose";

const kontenSchema = new mongoose.Schema (
    {
        platform : {
            type : String,
            trim : true,
            required : true
        },
        idea : {
            type : String,
            required : true
        },
        postDate : {
            type : Date
        },
    },
    {
        timestamps : true
    }
)

const kontenModel = new mongoose.model("konten", kontenSchema)
export default kontenModel