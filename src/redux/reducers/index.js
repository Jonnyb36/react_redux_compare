//reducers produce the state.  In Redux the state must return entirely from reducers
//in redux you cannot use setState like in plain React as state is immutable

import { ADD_PRICE, ADD_ARTICLE } from '../constants/action-types'

const initialState = {
    prices: [],
    articles: [
        { id: 1, article: "article 1" },
        { id: 2, article: "article 2" },
        { id: 3, article: "article 3" }
    ]
};

//to avoid 

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRICE:
            //option 1.
            //state.prices.concat(action.payload);
            //return state

            //option 2.
            //return { ...state, prices: state.prices.concat(action.payload) }; //must add to original immutable state

            //option 3.
            return { ...state, prices: [...state.prices, action.payload] }; //must add to original immutable state
        case ADD_ARTICLE:
            return { ...state, articles: [...state.articles, action.payload] };
        default:
            return state; //state defaults to initialState if not passed into function    
    }
}

export default rootReducer;