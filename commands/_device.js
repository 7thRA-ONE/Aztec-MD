module.exports = {
  name: "device",
  description: "To check if user is on Android or iPhone",
category: "Extra",
start: async(vorterx,m,{prefix, toReact,text, command}) => {

const isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;
if (isAndroid) { await toReact("😯");  {
  console.log("User is currently using Android");
} else {
  console.log("User is not using Android");
}
   //-------[For Ios to se if he/she is using !Phone]------
const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
if (isiOS) {
  console.log("User is using iOS");
} else {
  console.log("User is not using iOS");
}
   }
 };
