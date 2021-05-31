const initialData = {
  list: [],
};

const feedReducer = (state = initialData, action) => {
  switch (action.type) {
    case "SEND_FEEDBACK":
      const { id, data } = action.payload;

      return {
        ...state,
        list: [...state.list, { id: id, data: data }],
      };

    default:
      return state;
  }
};

export default feedReducer;
