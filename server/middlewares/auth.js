const jwt = require("jsonwebtoken");
require("dotenv").config();
//const User = require("../models/User");

//auth middleware
exports.auth = async (req, res ,next) => {
    try{
        console.log("=== AUTH MIDDLEWARE DEBUG ===");
        console.log("Request method:", req.method);
        console.log("Request URL:", req.url);
        console.log("Request headers:", req.headers);
        console.log("Request cookies:", req.cookies);
        console.log("Request body type:", typeof req.body);
        console.log("Request body:", req.body);
        console.log("Request files:", req.files);
        
        //extract token
        const cookieToken = req.cookies.token;
        const bodyToken = req.body.token;
        const authHeader = req.header("Authorization");
        
        console.log("Cookie token:", cookieToken);
        console.log("Body token:", bodyToken);
        console.log("Authorization header:", authHeader);
        
        let headerToken = null;
        if (authHeader) {
            headerToken = authHeader.replace("Bearer ", "");
            console.log("Extracted header token:", headerToken);
        }
        
        const token = cookieToken || bodyToken || headerToken;
        console.log("Final token:", token);

        //if the token is missing
        if(!token) {
            console.log("❌ Token is missing");
            return res.status(401).json({
                success:false, 
                message: "Token is missing",
            });
        }

        //verify the token
        try{
            console.log("🔍 Verifying token...");
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log("✅ Decoded JWT payload:", decode);

            req.user = decode;
        }
        catch(error) {
            //verification me issue
            console.log("❌ Token verification failed:", error.message);
            return res.status(401).json({
                success:false,
                message: "Token is invalid"
            });
        }
        console.log("✅ Auth middleware passed");
        next();
    

    } catch(error) {
        console.log("❌ Auth middleware error:", error.message);
        return res.status(401).json({
            success:false,
            message:"something went wrong while validatiing the token",
        });
    }
}


//is student
exports.isStudent = async (req, res, next) => {
    try {
        //verify karne le liye, 
        //user ka role(account type bas check karna hai, thats it)
        //ye karne ke 2 ways
        //ya to token ke payload me hamne role mention kiya hai, wha se karlo
        // ya db se data fetch karke wha se verify karlo

        if(req.user.accountType !== "Student") {
            return res.status(401).json({
                success:false,
                message:"this is a protected route for studnent only"
            });
        } 
        next();        

    } catch(error) {
        return res.status(500).json({
            success:false,
            message:"student verification failed"
        })
    }
}

//is instructor
exports.isInstructor = async (req, res, next) => {
    try {
        //verify karne le liye, 
        //user ka role(account type bas check karna hai, thats it)
        //ye karne ke 2 ways
        //ya to token ke payload me hamne role mention kiya hai, wha se karlo
        // ya db se data fetch karke wha se verify karlo

        if(req.user.accountType !== "Instructor") {
            return res.status(401).json({
                success:false,
                message:"this is a protected route for instructor only"
            });
        } 
        next();        

    } catch(error) {
        return res.status(500).json({
            success:false,
            message:"instructor verification failed"
        })
    }
}

//is Admin
exports.isAdmin = async (req, res, next) => {
    try {
        //verify karne le liye, 
        //user ka role(account type bas check karna hai, thats it)
        //ye karne ke 2 ways
        //ya to token ke payload me hamne role mention kiya hai, wha se karlo
        // ya db se data fetch karke wha se verify karlo

        console.log();
        
        if(req.user.accountType !== "Admin") {
            return res.status(401).json({
                success:false,
                message:"this is a protected route for Admin only"
            });
        } 
        next();        

    } catch(error) {
        return res.status(500).json({
            success:false,
            message:"Admin verification failed"
        })
    }
}

