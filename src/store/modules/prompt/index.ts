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
      this.prompt.unshift(prompt)
      this.recordState()
    },
    recordState() {
      setLocalState(this.$state)
    },
  },
})
