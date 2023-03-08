<script setup lang="ts">
import { reactive } from 'vue'
// import { Register } from '@/api'
import { router } from '@/router'
const form = reactive({
  userId: '',
  password: '',
})

const handleSubmit = () => {
  // 提交表单逻辑
//   Register(form).then((data) => {
//     if (data)
  router.push({ path: '/chatprompt', name: 'Prompt' })
//   })
}
</script>

<template>
  <div class="container">
    <div class="logo">
      注册
    </div>
    <form @submit.prevent="handleSubmit">
      <label for="username">Username</label>
      <input id="username" v-model="form.userId" type="text">
      <label for="password">Password</label>
      <input id="password" v-model="form.password" type="password">
      <button>Register</button>
    </form>
  </div>
</template>

<style scoped>
    .container {
    position: relative;
    top: 200px;
    max-width: 400px;
    margin: 0 auto;
    padding: 40px 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .logo {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input[type='text'],
  input[type='password'] {
    border: none;
    background-color: #f5f5f5;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    font-size: 16px;
  }

  input[type='text']:focus,
  input[type='password']:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }

  button {
    border: none;
    background-color: #42b983;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }

  button:hover {
    background-color: #34a374;
  }
</style>
