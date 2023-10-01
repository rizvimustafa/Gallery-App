import express from "express"
import galleryController from "../controller/galleryController.js"
import multer from "multer"

const router = express.Router()

const storage = multer.diskStorage({
    destination: function(req, file, callBack){
        callBack(null, 'public/upload/')
    },
    filename: function (req, file, callBack){
        callBack(null, `${Date.now()}-${file.originalname}`)
    }
})
const upload = multer({ storage: storage})

router.post("/upload/image", upload.single("image"), galleryController.uploadImage)
router.post("/add/category", galleryController.addNewCategory)
router.get("/get/categories", galleryController.getAllCategories)
router.get("/get/images", galleryController.getAllImages)
router.get("/get/image", galleryController.getImage)
export default router