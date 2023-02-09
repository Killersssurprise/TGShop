const bot_token = 'your-token';
const bot_chatId = 'your-chat-id';

function Bot_Token() {
    return bot_token;
}

function Chat_ID()
{
    return bot_chatId;
}

module.exports = {

    GetBotToken: function GetBotToken() {
        return Bot_Token();
    },

    GetChatId: function GetChatId() {

        return Chat_ID();

    }
};