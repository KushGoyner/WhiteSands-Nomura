const express  = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// ✅ Load .env FIRST before any imports that use process.env
dotenv.config();

const connectDB = require("./config/db");
const aiRoutes  = require('./routes/aiRoutes');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 9000;

// ✅ Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
    res.send("Server Running");
});

// ✅ Route for AI endpoints
app.use('/api/ai', aiRoutes);

// ✅ Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
