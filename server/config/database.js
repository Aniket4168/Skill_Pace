const mongoose = require("mongoose");
require("dotenv");

exports.connectDb = () => {
    // Make MongoDB connection optional for testing
    const dbUrl = process.env.DATABASE_URL || process.env.MONGO_URL;
    
    if (!dbUrl) {
        console.log("⚠️  No database URL provided - running in test mode without MongoDB");
        return;
    }
    
    mongoose.connect(dbUrl, {})
    .then(()=> {
        console.log("✅ Database connected successfully");    
})
    .catch((error) => {
        console.log("❌ Error in database connection");
        console.error(error);
        console.log("⚠️  Continuing without database for testing...");
        // Don't exit for testing purposes
        // process.exit(1);        
    })
}
