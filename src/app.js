import fetch from 'dva/fetch';

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
    },
  },
};

let authRoutes = {};

function ergodicRoutes(routes, authKey, authority) {
  routes.forEach(element => {
    if (element.path === authKey) {
      if (!element.authority) element.authority = []; // eslint-disable-line
      Object.assign(element.authority, authority || []);
    } else if (element.routes) {
      ergodicRoutes(element.routes, authKey, authority);
    }
    return element;
  });
}

export function patchRoutes(routes) {
  Object.keys(authRoutes).map(authKey =>
    ergodicRoutes(routes, authKey, authRoutes[authKey].authority)
  );
  window.g_routes = routes;
}

export function render(oldRender) {
  // oldRender();
  console.log(oldRender, 'oldRender ->')
  authRoutes = {"/form/advanced-form":{"authority":["admin","user"]}};
  oldRender();
  // fetch('/api/auth_routes')
  //   .then(res => res.json())
  //   .then(
  //     ret => {
  //       authRoutes = {"/form/advanced-form":{"authority":["admin","user"]}};
  //       oldRender();
  //     },
  //     () => {
  //       oldRender();
  //     }
  //   );
}

export function onRouteChange({ location, routes, action }) {
  console.log('onRouteChange -> ', location, routes, action);
  const adContainerId = 'qidian_wpa_2852167740_101505';
  let adEl = document.getElementById(adContainerId);
  const sf = () => {
    const st = setTimeout(() => {
      adEl = document.getElementById(adContainerId);
      if (adEl) {
        adEl.style.display = 'none';
      } else {
        sf();
      }
      clearTimeout(st);
    }, 0);
  };
  const prePathName = location.pathname
  if (window._st) {
    clearTimeout(window._st)
    window._st = null
  }
  window._st = setTimeout(() => {
    clearTimeout(window._st)
    if (prePathName == '/' && location.pathname !== '/web/index') {
      window.location.href = '/web/index'
    }
  }, 100);
  if (/^\/homePage|fangdan|order|CapitalManage|tuishou|favorites|work/.test(location.pathname)) {
    sf();
  } else if (adEl) {
    adEl.style.display = 'block';
  }
}
