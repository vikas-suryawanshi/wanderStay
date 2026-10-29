const Notification = require("../models/notification");

module.exports.getNotifications = async (req,res)=>{
    const notifications = await Notification.find({recipient:req.user._id}).sort({createdAt:-1});
    res.render("notifications/notification.ejs",{notifications});
}