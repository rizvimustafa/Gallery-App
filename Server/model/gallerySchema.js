import mongoose from "mongoose"

const schema = new mongoose.Schema({
    name:{
        type: String
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "categorySchema"
    }
})

const galleryModel = mongoose.model("gallerySchema", schema)

export default galleryModel