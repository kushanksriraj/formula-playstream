export const controlReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_VIDEO":
      return {
        ...state,
        isVideoSelected: true,
        selectedVideoId: action.payload.id
      };

    case "UNSELECT_VIDEO":
      return {
        ...state,
        isVideoSelected: false,
        selectedVideoId: null
      };

    case "CHANGE_ROUTE":
      return { ...state, route: action.payload.route, isVideoSelected: false };

    default:
      break;
  }
};
