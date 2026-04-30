<template>
  <div>
    <h1>Novo Produto</h1>
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
  methods: {
    async salvar() {
      await axios.post('http://127.0.0.1:8000/api/produtos', this.produto) //sempre que o axios aparece, é onde acontece a conexão do front com o back
      this.$router.push('/') //navigate
    }
  }
}
</script>