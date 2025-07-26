import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ranasuvajit7:hungry123@cluster0.icajobj.mongodb.net/Hungry')
    .then(() => console.log('DB CONNECTED'));
    
}