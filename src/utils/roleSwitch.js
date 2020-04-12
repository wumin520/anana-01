import { getAuthority, setAuthority } from '@/utils/authority';

export default function(options) {
  const payload = options || JSON.parse(localStorage.getItem('roleInfo')) || {};
  const role = getAuthority()[0];
  const setAuthorityAndReload = val => {
    setAuthority(val);
    window.location.reload();
  };
  if (
    window.location.pathname.indexOf('work/') > -1 &&
    payload.work_state &&
    role !== 'zhaoshang'
  ) {
    console.log('---------------------isme--------------------');
    setAuthorityAndReload('zhaoshang');
  } else if (payload.wsc_state) {
    // localStorage.setItem('superUser', 1);
    // 即是推手也是商家
    if (window.location.href.indexOf('tuishou') > -1 && role !== 'tuishou') {
      setAuthorityAndReload('tuishou');
    }
  } else if (role !== 'admin' && !/work|tuishou\//.test(window.location.href)) {
    setAuthorityAndReload('admin');
  }
  console.log(
    payload,
    this,
    '-------------------------------saveCurrentUser------------------------------',
    window.location.href,
    role,
    payload.work_state
  );
}
