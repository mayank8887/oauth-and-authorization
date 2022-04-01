const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://mayank8887:8077520633@cluster0.vb0gn.mongodb.net/web15-oauthandautorization?retryWrites=true&w=majority");
};