const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://Jaime:Kaikai10@cluster0.ew3p7.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => console.log("Established a connection to the database"))

    .catch((err) => console.log("There was a problem connecting to the database", err));