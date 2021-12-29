import { createStore } from 'vuex';


export default createStore ({
    state:{
        accountBalance: '$' + 1000,
        currentRate: '0'
    },

    mutations: {
        exchange (state, rate) {
          state.count * rate
        }
      },

    actions:{

        getCurrentRate(){
            let rate = 0;
            fetch ('https://api.vatcomply.com/rates?base=PLN')
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then((data) => {
                rate = data.rates.EUR
                console.log(rate);
            })
            context.commit('exchange')
        }

    }

})