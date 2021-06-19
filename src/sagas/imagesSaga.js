import { takeEvery, select, call, put } from "redux-saga/effects";

import { IMAGES } from "../constant/index";
import fetchImage from "../api/fetchImage";
import { setImages, setError } from "../redux/action";

const getPage = (state) => state.nextPage;

function* handleImagesSaga() {
  console.log("saga invoked");
  try {
    const page = yield select(getPage);
    const images = yield call(fetchImage, page);
    yield put(setImages(images));
  } catch (error) {
    yield put(setError(error));
  }
}

function* imagesSaga() {
  yield takeEvery(IMAGES.LOAD, handleImagesSaga);
}

export default imagesSaga;
