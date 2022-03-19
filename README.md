# Deploy-bot
A slack bot developed with node.js that tell's if you and your team should deploy today in your #general slack channel.

## Setup 

- Install all dependencies using `npm install`.
- Go to your 'apps manage' slack page, and select custom integrations, you'll be able to see the Bots section.
- Add one bot and get into his 'configuration' section. 
- Copy his API_TOKEN.
- Inside the project, you should create a file `.env` and place that token as `SLACK_BOT_TOKEN`.
- Run the project with `npm start`.
- Add your bot to your teams '#general' slack channel.
- Type 'should we deploy today ?' in the channel and see the magic happens :muscle: