const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing = require("../models/listing");

main()
.then(()=>{
    console.log("connected succesfully");
}).catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/WanderStay');
}

const initDb=async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>
        ({...obj, owner:'6a8a7a953b50180c13897158'}));
    await Listing.insertMany(initData.data);
    console.log("data was succesfully saved in db");
}
initDb();