import React from 'react';
import Redirect from 'umi/redirect';
import pathToRegexp from 'path-to-regexp';
import { connect } from 'dva';
import Authorized from '@/utils/Authorized';
import { getAuthority } from '@/utils/authority';
import Exception403 from '@/pages/Exception/403';
import roleSwitch from '@/utils/roleSwitch';

function AuthComponent({ children, location, routerData }) {
  roleSwitch();
  const auth = getAuthority();
  const isLogin = auth && auth[0] !== 'guest';
  let redirectTo = '/web/index';
  if (window.location.href.indexOf('work') > -1) {
    redirectTo = '/work/user/login';
  }
  const hide403 = 1;
  const getRouteAuthority = (path, routeData) => {
    let authorities;
    routeData.forEach(route => {
      // match prefix
      if (pathToRegexp(`${route.path}(.*)`).test(path)) {
        authorities = route.authority || authorities;

        // get children authority recursively
        if (route.routes) {
          authorities = getRouteAuthority(path, route.routes) || authorities;
        }
      }
    });
    return authorities;
  };

  /* eslint-disable */
  return (
    <Authorized
      authority={getRouteAuthority(location.pathname, routerData)}
      noMatch={isLogin ? hide403 ? '' : <Exception403 /> : <Redirect to={redirectTo} />}
    >
      {children}
    </Authorized>
  );
}
export default connect(({ menu: menuModel }) => ({
  routerData: menuModel.routerData,
}))(AuthComponent);
