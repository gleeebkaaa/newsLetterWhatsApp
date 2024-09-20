const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

const token = 'ВАШ_ТОКЕН_TELEGRAM_БОТА';
const bot = new TelegramBot(token, { polling: true });

const apiKey = 'ВАШ_API_КЛЮЧ';
const apiUrl = 'https://ВАШ_ID.api.green-api.com';
const idInstance = 'ВАШ_ID_ИНСТАНСА';

async function sendMessage(phoneNumber, message) {
    try {
        const response = await axios.post(`${apiUrl}/waInstance${idInstance}/sendMessage/${apiKey}`, {
            chatId: `${phoneNumber}@c.us`,
            message
        });
        console.log(`Сообщение отправлено на ${phoneNumber}:`, response.data);
    } catch (error) {
        console.error(`Ошибка отправки сообщения на ${phoneNumber}:`, error.response ? error.response.data : error.message);
    }
}

async function sendMessagesInBatches(phoneNumbers, message) {
    const batchSize = 30;
    const delayBetweenMessages = 30000; // 30 секунд
    const delayBetweenBatches = 600000; // 10 минут

    for (let i = 0; i < phoneNumbers.length; i += batchSize) {
        const batch = phoneNumbers.slice(i, i + batchSize);
        for (const phoneNumber of batch) {
            await sendMessage(phoneNumber, message);
            await new Promise(resolve => setTimeout(resolve, delayBetweenMessages));
        }
        if (i + batchSize < phoneNumbers.length) {
            await new Promise(resolve => setTimeout(resolve, delayBetweenBatches));
        }
    }
}

bot.onText(/\/send([\s\S]*)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const message = match[1].trim();

    const phoneNumbers = [
        // Ваш список номеров телефонов
    ];

    bot.sendMessage(chatId, 'Начинаю отправку сообщений...');
    await sendMessagesInBatches(phoneNumbers, message);
    bot.sendMessage(chatId, 'Все сообщения отправлены.');
});

bot.on('polling_error', (error) => {
    console.error('Ошибка опроса:', error);
});
