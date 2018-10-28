
import store from './store/index'
import { addPrice, addArticle } from './actions/index';

//below enables ability to call redux functions from console when running the app...
//store.getState() == current state
//store.dispatch(addPrice({price: 50, id: 1}))
//store.subscribe(() => console.log("Im watching REDUX!"))

window.store = store;
window.addPrice = addPrice;
window.addArticle = addArticle;
