var User = require('./userModel.js');

export const updateAnUserImage = async (req, res) => {
    const id = req.params._id;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const path = req.file.path.replace(/\\/g, "/")

    await User.findByIdAndUpdate(id, req.body = {ProfilePicture: "http://localhost:5000/" + path}, { new: true });
    res.json(updateAnUser);
}
