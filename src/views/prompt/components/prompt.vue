<script lang="ts" setup>
import { ref } from 'vue'
import { router } from '@/router'

const gender = ref('')
const description = ref('')
const personality = ref('')

const startChat = () => {
  if (gender.value === '' || personality.value === '' || description.value === '')
    alert('Please fill in all fields')
  else
    router.push({ path: '/chat' })
}
</script>

<template>
  <div class="container">
    <div class="content">
      <h1>请填写聊天风格</h1>
      <div class="form">
        <div class="form-item">
          <label for="gender">你希望AI扮演角色的性别是？</label>
          <input id="gender" v-model="gender" type="text">
        </div>
        <div class="form-item">
          <label for="personality">你希望AI的性格?</label>
          <input id="personality" v-model="personality" type="text">
        </div>
        <div class="form-item">
          <label for="description">描述一下你希望AI扮演角色的特点</label>
          <textarea id="description" v-model="description" type="text" />
        </div>
        <div class="form-item">
          <button class="btn" @click="startChat">
            开始聊天
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100%;
    width: 100%;
  }

  .content {
    width: 500px;
  }

  h1 {
    text-align: center;
  }

  .form {
    margin-top: 30px;
  }

  .form-item {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input[type="text"],
  select {
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  button.btn {
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button.btn:hover {
    background-color: #2980b9;
  }
  textarea {
    width: 100%;
  }
  </style>
