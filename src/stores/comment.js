import { defineStore } from 'pinia'

export const useCommentStore = defineStore('comment', {
  state: () => ({
    loginForm: []
  }),
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    addComment(comment) {
      this.loginForm.push(comment)
    }
  },
  getters: {
    getComments: (state) => state.loginForm
  }
})
