module.exports = {
    config: {
        name: "المالك",
        version: "1.0",
        author: "Loid Butter",
        countDown: 5,
        role: 0,
        shortDescription: "إسأل يوتا من هو المالك",
        longDescription: "إسأل يوتا من هو المالم",
        category: "المالك",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "المالك") return message.reply("مرحبًا! يا أيها المستخدم/المالك هو عمر ﻋۦۘۘۦۘﻤۦۘۘۦۘﻚ (صائد الأرواح). هذا هو رابط فيسبوك المالك الخاص بي إذا أردت التواصل معه.      https://www.facebook.com/profile.php?id=100094409873389");
}
};