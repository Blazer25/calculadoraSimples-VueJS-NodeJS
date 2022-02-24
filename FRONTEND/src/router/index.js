import { createRouter, createWebHashHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import HistoricoCalcSimples from '../components/CalcSimples/HistoricoCalcSimples.vue'
// import Simples from '../views/Simples.vue'

const routes = [{
        path: '/',
        name: 'Inicio',
        component: Inicio
    },
    {
        path: '/Simples/Historico-Calculadora-Simples',
        name: 'HistoricoCalcSimples',
        component: HistoricoCalcSimples
    },
    {
        path: '/Simples',
        name: 'Simples',

        component: () =>
            import ( /* webpackChunkName: "simples" */ '../views/Simples.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router