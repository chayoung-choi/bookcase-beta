import React from 'react'
import { createAction, handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
    count: 11
};

const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({
            count: state.count + 1
        }),
        [DECREASE]: (state, action) => ({
            count: state.count - 1
        })
    },
    initialState
);
export default counter;
