import React, { useState, useEffect } from "react";
import axios from "axios";

const Auction = () => {
    const [auctions, setAuctions] = useState([]);
    const [bidAmount, setBidAmount] = useState({});
    const [bidder, setBidder] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3000/api/auctions")
            .then(res => setAuctions(res.data))
            .catch(err => console.error(err));
    }, []);

    const placeBid = async (auctionId) => {
        if (!bidder || !bidAmount[auctionId]) {
            alert("Please enter your name and a valid bid amount.");
            return;
        }

        try {
            const res = await axios.post("http://localhost:3000/api/bid", {
                auctionId,
                bidder,
                bidAmount: bidAmount[auctionId]
            });
            alert(res.data.message);
            setAuctions(prev =>
                prev.map(a => a._id === auctionId ? { ...a, highestBid: bidAmount[auctionId], highestBidder: bidder } : a)
            );
        } catch (err) {
            alert(err.response.data.message);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center">Auction Items</h1>
            <input type="text" placeholder="Your Name" className="p-2 border rounded w-full my-2" 
                onChange={(e) => setBidder(e.target.value)} />
            
            {auctions.map(auction => (
                <div key={auction._id} className="border p-4 my-4">
                    <h2 className="text-2xl font-semibold">{auction.itemName}</h2>
                    <p>Highest Bid: ${auction.highestBid} by {auction.highestBidder || "No bids yet"}</p>
                    <input type="number" placeholder="Enter bid" className="p-2 border rounded" 
                        onChange={(e) => setBidAmount({ ...bidAmount, [auction._id]: e.target.value })} />
                    <button className="bg-blue-500 text-white p-2 rounded ml-2" 
                        onClick={() => placeBid(auction._id)}>Place Bid</button>
                </div>
            ))}
        </div>
    );
};

export default Auction;
