<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8">
    <div class="max-w-5xl mx-auto">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold">Desfio técnico | ConstrUp</h1>
        <router-link
          to="/criar"
          class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
        >
          + Novo Produto
        </router-link>
      </div>

      <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-lg">
        <table class="w-full">
          <thead class="bg-gray-700 text-gray-300 text-sm uppercase">
            <tr>
              <th class="px-6 py-4 text-left">Nome</th>
              <th class="px-6 py-4 text-left">Marca</th>
              <th class="px-6 py-4 text-left">Preço</th>
              <th class="px-6 py-4 text-left">Estoque</th>
              <th class="px-6 py-4 text-left">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="produto in produtos"
              :key="produto.id"
              class="border-t border-gray-700 hover:bg-gray-750 transition"
            >
              <td class="px-6 py-4">{{ produto.nome }}</td>
              <td class="px-6 py-4 text-gray-400">{{ produto.marca }}</td>
              <td class="px-6 py-4 text-green-400">R$ {{ produto.preco }}</td>
              <td class="px-6 py-4">{{ produto.estoque }}</td>
              <td class="px-6 py-4 flex gap-2">
                <router-link
                  :to="`/editar/${produto.id}`"
                  class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm transition"
                >
                  Editar
                </router-link>
                <button
                  @click="excluir(produto.id)"
                  class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-sm transition"
                >
                  Excluir
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      produtos: []
    }
  },
  mounted() {
    this.listar()
  },
  methods: {
    async listar() {
      const response = await axios.get('http://127.0.0.1:8000/api/produtos')
      this.produtos = response.data
    },
    async excluir(id) {
      await axios.delete(`http://127.0.0.1:8000/api/produtos/${id}`)
      this.listar()
    }
  }
}
</script>