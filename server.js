const express = require("express");
const connectDB = require("./config/db");
const users = require("./routes/users");
const auth = require("./routes/auth");
const contacts = require("./routes/contacts");

const app = express();

// Connect Database
connectDB();

const PORT = process.env.PORT || 5000;

// Define Routes
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/contacts", contacts);

app.get("/", (req, res) =>
  res.json({
    msg: "Welcome to Contact Keeper Api",
  })
);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
