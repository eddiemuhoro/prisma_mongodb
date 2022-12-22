import express from 'express';
import postProfile from '../models/myPosts.js';
const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const postProfiles = await postProfile.find();

        res.status(200).json(postProfiles);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
 }
)

router.post('/', async(req, res)=>{
    const post = req.body;

        const newPost = new postProfile(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
})




export default router;