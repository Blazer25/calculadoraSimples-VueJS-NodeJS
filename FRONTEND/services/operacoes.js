import { http } from './config'


export default {
    listar: () => {
        return http.get('calculadoraSimples')
    },
    apagar: (_id) => {
        return http.delete(`http://localhost:3000/calculadoraSimples/${_id}`)
    },
    salvar: (operacao) => {
        return http.post('calculadoraSimples', operacao)
    }


}