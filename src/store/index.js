import { createStore } from "vuex";

export default createStore({
  state: {
    accountBalancePLN: 1000,
    accountBalanceEUR: 500,
    currentRate: 0,
    exchangeResult: 0,
  },

  mutations: {
    exchange(state, rate) {
      const result = state.accountBalancePLN * rate;
      state.accountBalanceEUR = result;
      console.log(result);
    },
  },

  actions: {
    // Action that gets data from  API and depends on selected value count current value
    getCurrentRate({ state }, currency) {
      let rate = 0;

      const fetchLink = "https://api.vatcomply.com/rates?base=" + currency.selectedFirstCurrency;

      return fetch(fetchLink)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          if (currency.selectedSecondCurrency == "EUR") {
            rate = data.rates.EUR;
          } else if (currency.selectedSecondCurrency == "USD") {
            rate = data.rates.USD;
          } else if (currency.selectedSecondCurrency == "PLN") {
            rate = data.rates.PLN;
          }
          state.currentRate = rate;
        },
        state.exchangeResult = currency.exchangeInput * state.currentRate 
        
        );


    },

    // action, that takes current exchange rate from API and calling basic exchange mutation
    // exchangeCurrency({commit}){
    //     let rate = 0;
    //     return fetch ('https://api.vatcomply.com/rates?base=PLN')
    //     .then((response) => {
    //         if (response.ok) {
    //             return response.json()
    //         }
    //     })
    //     .then((data) => {
    //         rate = data.rates.EUR
    //         commit('exchange', rate)
    //     })
    // },
  },
});
