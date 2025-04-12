import { create } from 'zustand'

interface TemplateInterface {
  isSelectTemplate: string
  changeSelectedTemplate: (template: string) => void
}

export const useTemplateStore = create<TemplateInterface>((set) => ({
  isSelectTemplate: sessionStorage.getItem('selectedTemplate') || 'classic',
  changeSelectedTemplate: (template) => {
    sessionStorage.setItem('selectedTemplate', template)
    set({ isSelectTemplate: template })
  }
}))
