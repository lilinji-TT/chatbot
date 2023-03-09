<script lang="ts" setup>
import { reactive } from 'vue'
// import { router } from '@/router'
import { SvgIcon } from '@/components/common'
import { fetchPrompt } from '@/api'

const promptData = { title: '此处填写问题', text: '此处填写问题的回答', isEdit: false, uuid: Date.now() }
const List: any[] = reactive([promptData])

const startChat = () => {
  fetchPrompt(List)
//   router.push({ path: '/chat' })
}

const deepClone = (obj: any) => obj

const addPrompt = () => {
  const obj = { title: '此处填写问题', text: '此处填写问题的回答', isEdit: false, uuid: Date.now() }
  const newObj = deepClone(obj)
  List.push(newObj)
}

const handleEdit = (index: number, isEdit: boolean) => {
  List.map((item, i) => index === i ? item.isEdit = isEdit : item)
}
</script>

<template>
  <div class="container">
    <div class="content">
      <h1>请填写聊天风格</h1>
      <div class="form">
        <div v-for="(data, i) of List" :key="i">
          <div class="mt-4">
            <input v-if="data.isEdit" v-model="data.title" type="text" :placeholder="data.title">
            <span v-else>{{ data.title }}</span>
            <template v-if="data.isEdit">
              <button class="p-1" @click="handleEdit(i, false, $event)">
                <SvgIcon icon="ri:save-line" />
              </button>
            </template>
            <template v-else>
              <button class="p-1">
                <SvgIcon icon="ri:edit-line" @click="handleEdit(i, true, $event)" />
              </button>
            </template>
            <input v-model="data.text" type="text" :placeholder="data.text">
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
