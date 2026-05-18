const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const authRoutes =
require("./routes/authRoutes");

const taskRoutes =
require("./routes/taskRoutes");

dotenv.config();

const app = express();


// CONNECT DATABASE
connectDB();


// MIDDLEWARE
app.use(cors());

app.use(express.json());


// ROUTES
app.use(
"/api/auth",
authRoutes
);

app.use(
"/api/tasks",
taskRoutes
);


// SERVER
const PORT =
process.env.PORT || 8000;

app.listen(
PORT,
()=>{

console.log(
`Server running on port ${PORT} 🚀`
);

}
);