import {
    legacy_createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware,
    compose,
  } from "redux";
  import thunk from "redux-thunk";
  
  import { PostsReducer } from "../posts/reducers";
  import { UserReducer } from "../users/reducers";
  import { ItemsReducer } from "../items/reducers";
  import { CartsReducer } from "../carts/reducers";
  
  export default function createStore() {
    return reduxCreateStore(
      combineReducers({
        posts: PostsReducer,
        users: UserReducer,
        items: ItemsReducer,
        carts: CartsReducer,
      }),
      compose(
        applyMiddleware(thunk)
        // DEBUG MODE
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    );
  }