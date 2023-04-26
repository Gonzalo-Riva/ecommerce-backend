const chatModel = require('../models/chatsmodel')


class ChatsManager {

    sendMessage = async (message) => {
        try {
            const saveMessage = await chatModel.create(message)
            return saveMessage
        } catch (error) {
            return { msg: 'No Se Pudo Grabar El Mensaje' }
        }
    }

    getMessage = async () => {
        try {
            const messages = await chatModel.find()
            return messages
        } catch (error) {
            return { msg: 'No Se Pudo Mostrar El Mensaje' }
        }
    }

    deleteMessage = async (id) => {
        try {
            const deleteMj = await chatModel.findByIdAndDelete(id)
            return deleteMj
        } catch (error) {
            return { msg: 'No Se Pudo Mostrar El Mensaje' }
        }
    }

}

module.exports = ChatsManager