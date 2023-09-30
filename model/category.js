import mongoose from "mongoose";

const schema = new mongoose.schema({
    name: {
        type: String
    }
})

const model = mongoose.model("category", schema)

export default model