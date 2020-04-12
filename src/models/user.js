import { query as queryUsers, queryCurrent } from '@/services/user';
// import { accountInfo } from '@/services/zhaoshang_api';
import { setStorage } from '@/utils/authority';
import roleSwitch from '@/utils/roleSwitch';

export default {
  namespace: 'user',

  state: {
    list: [],
    currentUser: {
      shop_name: '',
      shop_code: '',
      avatar: '',
      bd_info: {
        name: '',
        avatar: '',
        nickname: '',
        label: '',
        qrcode: '',
        qq: '',
        qq_url: '',
      },
      sh_type: 0,
      member_info: [
        {
          level: 0,
          name: '',
          end_at: '',
        },
      ],
      greetings: '',
      info: {}, // 招商代理
    },
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchCurrent(_, { call, put }) {
      const queryUserInfo = queryCurrent;
      const response = yield call(queryUserInfo);
      if (response.status === 'ok') {
        if (response.payload.info) {
          setStorage('smr', response.payload.info.show_member_record);
        }
        yield put({
          type: 'saveCurrentUser',
          payload: response && response.payload,
        });
      }
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    saveCurrentUser(state, action) {
      const { payload } = action;
      window.roleInfo = payload;
      localStorage.setItem('roleInfo', JSON.stringify(payload || {}));
      roleSwitch(payload);

      return {
        ...state,
        currentUser: payload || {},
      };
    },
    changeNotifyCount(state, action) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },
  },
};
