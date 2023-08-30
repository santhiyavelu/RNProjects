import {take, put, call, fork} from 'redux-saga/effects';

import {userActions} from '../features/user/userSlice';
import ApiHelper from '../helper/Apihelper';

const {request, success, failure} = userActions;

function callPostRequest(url, data, headers) {
  console.log(url, data, 'sagadata');
  return ApiHelper.post(url, data, headers);
}

function* watchRequest() {
  while (true) {
    const {payload} = yield take(request);

    try {
      let response;

      response = yield call(callPostRequest, payload.url, payload.data);

      yield put(success(response));
    } catch (err) {
      yield put(failure(err.message));

      // ErrorHelper.handleErrors(err, true);
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
