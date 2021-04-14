import { createStore, combineReducers } from "redux";
import TicketsReducer from "./Tickets/TicketsReducer";

const reducers = combineReducers({
  ticketsStore: TicketsReducer,
});

const store = createStore(reducers);

export default store;
