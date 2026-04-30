import { createRouter, createWebHistory } from 'vue-router'
import ProdutosView from '../views/ProdutosView.vue'
import CriarProdutoView from '../views/CriarProdutoView.vue'
import EditarProdutoView from '../views/EditarProdutoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'produtos',
      component: ProdutosView,
    },
    {
      path: '/criar',
      name: 'criar',
      component: CriarProdutoView,
    },
    {
      path: '/editar/:id',
      name: 'editar',
      component: EditarProdutoView,
    },
  ],
})

export default router