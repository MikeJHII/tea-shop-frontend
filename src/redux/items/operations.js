import API from "../../API";
import { fetchItemsAction } from "./actions";

const api = new API();

export const fetchItems = () => {
  return async (dispatch) => {
    return api
      .getItems()
      .then((items) => {
        dispatch(fetchItemsAction(items));
      })
      .catch((error) => {
        console.log(error)
        alert("Failed to connect API: /items/");
      });
  };
};