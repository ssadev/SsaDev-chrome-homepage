import * as ACTION_TYPE from "./action_type";

const initalState = {
  modelVisible: false,
  contextedItem: null,
};

const rootReducer = (state = initalState, action) => {
  // eslint-disable-next-line
  let payload = action.payload;
  switch (action.type) {
    case ACTION_TYPE.AddItemModalVisible:
      let visible = state.modelVisible ? false : true;
      console.log(visible);
      return {
        ...state,
        modelVisible: visible,
      };
    case ACTION_TYPE.OpenContextMenuOfItem:
      return {
        ...state,
        contextedItem: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
