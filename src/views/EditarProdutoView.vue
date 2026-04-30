<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8">
    <div class="max-w-xl mx-auto">
      <div class="flex items-center gap-4 mb-8">
        <router-link to="/" class="text-gray-400 hover:text-white transition">← Voltar</router-link>
        <h1 class="text-3xl font-bold">Editar Produto</h1>
      </div>

      <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg">
        <form @submit.prevent="salvar" class="flex flex-col gap-4">
          <div>
            <label class="text-sm text-gray-400 mb-1 block">Nome</label>
            <input v-model="produto.nome" placeholder="Nome do produto" class="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label class="text-sm text-gray-400 mb-1 block">Descrição</label>
            <input v-model="produto.descricao" placeholder="Descrição do produto" class="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label class="text-sm text-gray-400 mb-1 block">Marca</label>
            <input v-model="produto.marca" placeholder="Marca do produto" class="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label class="text-sm text-gray-400 mb-1 block">Preço</label>
            <input v-model="produto.preco" type="number" placeholder="0.00" class="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label class="text-sm text-gray-400 mb-1 block">Estoque</label>
            <input v-model="produto.estoque" type="number" placeholder="0" class="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition mt-2">
            Salvar Alterações
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      produto: {
        nome: '',
        descricao: '',
        marca: '',
        preco: '',
        estoque: ''
      }
    }
  },
  mounted() {
    this.buscar()
  },
  methods: {
    async buscar() {
      const id = this.$route.params.id
      const response = await axios.get(`http://127.0.0.1:8000/api/produtos/${id}`)
      this.produto = response.data
    },
    async salvar() {
      const id = this.$route.params.id
      await axios.put(`http://127.0.0.1:8000/api/produtos/${id}`, this.produto)
      this.$router.push('/')
    }
  }
}
</script>