# Бот для рассылки сообщений WhatsApp

Этот проект представляет собой Telegram-бота для массовой рассылки сообщений через WhatsApp Business API. Бот использует Green API для отправки сообщений и позволяет отправлять сообщения группами с заданными интервалами.

## Основные функции:

- Отправка сообщений через WhatsApp Business API
- Управление рассылкой через Telegram-бота
- Отправка сообщений группами по 30 с интервалом в 30 секунд
- Пауза в 10 минут между группами сообщений

## Требования:

- Node.js
- Аккаунт Green API
- Telegram Bot API Token

## Установка:

1. Клонируйте репозиторий
2. Установите зависимости: `npm install`
3. Настройте конфигурацию в файле `inex.js`
4. Запустите бота: `node inex.js`

## Использование:

Отправьте команду `/send` с текстом сообщения вашему Telegram-боту для начала рассылки.

## Рекомендации для рассылок:
Не отправляйте спам или нежелательные сообщения.
Используйте рассылку только для важной информации.
Соблюдайте правила и условия использования WhatsApp Business API.
Не превышайте лимиты отправки сообщений, установленные WhatsApp.
Персонализируйте сообщения, когда это возможно.

## Инструкция по настройке и запуску бота для рассылки WhatsApp:

1. Получение ключа Green API:
   - Зарегистрируйтесь на green-api.com
   - Создайте новый инстанс
   - Авторизуйте инстанс, отсканировав QR-код в WhatsApp
   - Скопируйте IdInstance и ApiTokenInstance

2. Получение ключа бота Telegram:
   - Найдите @BotFather в Telegram
   - Отправьте команду /newbot
   - Следуйте инструкциям и получите токен бота

3. Установка Ubuntu:
   - Скачайте Ubuntu Server с ubuntu.com/download/server
   - Создайте загрузочный USB
   - Установите систему, следуя инструкциям

4. Настройка сервера:
   sudo apt update
   sudo apt upgrade -y
   sudo apt install git nodejs npm -y

5. Копирование репозитория:
   git clone https://github.com/gleeebkaaa/newsLetterWhatsApp
   
   cd newsLetterWhatsApp

7. Установка зависимостей:
   npm install

8. Вставка ключей:
   nano inex.js

   Найдите и замените следующие строки:
   const token = 'ВАШ_ТОКЕН_TELEGRAM_БОТА';
   const apiKey = 'ВАШ_API_КЛЮЧ';
   const apiUrl = 'https://ВАШ_ID.api.green-api.com';
   const idInstance = 'ВАШ_ID_ИНСТАНСА';

   Сохраните изменения: Ctrl+X, затем Y, затем Enter

9. Запуск бота:
   node inex.js

10. Использование бота:
   - Откройте вашего бота в Telegram
   - Отправьте команду /send с текстом сообщения для рассылки
