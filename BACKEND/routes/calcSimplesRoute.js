const router = require('express').Router() //pega o Router dentro do Express

//Model
const OperacaoSimples = require('../models/OperacaoSimples')

//Criação de dados
router.post('/', async(req, res) => {
    const { num1, num2, operadormat, resultado } = req.body

    if (!num1) {
        res.status(422).json({ error: "Primeiro número não foi selecionado" })
        return
    } else if (!num2) {
        res.status(422).json({ error: "Segundo número não foi selecionado" })
        return
    } else if (!operadormat) {
        res.status(422).json({ error: "Operador matemático não foi selecionado" })
        return
    } else if (!resultado) {
        res.status(422).json({ error: "Resultado não foi encontrado" })
        return
    }

    const operacao = {
        num1,
        num2,
        operadormat,
        resultado
    }
    try {
        await OperacaoSimples.create(operacao)
        res.status(201).json({ mensagem: "Operação realizada com sucesso" })

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//Resgate geral dos dados - Leitura dos dados
router.get('/', async(req, res) => {

    //pega os dados da collection
    const operacoes = await OperacaoSimples.find()

    try {
        res.status(200).json(operacoes)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//Resgate dos dados por ID
router.get('/:id', async(req, res) => {

    //req.params irá extrair o dado da requisição pela URL
    const id = req.params.id
    const operacoes = await OperacaoSimples.findOne({ _id: id })


    try {
        //irá selecionar o dado pelo ID
        res.status(200).json(operacoes)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//Excluir dados
router.delete('/:id', async(req, res) => {
    const id = req.params.id
    const operacoes = await OperacaoSimples.findOne({ _id: id })

    try {
        await OperacaoSimples.deleteOne({ _id: id })
        res.status(200).json({ mensagem: "Operação deletada com sucesso" })

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

module.exports = router