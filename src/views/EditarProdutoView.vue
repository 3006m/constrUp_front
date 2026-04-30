<template>
  <div>
    <h1>Editar Produto</h1>
    <router-link to="/">Voltar</router-link>

    <form @submit.prevent="salvar">
      <input v-model="produto.nome" placeholder="Nome" />
      <input v-model="produto.descricao" placeholder="Descrição" />
      <input v-model="produto.marca" placeholder="Marca" />
      <input v-model="produto.preco" placeholder="Preço" type="number" />
      <input v-model="produto.estoque" placeholder="Estoque" type="number" />
      <button type="submit">Salvar</button>
    </form>
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
      const response = await axios.get(`http://127.0.0.1:8000/api/produtos/${id}`) //conexao
      this.produto = response.data
    },
    async salvar() {
      const id = this.$route.params.id
      await axios.put(`http://127.0.0.1:8000/api/produtos/${id}`, this.produto) //conexao
      this.$router.push('/')
    }
  }
}
</script>