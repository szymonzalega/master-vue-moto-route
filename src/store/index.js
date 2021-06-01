import Vue from 'vue'
import Vuex from 'vuex'
import { getRoutes, updateRoute, removeRoute } from "../services/routeService";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes: []
  },
  mutations: {
    setRoutes(state, routes) {
      state.routes = routes
    },
    updateRoute(state, newRoute) {
      state.routes.map(route => route.id === newRoute.id ? newRoute : route)
    },
    removeRoute(state, routeId) {
      state.routes.filter((route) => route.id !== routeId)
    }
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
    },
    async updateRoute({commit}) {
      updateRoute();
      commit('updateRoute', "1");
    },
    async removeRoute({commit}) {
      removeRoute();
      commit('removeRoute', "1");
    }
  },
  modules: {
  }
})
