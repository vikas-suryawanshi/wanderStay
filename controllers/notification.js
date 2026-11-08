const Notification = require("../models/notification");

module.exports.getNotifications = async (req,res)=>{
    const notifications = await Notification.find({recipient:req.user._id}).sort({createdAt:-1});
    res.render("notifications/notification.ejs",{notifications});
}

module.exports.markAsRead = async (req,res)=>{
    let {id} = req.params;
    const notifications = await Notification.findOne({_id:id , recipient:req.user._id});
    if(!notifications){
        req.flash("error","not found notifications");
        return res.redirect("/notifications");
    }
    notifications.isRead = true;
    await notifications.save();
    return res.redirect(notifications.link || "/notifications");
};

module.exports.markAllRead = async (req,res)=> {
    await Notification.updateMany(
        {
            recipient:req.user._id,
            isRead:false,
        }
        {
            $set: {isRead:true},
        }
    )
};