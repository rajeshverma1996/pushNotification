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
const sub = {};
push.sendNotification(sub, 'test message');
