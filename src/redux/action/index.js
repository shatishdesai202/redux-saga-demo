import { IMAGES } from "../constant/index.js";

const loadImages = () => ({
  type: IMAGES.LOAD,
});

const setImages = (images) => ({
  type: IMAGES.SUCCESS,
  images,
});

const setError = (error) => ({
  type: IMAGES.FAIL,
  error,
});

export { loadImages, setImages, setError };
