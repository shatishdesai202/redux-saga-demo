import { IMAGES } from "../../constant/index";

const pageReducer = (state = 1, action) => {
  switch (action.type) {
    case IMAGES.SUCCESS:
      return (state = state + 1);

    default:
      return state;
  }
};

export default pageReducer;
