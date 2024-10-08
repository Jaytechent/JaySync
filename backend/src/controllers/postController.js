const postService = require('../services/postService');

exports.createPost = async (req, res) => {
    try {
        const post = await postService.createPost(req.body);
        res.status(201).json({ success: true, post });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
