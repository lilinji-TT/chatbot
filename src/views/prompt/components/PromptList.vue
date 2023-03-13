<script lang="ts" setup>
import { computed } from 'vue'
// import { router } from '@/router'
import { usePrompt } from '../hooks'
import { SvgIcon } from '@/components/common'
import { fetchPrompt } from '@/api'

const { addPrompt, updatePrompt, deletePrompt, getPrompt } = usePrompt()
const promptList = computed(() => getPrompt())
const startChat = () => {
  fetchPrompt(promptList)
//   router.push({ path: '/chat' })
}
</script>

<template>
  <div class="container">
    <div class="content">
      <h1>请填写聊天风格</h1>
      <div class="form">
        <div v-for="(data, i) of promptList" :key="i">
          <div class="mt-4">
            <input v-if="data.isEdit" v-model="data.title" type="text">
            <span v-else>{{ data.title }}</span>
            <template v-if="data.isEdit">
              <button class="p-1" @click="updatePrompt(i, false)">
                <SvgIcon icon="ri:save-line" />
              </button>
            </template>
            <template v-else>
              <button class="p-1">
                <SvgIcon icon="ri:edit-line" @click="updatePrompt(i, true)" />
              </button>
              <div v-if="i">
                <button class="p-1" @click="deletePrompt(i)">
                  <SvgIcon icon="ri:delete-bin-line" />
                </button>
              </div>
            </template>
            <input v-model="data.text" type="text">
          </div>
        </div>
        <button @click="addPrompt()">
          +
        </button>
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
