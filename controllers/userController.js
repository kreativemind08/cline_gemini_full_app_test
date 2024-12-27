const db = require('../models');
const User = db.User;

exports.findAll = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving users."
        });
    }
};
