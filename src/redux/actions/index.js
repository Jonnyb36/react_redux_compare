import { ADD_PRICE, ADD_ARTICLE } from "../constants/action-types";

export const addPrice = price => ({
    type: ADD_PRICE,
    payload: price
});

export const addArticle = article => ({
    type: ADD_ARTICLE,
    payload: article
});