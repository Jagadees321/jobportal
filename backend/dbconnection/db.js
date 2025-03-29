const mongoose=require('mongoose');
async function dbconnect(){
    try {
        await mongoose.connect('mongodb+srv://Jaggu:Jaggu1234@cluster0.moesghv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('mongodb connected');
    } catch (error) {
        console.log('err while connecting mongodb :',error);
    }
}
module.exports=dbconnect