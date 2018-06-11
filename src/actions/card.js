import * as ActionTypes from '../actiontypes/card';

export const addCard = data => {
    return {
        type: ActionTypes.ADD_CARD,
        data: data,
    }
};