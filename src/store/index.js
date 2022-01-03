import { createStore } from 'vuex';


export default createStore ({
    state:{
        accountBalancePLN: 1000,
        accountBalanceEUR: 500,
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

        getCurrentRate({state}, currency){
            let rate = 0;
            console.log(currency);
            return fetch ('https://api.vatcomply.com/rates?base=PLN')
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then((data) => {
                rate = data.rates.EUR;
                state.currentRate = rate;
            })
        },
        
        // action, that takes current exchange rate from API and calling basic exchange mutation
                exchangeCurrency({commit}){
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
                },



    }

})