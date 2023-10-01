import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String
    },
})

const model = mongoose.model("categorySchema", schema)

export default model