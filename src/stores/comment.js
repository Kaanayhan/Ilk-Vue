import { defineStore } from 'pinia'


export const useCommentStore = defineStore('comment', {
  state: () => ({
    loginForm: []
  }),
  actions: {
    addComment(comment) {
      this.loginForm.push(comment)
    }
  },
  getters: {
    getComments: (state) => state.loginForm
  }
  
})
