import { put, call, takeLatest } from 'redux-saga/effects';
import { getMusics } from '@services/musicApi';
import { homeContainerTypes, homeContainerCreators } from './reducer';

const { REQUEST_GET_GITHUB_REPOS } = homeContainerTypes;
const { successGetGithubRepos, failureGetGithubRepos } = homeContainerCreators;
export function* getGithubRepos(action) {
  const response = yield call(getMusics, action.repoName);
  const { data, ok } = response;
  if (ok) {
    yield put(successGetGithubRepos(data));
  } else {
    yield put(failureGetGithubRepos(data));
  }
}
// Individual exports for testing
export default function* homeContainerSaga() {
  yield takeLatest(REQUEST_GET_GITHUB_REPOS, getGithubRepos);
}
