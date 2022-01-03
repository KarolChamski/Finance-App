import { createStore } from 'vuex';


export default createStore ({
    state:{
        accountBalancePLN: 1000,
        accountBalanceEUR: 0,
        currentRate: '0'
    },

    mutations: {
        exchange (state, rate) {
          const result = state.accountBalancePLN * rate;
          state.accountBalanceEUR = result
          console.log(result);
        }
      },

    actions:{
        
// action, that takes current exchange rate from API and calling basic exchange mutation
        getCurrentRate({commit}){
            let rate = 0;
            return fetch ('https://api.vatcomply.com/rates?base=PLN')
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then((data) => {
                rate = data.rates.EUR
                commit('exchange', rate)
            })
        }

    }

})