import { call, put, takeEvery, delay } from "redux-saga/effects";
import { accountsListRequest } from "./apiRequests";
import {
  ISACCOUNTSLIST_LOADER,
  SET_CURRENT_ACCOUNT,
  setCurrentAccountSuccess,
  setCurrentAccountError,
  setCurrentAccount,
  isAccountsListError,
  isAccountsListSuccess,
  isAccountsListLoader,
  SET_CURRENT_ACCOUNT_SUCCESS,
} from "../actions";

function* accountsListFlow(action) {
  try {
    const { value } = action;
    const userId = localStorage.getItem('userId');
    const response = yield call(accountsListRequest, userId);
    yield delay(500);
    yield put(isAccountsListSuccess(response.data));
    yield put(setCurrentAccountSuccess(value ? {value}:{value: 0}));
    // console.log(response);
    console.log(`accountsList success `);
  } catch (error) {
    yield put(isAccountsListError(error));
    yield put(setCurrentAccountError());
    console.log(error);
  }
}

function* accountsListSagas() {
  yield takeEvery(
    [ISACCOUNTSLIST_LOADER, SET_CURRENT_ACCOUNT],
    accountsListFlow
  );
}

export default accountsListSagas;