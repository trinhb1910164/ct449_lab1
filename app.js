const express = require("express"); 
const contactsRouter = require("./app/routes/contact.route");
const cors = require("cors");
const ApiError = require("./app/api-error");
const app = express();
app.use(cors());
app.use("/api/contacts", contactsRouter);
// app.use(express.json());
// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to contact book application." });
// });

//handle 404 response
app.use((req, res, next) => {
    //code o day se chay khi khong co route duoc dinh nghia nao
    //khop voi yeu cau. goi next() de chuye sang middleware xu ly loi
    return next(new ApiError(404, "resource not found"));
});
//define error-handling middleware last, after other app.use() and routes calls
app.use((err, req, res, next) => {
    //middleware xu ly loi tap trung
    //trong cac doan code xu ly loi o cacs route goi next(error)
    //se chuyen ve middleware xu ly loi nay
    return res.status(error.statusCode || 500).json({
        massage: error.message || "Internal server error",
    });
});
module.exports = app;
