import { combineReducers } from "redux";
import counter from "./counter";

import storage from "redux-persist/lib/storage"
import {persistReducer} from "redux-persist";

const persistConfig = {
    key: "root",
    // localStorage에 저장합니다.
    storage,
    // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
    whitelist: ["counter"]
    // blacklist -> 그것만 제외합니다
};


// 여러 reducer를 사용하는 경우 reducer를 하나로 묶어주는 메소드입니다.
// store에 저장되는 리듀서는 오직 1개입니다.
const rootReducer = combineReducers({
    counter
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
