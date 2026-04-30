<template>
  <div>
    <h1>Produtos</h1>
    <router-link to="/criar">Novo Produto</router-link>

    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Marca</th>
          <th>Preço</th>
          <th>Estoque</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="produto in produtos" :key="produto.id">
          <td>{{ produto.nome }}</td>
          <td>{{ produto.marca }}</td>
          <td>{{ produto.preco }}</td>
          <td>{{ produto.estoque }}</td>
          <td>
            <router-link :to="`/editar/${produto.id}`">Editar</router-link>
            <button @click="excluir(produto.id)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
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
      const response = await axios.get('http://127.0.0.1:8000/api/produtos') // conexao
      this.produtos = response.data
    },
    async excluir(id) {
      await axios.delete(`http://127.0.0.1:8000/api/produtos/${id}`) // conexao
      this.listar()
    }
  }
}
</script>