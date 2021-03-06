import React, { Component } from 'react';
import { Form, Button } from 'antd';
import router from 'umi/router';
import styles from './Register.less';

@Form.create()
class SelectSettleIn extends Component {
  toGo = path => {
    router.push(path);
  };

  render() {
    return (
      <div className={styles.select_block}>
        <div className={`${styles.select_item}`}>
          <img
            className={styles.select_img}
            src="https://cdn.youlianyc.com/image/static/898c54bef29cf5a9127f71c0398f533b22f1cc3e.jpg"
            alt=""
          />
          <p className={styles.select_title}>商家/招商认证</p>
          <p className={styles.select_desc}>
            适用于拥有商品资源和渠道的招商团长以及商家，目前仅支持拼多多放单
          </p>
          <p className={`${styles.select_desc} ${styles.select_limit}`}>
            提供店铺/合作店铺相关资料
          </p>
          <Button
            className={styles.btn_select}
            type="primary"
            // eslint-disable-next-line
            onClick={this.toGo.bind(this, '/user/settlein')}
          >
            立即认证
          </Button>
        </div>
        {/** <div className={styles.title}>请选择下列身份进行认证</div> */}
        <div style={{display: 'none'}} className={`${styles.select_item} ${styles.ml64}`}>
          <img
            className={styles.select_img}
            src="https://cdn.youlianyc.com/image/static/2399a4ab4b7d3343e2318e440a7afd3be2a127f3.jpg"
            alt=""
          />
          <p className={styles.select_title}>推手认证</p>
          <p className={styles.select_desc}>适合有流量的个人或团队推广，流量变现</p>
          <p className={`${styles.select_desc} ${styles.select_limit}`}>需实名认证</p>
          <Button
            className={styles.btn_select}
            type="primary"
            // eslint-disable-next-line
            onClick={this.toGo.bind(this, '/user/tuishou-signin')}
          >
            立即认证
          </Button>
        </div>
      </div>
    );
  }
}
export default SelectSettleIn;
