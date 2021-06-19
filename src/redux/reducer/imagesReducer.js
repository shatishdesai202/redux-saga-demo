import { IMAGES } from "../constant/index";

const imagesReducer = (state = [], action) => {
  switch (action.type) {
    case IMAGES.SUCCESS:
      console.log('!@#$%^&*()')
      return [...state, ...action.images];
    default:
      return state;
  }
};

export default imagesReducer;
