var push = require('web-push');
 const GenerateVapidkeys = push.generateVAPIDKeys();
 console.log('vapidkeys ',GenerateVapidkeys);
const vapidkeys1  = {
    publicKey: 'BBJddBQoBD7WWbMuVvxj2U8KhTgvCPlgow1pRUSLdfT-yNBZSJkviFD_5pN2kYz-gkZcPr3Jey5i8Lqsd4R3WOQ',
    privateKey: 'inp8prFVh3wW0p6s6XcRcpZo2LfPWdJrUPWIKOXHFcs'
  }
const Vapidkeys = {
    publicKey: 'BPQKJ7kUGPUpMzAx-fWO7_5gGu1MuGo-pZepNG8s_FIFo43SFxwsmN8yJxYLlTpkjjJyvutxeH-7HHBVOTY3c0M',
    privateKey: 'kKsvz59v2l-hnhpZbcB5b67ObSJWRvLAsHxaZzGkM_o'
  }

console.log('vapidkeys ',Vapidkeys);
push.setVapidDetails(
    'mailto:rajeshkumarcse1996@gmail.com',
    vapidkeys1.publicKey,
    vapidkeys1.privateKey
);
const sub = {
    "endpoint":"https://fcm.googleapis.com/fcm/send/caU1C_83wbs:APA91bEmOPzyFY-n1ghfLUqGlrRZjJo46jokBhiZcn_sv6j4DKe4pX4JfvPVNd0w7ZDlG4S_bWwiY_iNWWntybgpFSagMOI6Gk_AxyLpHNNZXppjR4JCirPRRUWDl0DnoaV6fO2LMueC",
"keys":{
    "p256dh":"BC4J_eysGy92GCQo1onULR39QdNp7KMc1xTJ_YlagIkxFC9xLV-nKFzB0VtyCShwwjXjKMcyOSn2WTd4hXswfWM",
    "auth":"hyKs57LudgLtNFw0ltgGBA"
}
}
push.sendNotification(sub, 'test message')
.then(sub => {
    console.log(sub);
}).catch(err => {
    console.error(err);
});

