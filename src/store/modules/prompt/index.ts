import { defineStore } from 'pinia'
import { getLocalState, setLocalState } from './helper'

export const usePromptStore = defineStore('prompt-store', {
  state: (): Chat.PromptState => getLocalState(),

  getters: {
    getPrompt(state: Chat.PromptState) {
      return state.prompt
    },
  },

  actions: {
    addPrompt(prompt: Chat.Prompt) {
      this.prompt.push(prompt)
      this.recordState()
    },
    deletePrompt(index: number) {
      this.prompt.splice(index, 1)
      this.recordState()
    },
    updatePrompt(index: number, edit: Partial<Chat.History>) {
      this.prompt[index] = { ...this.prompt[index], ...edit }
      this.recordState()
    },
    recordState() {
      setLocalState(this.$state)
    },
  },
})
