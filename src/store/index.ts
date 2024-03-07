import { createStore } from 'vuex'

export default createStore({
  state: {
    current_node: Object
  },
  getters: {
  },
  mutations: {
    set_current_node(state, current_node: any) {
      state.current_node = current_node
    }
  },
  actions: {
  },
  modules: {
  }
})
