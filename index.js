// Add support for environmental variables
require('dotenv/config');
var axios = require('axios');
// Import botkit package
var Botkit = require('botkit');

const botToken = process.env.SLACK_BOT_TOKEN
// Create a controller for the Slackbot
var controller = Botkit.slackbot({
  debug: false
});

async function request () {
  let deploy = await axios.get('https://shouldideploy.today/api/slack?tz=UTC'); 
  let data = deploy.data;
  const url = 'https://slack.com/api/chat.postMessage';
  return res =  axios.post(url, {
    channel: '#general',
    text: `${data.attachments[0].text}`,
    username: 'Should i deploy today ?'
  }, { headers: { authorization: `Bearer ${botToken}` } });
}

// Use the token to connect the bot to your Slack app
controller.spawn({
  token: botToken
}).startRTM();

// Determine behaviour of the Slackbot
controller.hears(['deploy', 'release'], ['ambient', 'direct_mention', 'mention'], function (bot, message) {
  bot.reply(message, request());
});