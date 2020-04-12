import React, { Component } from 'react';
import { Carousel, Tag, Button } from 'antd';
import { connect } from 'dva';
import router from 'umi/router';
import styles from './Agency.less';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { getStorage } from '@/utils/authority';

@connect(({ user }) => ({
  currentUser: user.currentUser,
}))
class Agency extends Component {
  state = {};

  jumpTo = url => {
    const { currentUser } = this.props;
    if (getStorage('token') && getStorage('token') !== '' && currentUser.work_state === 2) {
      router.push(url);
    } else {
      router.push('/user/zhaoshang-register');
    }
  };

  render() {
    return (
      <div className={styles.marketPromotion}>
        <Nav />
        {/* banner */}
        <div className={styles.bgColor}>
          <div className={styles.mp_banner}>
            <p className={styles.title}>真多客代理服务正式启动</p>
            <p className={styles.subtitle}>诚邀优质团队/公司加入我们</p>
            <div className={styles.btn} onClick={this.jumpTo.bind(this, '/work/dashboard')}>
              立即申请
            </div>
          </div>
        </div>
        {/* content center */}
        <div className={styles.center}>
          <div className={styles.mp_center}>
            <p className={styles.title}>一体化管理，省时省力省心</p>
            <div className={styles.programs}>
              <div className={styles.program}>
                <img
                  src="https://cdn.fengjiangdali.com/image/static/7633d16ee00c22cc8171c6f2ecb008d9dce00436.jpg"
                  alt=""
                />
                <span>快速入驻</span>
                <p>无需冗长的资料填写 24小时内即可完成入驻</p>
              </div>
              <div className={styles.program}>
                <img
                  src="https://cdn.fengjiangdali.com/image/static/042b8a14f328037405ad24c0eea9a8d3068a6df1.jpg"
                  alt=""
                />
                <span>一对一培训</span>
                <p>简单的邀请机制，快速锁客 专人一对一答疑解惑</p>
              </div>
              <div className={styles.program}>
                <img
                  src="https://cdn.fengjiangdali.com/image/static/786cfe12271f29222e46910504c8e494fc0a4749.jpg"
                  alt=""
                />
                <span>推广赋能</span>
                <p>提供素材库，海量素材免费获取 节日均有活动策划，助力推广</p>
              </div>
              <div className={styles.program}>
                <img
                  src="https://cdn.fengjiangdali.com/image/static/e865d64dbab850b2de58fc3ef793f1d8c9698e5f.jpg"
                  alt=""
                />
                <span>不收费</span>
                <p>推广过程中，不收取任何费用</p>
              </div>
            </div>
          </div>
        </div>

        {/* 商家服务 */}
        <div className={styles.advantage_block}>
          <div className={styles.title}>全方位服务，助您更高效率</div>
          <div className={styles.advantages}>
            <div className={styles.advantage}>
              <img
                src="https://cdn.fengjiangdali.com/image/static/9f4f819b91e1c136b8bd2a5e5aec265fe009469d.jpg"
                alt=""
              />
              <div className={styles.texts}>
                <p className={styles.desc1}>操作更方便</p>
                <p className={styles.desc2}>智能后台管理，数据更清晰</p>
              </div>
            </div>
            <div className={styles.advantage}>
              <img
                src="https://cdn.fengjiangdali.com/image/static/f7b4285a21d9fef408bc7bda452ddce8762bc2cc.jpg"
                alt=""
              />
              <div className={styles.texts}>
                <p className={styles.desc1}>推广更快速</p>
                <p className={styles.desc2}>覆盖全行业，提供多种方式推广</p>
              </div>
            </div>
            <div className={styles.advantage}>
              <img
                src="https://cdn.fengjiangdali.com/image/static/7fdc4dcc4e5d00b954fdfaf301d12609fca5d948.jpg"
                alt=""
              />
              <div className={styles.texts}>
                <p className={styles.desc1}>收入更高</p>
                <p className={styles.desc2}>收入方案多样化，量身定制</p>
              </div>
            </div>
          </div>
        </div>

        {/* 代理商家 */}
        <div className={styles.case_block}>
          <div className={styles.title}>正在助力 500位+ 代理创造财富，期待您的加入</div>
          <div className={styles.businesses}>
            <Carousel>
              <div>
                <div className={styles.business}>
                  <img
                    className={styles.logoImg}
                    src="https://cdn.fengjiangdali.com/image/static/82eb5a21a647fa206ceb7ff39fec5dfc238486cd.jpg"
                    alt=""
                  />
                  <div className={styles.businessName}>A.美恩・美学依依</div>
                  <Tag color="blue">招商代理</Tag>
                  <div className={styles.businessDesc}>
                    累计预计收入<span className={styles.num}>45613</span>元
                  </div>
                </div>
                <div className={styles.business}>
                  <img
                    className={styles.logoImg}
                    src="https://cdn.fengjiangdali.com/image/static/a11afaad0fdffc2f00592e8bdd0f1ade3d55722b.jpg"
                    alt=""
                  />
                  <div className={styles.businessName}>大宁</div>
                  <Tag color="blue">招商代理</Tag>
                  <div className={styles.businessDesc}>
                    累计预计收入<span className={styles.num}>35215</span>元
                  </div>
                </div>
                <div className={styles.business}>
                  <img
                    className={styles.logoImg}
                    src="https://cdn.fengjiangdali.com/image/static/43a7b18d1bf013f69738f73cab4fbbb34319bdd1.jpg"
                    alt=""
                  />
                  <div className={styles.businessName}>贝贝</div>
                  <Tag color="blue">招商代理</Tag>
                  <div className={styles.businessDesc}>
                    累计预计收入<span className={styles.num}>32563</span>元
                  </div>
                </div>
                <div className={styles.business}>
                  <img
                    className={styles.logoImg}
                    src="https://cdn.fengjiangdali.com/image/static/9f3377278d48cba0f0ddd48a5dbcc86b7dce9138.jpg"
                    alt=""
                  />
                  <div className={styles.businessName}>在路上</div>
                  <Tag color="blue">招商代理</Tag>
                  <div className={styles.businessDesc}>
                    累计预计收入<span className={styles.num}>25637</span>元
                  </div>
                </div>
                <div className={styles.business}>
                  <img
                    className={styles.logoImg}
                    src="https://cdn.fengjiangdali.com/image/static/98696f1257d8a606bc953cdc72d8eb26471c2d4c.jpg"
                    alt=""
                  />
                  <div className={styles.businessName}>80后的人生</div>
                  <Tag color="blue">招商代理</Tag>
                  <div className={styles.businessDesc}>
                    累计预计收入<span className={styles.num}>24568</span>元
                  </div>
                </div>
                <div className={styles.business}>
                  <img
                    className={styles.logoImg}
                    src="https://cdn.fengjiangdali.com/image/static/03db4c9c7d746c8908f5e636e7a526263f067afc.jpg"
                    alt=""
                  />
                  <div className={styles.businessName}>鸭梨@有点儿</div>
                  <Tag color="blue">招商代理</Tag>
                  <div className={styles.businessDesc}>
                    累计预计收入<span className={styles.num}>23541</span>元
                  </div>
                </div>
                <div className={styles.business}>
                  <img
                    className={styles.logoImg}
                    src="https://cdn.fengjiangdali.com/image/static/064fbc1b9019525b72b537cab67e16c0b6e98c43.jpg"
                    alt=""
                  />
                  <div className={styles.businessName}>24hour</div>
                  <Tag color="blue">招商代理</Tag>
                  <div className={styles.businessDesc}>
                    累计预计收入<span className={styles.num}>15613</span>元
                  </div>
                </div>
                <div className={styles.business}>
                  <img
                    className={styles.logoImg}
                    src="https://cdn.fengjiangdali.com/image/static/667347854a3a30dfd330baa16e4755335c358ed2.jpg"
                    alt=""
                  />
                  <div className={styles.businessName}>光辉</div>
                  <Tag color="blue">招商代理</Tag>
                  <div className={styles.businessDesc}>
                    累计预计收入<span className={styles.num}>12563</span>元
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
          <Button
            size="large"
            style={{
              width: 224,
              height: 64,
              lineHeight: 2.5,
              color: '#FFFFFF',
              fontWeight: 500,
              backgroundColor: '#40A9FF',
              fontSize: 24,
              marginTop: 56,
            }}
            href="/user/zhaoshang-register"
          >
            立即申请
          </Button>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Agency;
