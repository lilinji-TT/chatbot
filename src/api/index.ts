import type { AxiosProgressEvent, GenericAbortSignal } from 'axios'
import { post } from '@/utils/request'

export function fetchChatAPI<T = any>(
  prompt: string,
  options?: { conversationId?: string; parentMessageId?: string },
  signal?: GenericAbortSignal,
) {
  return post<T>({
    url: '/chat',
    data: { prompt, options },
    signal,
  })
}

export function fetchChatConfig<T = any>() {
  return post<T>({
    url: '/config',
  })
}

export function fetchChatAPIProcess<T = any>(
  params: {
    prompt: string
    options?: { conversationId?: string; parentMessageId?: string }
    signal?: GenericAbortSignal
    onDownloadProgress?: (progressEvent: AxiosProgressEvent) => void },
) {
  return post<T>({
    url: '/chat-process',
    data: { prompt: params.prompt, options: params.options },
    signal: params.signal,
    onDownloadProgress: params.onDownloadProgress,
  })
}

export function Login<T = any>(params: {
  userId: String
  password: String
}) {
  return post<T>({
    url: '/user/login',
    data: { id: params.userId, password: params.password },
  })
}
export function Register<T = any>(params: {
  userId: String
  password: String
}) {
  return post<T>({
    url: '/user/register',
    data: { id: params.userId, password: params.password },
  })
}
export function fetchPrompt<T = any>(params: T) {
  return post<T>({
    url: '/prompt',
    data: { prompt: params },
  })
}
