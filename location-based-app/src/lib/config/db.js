import mongoose from "mongoose"

export const connectDB = async () => {
    let isConnected = false
    if(isConnected) return "Already connected to MongoDB"
    try {
       let connected = await mongoose.connect(process.env.MONGODB_URL)
       console.log("Connected to MongoDB")
       if(connected.connection.readyState === 1) isConnected = true
    } catch (error) {
        console.error("Error connecting to MongoDB:", error)
    }
}