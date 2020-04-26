var push = require('web-push');
// const GenerateVapidkeys = push.generateVAPIDKeys();
const Vapidkeys = {
    publicKey: 'BPQKJ7kUGPUpMzAx-fWO7_5gGu1MuGo-pZepNG8s_FIFo43SFxwsmN8yJxYLlTpkjjJyvutxeH-7HHBVOTY3c0M',
    privateKey: 'kKsvz59v2l-hnhpZbcB5b67ObSJWRvLAsHxaZzGkM_o'
  }

console.log('vapidkeys ',Vapidkeys);
push.setVapidDetails(
    'mailto:rajeshkumarcse1996@gmail.com',
    Vapidkeys.publicKey,
    Vapidkeys.privateKey
);
const sub = {endpoint: "https://fcm.googleapis.com/fcm/send/fuPW7A1sZaQ:AP…6SpWmViOFDo2HP1XHgWUL4JPxP-_V9W93GbVr9BbzqI0gZVCu",
 expirationTime: null,
  options: PushSubscriptionOptions};
push.sendNotification(sub, 'test message');
