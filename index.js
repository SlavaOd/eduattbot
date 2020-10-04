
const TelegramBot = require('node-telegram-bot-api');
      request = require('request');
      fs = require('fs');
      token = '1199928100:AAH8o35xpYvh1yPcOLiVEv0XHRBgD_7vLA4';
      bot = new TelegramBot(token, {polling: true});



bot.on('message', msg => {
  const chatId = msg.chat.id
  var txt = msg.text;


  bot.sendMessage(chatId, 'Выполняю...', {
    reply_markup: {
      keyboard: [
        ['Курс №1'],
        ['Курс №2'],
        ['Курс №3']
      ]
    }
  })


    switch(txt) {
      case 'Курс №1':
        bot.sendMessage(chatId, 'Вы выбрали Лекцию №1', {
          reply_markup: {
            keyboard: [
              ['Лекция №1'],
              ['Лекция №2'],
              ['Лекция №3'],
              ['Вернуться']
            ]
          }
        });
        break;
      case 'Курс №2':
        bot.sendMessage(chatId, 'Вы выбрали Лекцию №2', {
          reply_markup: {
            keyboard: [
              ['Лекция №1'],
              ['Лекция №2'],
              ['Лекция №3'],
              ['Вернуться']
            ]
          }
        });
        break;
      case 'Курс №3':
        bot.sendMessage(chatId, 'Вы выбрали Лекцию №3', {
          reply_markup: {
            keyboard: [
              ['Лекция №1'],
              ['Лекция №2'],
              ['Лекция №3'],
              ['Вернуться']
            ]
          }
        });
        break;
      case 'Вернуться':
        bot.sendMessage(chatId, {
          reply_markup: {
            keyboard: [
              ['Курс №1'],
              ['Курс №2'],
              ['Курс №3']
            ]
          }
        })
    }    
}  )



















