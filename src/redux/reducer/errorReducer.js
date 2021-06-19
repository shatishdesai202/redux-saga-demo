import { IMAGES } from "../constant/index";

const errorReducer = (state = false, action) => {
  switch (action.type) {
    case IMAGES.FAIL:
      return (state = action.error);
    case IMAGES.SUCCESS:
      console.log("ERROR REDUCER... @@@@");
      return state;
    default:
      return state;
  }
};

export default errorReducer;
