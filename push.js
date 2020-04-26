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
const sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fuPW7A1sZaQ:APA91bFFLSq4BI6BcAb2hX8dao0kTp_M7TQkP6Rh562MEEPlYnevdUxBeuqLbuF6LczVK65IIPoTfhCp-VZbY3kqJYN6SpWmViOFDo2HP1XHgWUL4JPxP-_V9W93GbVr9BbzqI0gZVCu",
"expirationTime":null,
"keys":
{
    "p256dh":"BCf8iipAAbzIVgWxeAf9TnU7b7O_o1B-pSjcx_zZuVBruHbBpO8lUyenuPezbLAH5W7Wf89ooMmbj7eywYu7m-I",
    "auth":"2V86CJHchg8LSIhd-WcMkA"
}
            };
push.sendNotification(sub, 'test message');
