import { ss } from '@/utils/storage'

const LOCAL_NAME = 'chatPrompt'

export function defaultState(): Chat.PromptState {
  const uuid = Date.now()
  return { prompt: [{ uuid, title: '此处填写问题', text: '此处填写问题的回答', isEdit: false }] }
}

export function getLocalState(): Chat.PromptState {
  const localState = ss.get(LOCAL_NAME)
  return localState ?? defaultState()
}

export function setLocalState(state: Chat.PromptState) {
  ss.set(LOCAL_NAME, state)
}
