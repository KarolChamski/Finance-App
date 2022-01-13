import { createStore } from "vuex";

export default createStore({
  state: {
    accountBalancePLN: 1000.00,
    accountBalanceEUR: 500.00,
    accountBalanceUSD: 500.00,
    currentRate: 0,
    exchangeResult: 0,
    exchangeHistory: []
  },

  mutations: {
    resetExchange ({state}) {
    state.currentRate = 0,
    state.exchangeResult = 0
    }
  },
  getters: {
    fixedPlnAccount: state => {
      return state.accountBalancePLN.toFixed(2)
    },
    fixedEurAccount: state => {
      return state.accountBalanceEUR.toFixed(2)
    },
    fixedUsdAccount: state => {
      return state.accountBalanceUSD.toFixed(2)
    },
  },

  actions: {
    // Action that gets data from  API and depends on selected value count current value
    getCurrentRate({ state }, currency) {
      let rate = 0;

      const fetchLink =
        "https://api.vatcomply.com/rates?base=" +
        currency.selectedFirstCurrency;

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
          state.currentRate = rate.toFixed(3);
          // takes exchange input and multiply by current rate
          state.exchangeResult = currency.exchangeInput * state.currentRate;
        });
    },

    // action depends on selected currency that increase values in wallet
    acceptExchange({ state }, currency) {
      // date needed to create history of transactions
      const current = new Date();
      const date = `${current.getDate()}/${
        current.getMonth() + 1
      }/${current.getFullYear()}`;

      if (
        currency.selectedFirstCurrency == "PLN" &&
        currency.selectedSecondCurrency == "EUR"
      ) {
        state.accountBalancePLN -= currency.exchangeInput;
        state.accountBalanceEUR += state.exchangeResult;

      } else if (
        currency.selectedFirstCurrency == "PLN" &&
        currency.selectedSecondCurrency == "USD"
      ) {
        state.accountBalancePLN -= currency.exchangeInput;
        state.accountBalanceUSD += state.exchangeResult;

      } else if (
        currency.selectedFirstCurrency == "EUR" &&
        currency.selectedSecondCurrency == "PLN"
      ) {
        state.accountBalanceEUR -= currency.exchangeInput;
        state.accountBalancePLN += state.exchangeResult;

      } else if (
        currency.selectedFirstCurrency == "EUR" &&
        currency.selectedSecondCurrency == "USD"
      ) {
        state.accountBalanceEUR -= currency.exchangeInput;
        state.accountBalanceUSD += state.exchangeResult;

      } else if (
        currency.selectedFirstCurrency == "USD" &&
        currency.selectedSecondCurrency == "PLN"
      ) {
        state.accountBalanceUSD -= currency.exchangeInput;
        state.accountBalancePLN += state.exchangeResult;

      } else if (
        currency.selectedFirstCurrency == "USD" &&
        currency.selectedSecondCurrency == "EUR"
      ) {
        state.accountBalanceUSD -= currency.exchangeInput;
        state.accountBalanceEUR += state.exchangeResult;
      }
      
      // creating history item - going to push into exchangeHistory array
      const historyItem = {
        date: date,
        firstCurrency: currency.selectedFirstCurrency,
        secondCurrency: currency.selectedSecondCurrency,
        inputAmount: currency.exchangeInput,
        resultAmount: state.exchangeResult,
        rateValue: state.currentRate
      };

      state.exchangeHistory.unshift(historyItem)

    },
  },
});
