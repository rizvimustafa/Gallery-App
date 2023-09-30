import mongoose from "mongoose"

const schema = new mongoose.schema({
    name:{
        type: String
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    }
})

const galleyModel = mongoose.model("gallery", schema)

export default galleryModel