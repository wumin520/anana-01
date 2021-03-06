import { routerRedux } from 'dva/router';
import { login, getCaptcha } from '@/services/zhaoshang_api';
import { settleIn } from '@/services/tuishou_api';
import { setUserToken, setAuthority, setShState } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { reloadAuthorized } from '@/utils/Authorized';

const getRedirectUrl = () => {
  reloadAuthorized();
  const urlParams = new URL(window.location.href);
  const params = getPageQuery();
  let { redirect } = params;
  if (redirect) {
    const redirectUrlParams = new URL(redirect);
    if (redirectUrlParams.origin === urlParams.origin) {
      redirect = redirect.substr(urlParams.origin.length);
      if (redirect.match(/^\/.*#/)) {
        redirect = redirect.substr(redirect.indexOf('#') + 1);
      }
    } else {
      redirect = null;
    }
  }
  return redirect;
};
const homePath = '/work';

export default {
  namespace: 'zslogin',

  state: {
    status: undefined,
    sh_id: '',
    sh_state: '',
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(login, payload);
      // Login successfully
      if (response.status === 'ok') {
        yield put({
          type: 'changeLoginStatus',
          payload: {
            res: response,
            setToken: 1,
          },
        });
        const redirect = getRedirectUrl();
        yield put(routerRedux.replace(redirect || homePath));
      }
    },

    *tuishouSettleIn({ payload }, { call, put }) {
      const response = yield call(settleIn, payload);
      // Login successfully
      if (response.status === 'ok') {
        yield put({
          type: 'changeLoginStatus',
          payload: {
            res: response,
            currentAuthority: 'tuishou',
          },
        });
        const redirect = getRedirectUrl();
        yield put(routerRedux.replace(redirect || homePath));
      }
    },

    *getCaptcha({ payload }, { call }) {
      yield call(getCaptcha, payload);
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      console.log('reducers -> changeLoginStatus -> payload -> ', payload);
      if (payload.setToken) {
        /* eslint-disable */
        const { token } = payload.res.payload;
        window.cdk_token = token;
        setUserToken(token);
      } else if (payload.delToken) {
        setUserToken('');
        setShState('');
      }
      setAuthority('zhaoshang');
      return {
        ...state,
        ...payload,
      };
    },
  },
};
