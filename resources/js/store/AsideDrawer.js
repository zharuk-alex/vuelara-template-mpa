export default {
    state: {
        drawerState: null
    },
    mutations: {
      setDrawer(state, payload){
        state.drawerState = payload;
      }
    },
    actions: {
        toggleDrawerState({commit, state}){
            commit('setDrawer', !state.drawerState);
        }
    },
    getters: {
        drawerState(state){
            return state.drawerState;
        }
    }
};