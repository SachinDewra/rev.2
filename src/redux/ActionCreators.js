import * as ActionTypes from './ActionTypes';

// create action object
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    // send back
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});