import gallerySchema from "../model/gallerySchema.js"
import categorySchema from "../model/categorySchema.js"

class galleryController{
    static uploadImage = async(req, res) =>{
        const { category } = req.body;
        console.log(category)
        try{
            if (category) {
                const addImage = gallerySchema({
                    name: req.file.filename,
                    category: category
                })
                const saved_image = await addImage.save()
                if (saved_image){
                    return res.status(200).json({ message: 'Uploaded Successfully!'})

                }
            } 
            else {
                return res.status(400).json({ message: 'All fields are required'})
            }
        }
        catch(error){
            return res.status(400).json({ message: error.message })
        }
    }
    static addNewCategory = async(req, res) =>{
        const {name} = req.query
        try{
            if(name){
                const addCategory = categorySchema({
                    name: name,
                })
                const saved_category = await addCategory.save()
                if (saved_category){
                    return res.status(200).json({ message: 'Category Added Successfully!'})

                }
            }
            else{
                return res.status(400).json({ message: 'All fields are required'})
            }
        }
        catch(error){
            return res.status(400).json({ message: error.message })
        }
    }
    static getAllCategories = async(req, res) =>{
        try{
            const fetchAllCategories = await categorySchema.find({

            })
            return res.status(200).json(fetchAllCategories)
        }
        catch(error){
            return res.status(400).json({message: error.message})
        }
    }
    static getAllImages = async(req, res) => {
        try{
            const fetchAllImages = await gallerySchema.find({})
            return res.status(200).json(fetchAllImages)
        }
        catch(error){
            return res.status(400).json({message: error.message})
        }
    }
    static getImage = async(req, res) =>{
        const {category} = req.query 
        try{
            if (category){
                const getCatBasedImage = await gallerySchema.find({
                    category: category,
                })
                return res.status(200).json(getCatBasedImage)
            }
            else{
                return res.status(400).json({ message: 'All fields are required'})
            }
        }
        catch(error){
            return res.status(400).json({message: error.message})
        }
    }
}

export default galleryController