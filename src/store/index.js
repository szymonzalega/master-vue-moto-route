import Vue from 'vue'
import Vuex from 'vuex'
import { getRoutes } from "../services/routeService";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    routes: []
  },
  mutations: {
    setRoutes(state, routes) {
      state.routes = routes
    },

  },
  getters: {
    getRouteById: state => id => {
      return state.routes.find(route => route.id === id)
    }
  },
  actions: {
    async getRoutes({ commit }) {
      const routes = await getRoutes();
      commit('setRoutes', routes)
      return routes;
    }
  },
  modules: {
  }
})
