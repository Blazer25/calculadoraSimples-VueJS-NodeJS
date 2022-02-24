const mongoose = require('mongoose')

const OperacaoSimples = mongoose.model('OperacaoSimples', {
    num1: Number,
    num2: Number,
    operadormat: String,
    resultado: Number
})

module.exports = OperacaoSimples