let express = require("express");
let app = express();

const cors = require("cors");
const PORT = process.env.PORT || 5000;


const path = require("path");
//process.env.PORT
//process.env.NODE_ENV // production or undefined

/// TEST DB CONNECTION ///



/// MIDDLEWARE ///
app.use(cors());
app.use(express.json()); // => allows us to access the req.body


//app.use(express.static(path.join(__dirname, "client/build")));
//app.use(express.static("./client/build")); // for demonstration


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../client/build", "index.html"))
    })
}

/// ROUTES ///
//Routes all api HTTP requests to be handled by /routes/api.js
//We do NOT need to send the express app object as a parameter
app.use('/api', require('./Routes/api'));

//Routes all test HTTP requests to /routes/test.js
app.use('/test', require('./Routes/test'));





console.log(__dirname);
console.log(path.join(__dirname, "../client/build"));





//app begins listening for HTTP requests on specified port
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});