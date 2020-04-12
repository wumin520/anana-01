import React, { PureComponent } from 'react';
import Link from 'umi/link';
import { connect } from 'dva';
import router from 'umi/router';
import styles from './Footer.less';
import { getStorage } from '@/utils/authority';

@connect(({ user }) => ({
  currentUser: user.currentUser,
}))
class Footer extends PureComponent {
  state = {};

  jumoToFd = url => {
    const { currentUser } = this.props;
    if (getStorage('token') && getStorage('token') !== '' && currentUser.state === 1) {
      router.push(url);
    } else if (getStorage('token') && getStorage('token') !== '' && currentUser.state === 0) {
      router.push('/user/settlein');
    } else {
      router.push('/user/login');
    }
  };

  jumoToDl = url => {
    const { currentUser } = this.props;
    if (getStorage('token') && getStorage('token') !== '' && currentUser.work_state === 2) {
      router.push(url);
    } else {
      router.push('/user/zhaoshang-register');
    }
  };

  render() {
    return (
      <div className={styles.bg_footer}>
        <div style={{display: 'none'}} className={styles.footer}>
          <div className={styles.list}>
            <div className={styles.item}>
              <div className={styles.title}>真多客</div>
              <Link className={styles.ele} to="/public/aboutUs">
                公司简介
              </Link>
              <Link className={styles.ele} to="/public/aboutUs">
                企业文化
              </Link>
              <Link className={styles.ele} to="/public/aboutUs">
                合作联系
              </Link>
            </div>
            <div className={styles.item}>
              <div className={styles.title}>产品服务</div>
              <a className={styles.ele} onClick={this.jumoToFd.bind(this, '/homePage/index')}>
                商家中心
              </a>
              <a className={styles.ele} onClick={this.jumoToDl.bind(this, '/work/dashboard')}>
                代理中心
              </a>
              <div className={styles.ele}>流量主中心</div>
              <div className={styles.ele}>开放平台</div>
            </div>

            <div className={styles.item}>
              <div className={styles.title}>帮助支持</div>
              <a className={styles.ele} href="/public/helpDetail?SelectedKeys=1&OpenKeys=sub1">
                新手入门
              </a>
              <a className={styles.ele} href="/public/helpDetail?SelectedKeys=4&OpenKeys=sub2">
                常见问题
              </a>
            </div>

            <div className={styles.item}>
              <div className={styles.title}>微信服务号</div>
              <div className={styles.eleImg}>
                <img
                  src="https://cdn.youlianyc.com/image/static/3462247bd9fc80e155274995e8085d4b953bf968.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer_below}>
          Copyright © 2019<span className={styles.comp}> 上海吴钩网络科技有限公司 </span>
          {/* 沪ICP备17028167号-6 版权所有 */}
          {/* <a
            style={{ marginLeft: 10 }}
            target="cyxyv"
            href="https://v.yunaq.com/certificate?domain=www.chaoduoke.com&from=label&code=90020"
          >
            <img alt="" src="https://aqyzmedia.yunaq.com/labels/label_sm_90020.png" />
          </a> */}
        </div>
      </div>
    );
  }
}

export default Footer;
