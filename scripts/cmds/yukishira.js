module.exports = {
 config: {
 name: "إرشاد",
 version: "1.0",
 author: "Jaychris Garcia",
 countDown: 5,
 role: 0,
 shortDescription: "بدون_بادئة",
 longDescription: "بدون بادئة",
 category: "النظام",
 }, 
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "الرعد","thunder","رعد") {
 return message.reply({
 body: "",
 attachment: await global.utils.getStreamFromURL("https://i.postimg.cc/3rXfkCCw/FB-I")
 });
 }
 }
}