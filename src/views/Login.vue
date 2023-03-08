<script setup lang="ts">
import { reactive } from 'vue'
import { Login } from '@/api'
import { router } from '@/router'
const form = reactive({
  userId: '',
  password: '',
})

const handleSubmit = async () => {
  // 提交表单逻辑
  const res = await Login(form)
  res && router.push({ path: '/chat' })
}
const doRegister = async () => {
  router.push({ path: '/register' })
}
</script>

<template>
  <div class="container">
    <div class="logo">
      登录
    </div>
    <form @submit.prevent="handleSubmit">
      <label for="username">Username</label>
      <input id="username" v-model="form.userId" type="text">
      <label for="password">Password</label>
      <input id="password" v-model="form.password" type="password">
      <button>Login</button>
    </form>
    <button id="btn" @click="doRegister()">
      Register
    </button>
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

  #btn {
    margin-top: 15px;
    width: 360px;
  }
</style>
