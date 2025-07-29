const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const ACCESS_TOKEN = 'ssyVGBgc1ULDtI2uYDpggTnRx6z4O7roAfxMrNZ6LSHAqlIi+RMnz2ZgicQp072BOA6mKTxyHgWtq3viT2pgDAMGVWPf+35J832h9S7Uoj3rocTQU0oYgCFUpsYFM2ojv6prgWc3x5z/uZ8xfwwp7gdB04t89/1O/w1cDnyilFU=';

app.post('/webhook', async (req, res) => {
  const events = req.body.events;
  for (let event of events) {
    if (event.type === 'message' && event.message.text === 'ดูแพ็กเกจ') {
      await axios.post(
        'https://api.line.me/v2/bot/message/reply',
        {
          replyToken: event.replyToken,
          messages: [
            {
              type: 'flex',
              altText: 'Devessa Healing Menu',
              contents: {
                type: 'bubble',
                body: {
                  type: 'box',
                  layout: 'vertical',
                  contents: [
                    {
                      type: 'text',
                      text: 'DEVESSA – ปรับสมดุลกายใจ',
                      weight: 'bold',
                      size: 'lg',
                      align: 'center'
                    },
                    {
                      type: 'text',
                      text: 'Healing ด้วยแสง สี เสียง และพลังงาน',
                      size: 'sm',
                      align: 'center',
                      margin: 'md'
                    }
                  ]
                },
                footer: {
                  type: 'box',
                  layout: 'vertical',
                  spacing: 'sm',
                  contents: [
                    {
                      type: 'button',
                      style: 'primary',
                      action: {
                        type: 'uri',
                        label: 'ดูแพ็กเกจทั้งหมด',
                        uri: 'https://sites.google.com/view/devessa/link'
                      }
                    }
                  ]
                }
              }
            }
          ]
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ACCESS_TOKEN}`
          }
        }
      );
    }
  }
  res.sendStatus(200);
});

app.get('/', (req, res) => {
  res.send('Devessa Bot is running!');
});

app.listen(process.env.PORT || 3000);
