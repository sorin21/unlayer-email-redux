import { createStore } from "redux";
import reducer from "../reducers/reducerTemplate";

export default () => { 
  const store = createStore(reducer);
  return store;
}


// export default configureStore;
