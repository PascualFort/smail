import {decode, encode} from 'base-64';
import Axios from 'axios';
export async function sendMail(reciever, header, content) {
  if (!global.btoa) {
    global.btoa = encode;
  }

  if (!global.atob) {
    global.atob = decode;
  }
  const response = Axios({
    url: 'https://api.mailjet.com/v3.1/send',
    method: 'post',
    auth: {
      username: '*******************************', //Mailjet API key
      password: '*******************************', //client secret
    },
    headers: {'Content-Type': 'application/json'},
    data: {
      Messages: [
        {
          From: {
            Email: '*****@******.***', //Mailjet API email
            Name: 'Mail Sender (default)',
          },
          To: [
            {
              Email: reciever,
              Name: 'Mail Reciever',
            },
          ],
          Subject: header,
          TextPart: content,
          // HTMLPart:
          //   "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
          CustomID: 'AppGettingStartedTest',
        },
      ],
    },
  }).catch(function (error) {
    if (error.response) {
      return error.response;
    }
  });
  return (await response).status;
}
