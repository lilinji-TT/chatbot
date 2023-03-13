import { usePromptStore } from '@/store'

export function usePrompt() {
  const promptStore = usePromptStore()

  const addPrompt = () => {
    promptStore.addPrompt({ uuid: Date.now(), title: '此处填写问题', text: '此处填写问题的回答', isEdit: false })
  }

  const updatePrompt = (index: number, isEdit: boolean) => {
    promptStore.updatePrompt(index, { isEdit })
  }

  const deletePrompt = (index: number) => {
    promptStore.deletePrompt(index)
  }

  const getPrompt = () => promptStore.prompt

  return {
    addPrompt,
    updatePrompt,
    deletePrompt,
    getPrompt,
  }
}
