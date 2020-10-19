import * as ACTION_TYPE from "./action_type";

export const ToggleAddItemModal = () => {
  return {
    type: ACTION_TYPE.AddItemModalVisible,
    payload: {},
  };
};

export const OpenContextMenuOfItem = (item) => {
  console.log(item);
  return {
    type: ACTION_TYPE.OpenContextMenuOfItem,
    payload: item,
  };
};
