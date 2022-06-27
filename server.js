const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
	origin: "*",
};

// global middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
const router = require("./routes/userRouter");
app.use("/api", router);

// port
const PORT = process.env.PORT || 8080;

// server
app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});
