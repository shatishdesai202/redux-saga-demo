import { IMAGES } from "../../constant/index";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case IMAGES.LOAD:
      return (state = true);
    case IMAGES.FAIL:
      return (state = false);
    case IMAGES.SUCCESS:
      console.log('!@#$%^&*()')
      return (state = false);
    default:
      return state;
  }
};

export default loadingReducer;
