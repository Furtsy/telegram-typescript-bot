import { Telegraf } from "telegraf";


const bot = new Telegraf("TOKEN")
bot.telegram.getMe().then((botInfo: any) => {
  bot.options.username = botInfo.username;
});
bot.start((ctx: any) => ctx.reply('hello my commands: ....'))

bot.on('text', (ctx: any) => {
ctx.reply('hi!')
})

console.log('start')
bot.launch()