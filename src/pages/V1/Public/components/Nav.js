import React, { PureComponent } from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { connect } from 'dva';
import Link from 'umi/link';
import { NavLink } from 'react-router-dom';

import { getUserToken } from '@/utils/authority';
import styles from './nav.less';

@connect(({ user, login }) => ({
  currentUser: user.currentUser,
  login,
}))
class Nav extends PureComponent {
  constructor() {
    super();
    this.state = {
      isLogin: false,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const token = getUserToken();
    if (token && token !== '') {
      dispatch({
        type: 'user/fetchCurrent',
      });
      this.setState({
        isLogin: true,
      });
    }
  }

  logout = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'login/logout',
    });
  };

  render() {
    const { isLogin } = this.state;
    const { currentUser } = this.props;

    const phoneStr = currentUser.phone
      ? `${currentUser.phone.substr(0, 3)}****${currentUser.phone.substr(7)}`
      : '';

    const menu = (
      <Menu>
        {currentUser.state == '1' ? (
          <Menu.Item>
            <Link to="/homePage">商家中心</Link>
          </Menu.Item>
        ) : (
          ''
        )}
        {currentUser.state === 0 ? (
          <Menu.Item>
            <Link to="/user/settlein">商家入驻</Link>
          </Menu.Item>
        ) : (
          ''
        )}
        {currentUser.wsc_state == 1 ? (
          <Menu.Item>
            <Link to="/tuishou">流量主中心</Link>
          </Menu.Item>
        ) : (
          ''
        )}
        {currentUser.work_state == 2 ? (
          <Menu.Item>
            <Link to="/work/dashboard">代理中心</Link>
          </Menu.Item>
        ) : (
          ''
        )}
        <Menu.Item>
          <div onClick={this.logout}>退出登录</div>
        </Menu.Item>
      </Menu>
    );

    return (
      <div className={styles.nav_block}>
        <div className={styles.nav}>
          <div className={styles.nav_left}>
            <Link to="/web/index">
              <img
                className={styles.logoImg}
                src="https://cdn.fengjiangdali.com/image/static/c3861bbb5b4d7284f3137b6a2653f72a2ce0213e.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className={styles.nav_center}>
            <NavLink
              exact
              className={styles.nav_link}
              to="/web/index"
              activeStyle={{ color: '#1890FF' }}
            >
              首页
            </NavLink>
            <NavLink
              exact
              className={styles.nav_link}
              to="/public/aboutUs"
              activeStyle={{ color: '#1890FF' }}
            >
              关于我们
            </NavLink>
            {/* <NavLink
              exact
              target="_blank"
              className={styles.nav_link}
              to="/market/marketPromotion"
              activeStyle={{ color: '#1890FF' }}
            >
              商家服务
            </NavLink>
            <NavLink
              exact
              target="_blank"
              className={styles.nav_link}
              to="/market/agency"
              activeStyle={{ color: '#1890FF' }}
            >
              代理合作
            </NavLink>
            <NavLink
              exact
              target="_blank"
              className={styles.nav_link}
              to="/public/flow"
              activeStyle={{ color: '#1890FF' }}
            >
              流量变现
            </NavLink> */}
          </div>
          <div className={styles.nav_right}>
            {isLogin ? (
              <div className={styles.after_login}>
                <Dropdown overlay={menu}>
                  <div className="ant-dropdown-link">
                    {phoneStr} <Icon type="down" />
                  </div>
                </Dropdown>
              </div>
            ) : (
              <div className={styles.btn_block}>
                <Link className={`${styles.btn} ${styles.btn_register}`} to="/user/register">
                  注册
                </Link>
                <Link className={`${styles.btn} ${styles.btn_login}`} to="/user/login">
                  登录
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
