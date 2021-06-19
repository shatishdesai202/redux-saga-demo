import imagesSaga from "./imagesSaga";

export default imagesSaga;

// import { takeEvery } from "redux-saga/effects";

// import { IMAGES } from "../redux/constant/index";

// // function* workerSaga() {
// //   console.log("Hey from worker");
// //   console.log(yield put({ type: "ACTION_FROM_WORKER" }));
// //   // yield put({ type: "ACTION_FROM_WORKER" });
// // }

// // eslint-disable-next-line require-yield
// function* imageHandleLoadImageSaga() {
//   console.log("imageHandleLoadImageSaga");
// }

// // function* handleDummysaga() {
// //   console.log("dummy saga is invoked");
// // }

// function* rootSaga() {
//   // console.log("hello saga");
//   yield takeEvery(IMAGES.LOAD, imageHandleLoadImageSaga);
//   // yield take("DUMMY");
//   // yield call(handleDummysaga);
//   // yield take(IMAGES.LOAD);
//   // yield call(imageHandleLoadImageSaga);
// }

// // watcher saga --> action --> workerSaga

// export default rootSaga;
