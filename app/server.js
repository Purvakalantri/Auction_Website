const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Auction Schema
const auctionSchema = new mongoose.Schema({
    itemName: String,
    highestBid: { type: Number, default: 0 },
    highestBidder: { type: String, default: "" },
});

const Auction = mongoose.model("Auction", auctionSchema);

// Get all auction items
app.get("/api/auctions", async (req, res) => {
    const auctions = await Auction.find();
    res.json(auctions);
});

// Place a bid
app.post("/api/bid", async (req, res) => {
    const { auctionId, bidder, bidAmount } = req.body;

    const auction = await Auction.findById(auctionId);
    if (!auction) return res.status(404).json({ message: "Auction not found" });

    if (bidAmount <= auction.highestBid) {
        return res.status(400).json({ message: "Bid must be higher than the current highest bid" });
    }

    // Update highest bid
    auction.highestBid = bidAmount;
    auction.highestBidder = bidder;
    await auction.save();

    res.json({ message: "Bid placed successfully", auction });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
