const { App } = require('@slack/bolt');
const cron = require('node-cron');
const { getRandomQuote, getRandomContent, getRandomGif } = require('./quotes');
require('dotenv').config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN
});

const CHANNEL_ID = process.env.SLACK_CHANNEL_ID || 'general';

async function sendRandomContent() {
  try {
    const content = getRandomContent();
    
    if (content.type === 'gif') {
      await app.client.chat.postMessage({
        channel: CHANNEL_ID,
        text: `🏢 *Jian Yang reacts:*`,
        attachments: [{
          fallback: 'Jian Yang GIF',
          image_url: content.content
        }],
        username: 'Jian Yang',
        icon_emoji: ':man_technologist:'
      });
      console.log(`✅ Sent GIF to #${CHANNEL_ID}: ${content.content}`);
    } else {
      await app.client.chat.postMessage({
        channel: CHANNEL_ID,
        text: `🏢 *Jian Yang says:* "${content.content}"`,
        username: 'Jian Yang',
        icon_emoji: ':man_technologist:'
      });
      console.log(`✅ Sent quote to #${CHANNEL_ID}: ${content.content}`);
    }
  } catch (error) {
    console.error('❌ Error sending message:', error);
  }
}

app.command('/jianyang', async ({ command, ack, respond }) => {
  await ack();
  
  const text = command.text ? command.text.trim().toLowerCase() : '';
  
  if (text === 'gif') {
    const gif = getRandomGif();
    await respond({
      text: `🏢 *Jian Yang reacts:*`,
      response_type: 'in_channel',
      attachments: [{
        fallback: 'Jian Yang GIF',
        image_url: gif
      }]
    });
  } else {
    const content = getRandomContent();
    
    if (content.type === 'gif') {
      await respond({
        text: `🏢 *Jian Yang reacts:*`,
        response_type: 'in_channel',
        attachments: [{
          fallback: 'Jian Yang GIF',
          image_url: content.content
        }]
      });
    } else {
      await respond({
        text: `🏢 *Jian Yang says:* "${content.content}"`,
        response_type: 'in_channel'
      });
    }
  }
});

app.message(/jian.?yang/i, async ({ message, say }) => {
  const content = getRandomContent();
  
  if (content.type === 'gif') {
    await say({
      text: `🏢 *Jian Yang reacts:*`,
      attachments: [{
        fallback: 'Jian Yang GIF',
        image_url: content.content
      }]
    });
  } else {
    await say(`🏢 *Jian Yang says:* "${content.content}"`);
  }
});

app.event('app_mention', async ({ event, say }) => {
  const content = getRandomContent();
  
  if (content.type === 'gif') {
    await say({
      text: `🏢 *Jian Yang reacts:*`,
      attachments: [{
        fallback: 'Jian Yang GIF',
        image_url: content.content
      }]
    });
  } else {
    await say(`🏢 *Jian Yang says:* "${content.content}"`);
  }
});

cron.schedule('0 */2 * * *', () => {
  console.log('🕐 Scheduled content time!');
  sendRandomContent();
});

(async () => {
  try {
    await app.start();
    console.log('⚡️ Jian Yang Slack Bot is running!');
    console.log(`📺 Channel: #${CHANNEL_ID}`);
    console.log('🔄 Random quotes/GIFs will be sent every 2 hours (20% chance for GIFs)');
    console.log('💬 Use /jianyang command or mention the bot for instant quotes');
  } catch (error) {
    console.error('❌ Error starting the app:', error);
  }
})();