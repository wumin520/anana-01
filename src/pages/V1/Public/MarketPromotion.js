import React, { Component } from 'react';
import { Menu, Modal, Carousel, Icon } from 'antd';
import { connect } from 'dva';
import { getStorage, setInviteCode } from '@/utils/authority';
import router from 'umi/router';
import styles from './MarketPromotion.less';
import Nav from './components/Nav';
import Footer from './components/Footer';

@connect(({ user }) => ({
  currentUser: user.currentUser,
}))
class MarketPromotion extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      key: '',
      modalVisible: false,
    };
  }

  componentDidMount () {
    const {
      location: { query },
    } = this.props;
    if (query.s) {
      setInviteCode(query.s);
    }
  }

  handleClick = e => {
    this.setState({
      key: e.key,
    });
  };

  setModal1Visible = () => {
    this.setState({
      modalVisible: true,
    });
  };

  Closable = () => {
    this.setState({
      modalVisible: false,
    });
  };

  jumpTo = url => {
    const { currentUser } = this.props;
    let userInfo = getStorage('roleInfo');
    try {
      userInfo = JSON.parse(userInfo)
    } catch (error) {
      userInfo = {}
    }
    if (getStorage('token') && getStorage('token') !== '' && userInfo.state === 1) {
      router.push(url);
    } else if (getStorage('token') && getStorage('token') !== '' && userInfo.state == 0) {
      router.push('/user/settlein');
    } else {
      router.push('/user/login');
    }
  };

  // 轮播左右切换
  next() {
    this.slider.slick.slickNext();
  }

  prev() {
    this.slider.slick.slickPrev();
  }

  render() {
    // 爆款
    let array = [
      {
        bgImg:
          'https://cdn.fengjiangdali.com/image/static/961c5028a4a080d014d8543bf19ac5d85355bda0.jpg',
        desc: '【爆款商品】',
      },
      {
        bgImg:
          'https://cdn.fengjiangdali.com/image/static/9dde81433ae2950089170814766ecf0f4ce41f82.jpg',
        desc: '【0元拼团】',
      },
      {
        bgImg:
          'https://cdn.fengjiangdali.com/image/static/dbf35748f5d66b6ea483af0a5c45f0f4cd221f2a.jpg',
        desc: '【优质评价】',
      },
      {
        bgImg:
          'https://cdn.fengjiangdali.com/image/static/394a949e5deba4309afd90e251ed745845696892.jpg',
        desc: '【经营数据】',
      },
    ];
    // 评价
    const Array1 = [
      {
        bgImg:
          'https://cdn.fengjiangdali.com/image/static/404ce39e13cfcd4de31337010e19649e8b76c308.jpg',
        desc: '【爆款商品】',
      },
      {
        bgImg:
          'https://cdn.fengjiangdali.com/image/static/343a1f608388ba40e6624556bfa0e77cf5423697.jpg',
        desc: '【0元拼团】',
      },
    ];
    // 爆款补量
    const Array2 = [
      {
        bgImg:
          'https://cdn.fengjiangdali.com/image/static/b2f622268feaacc6aab7d735c11ae71c87a76f57.jpg',
        desc: '【爆款商品】',
      },
      {
        bgImg:
          'https://cdn.fengjiangdali.com/image/static/dd7a8c8bf23fbecdd8b946fd4474d548b3e5e67d.jpg',
        desc: '【优质评价】',
      },
      {
        bgImg:
          'https://cdn.fengjiangdali.com/image/static/8b929455dc757ea572b98fc601d958746accf44e.jpg',
        desc: '【经营数据】',
      },
    ];
    // 拉升动态评分
    const Array3 = [
      {
        bgImg:
          'https://cdn.fengjiangdali.com/image/static/b5b4b5fad28da831fa2ddfd10ce0b776733211c2.jpg',
        desc: '【爆款商品】',
      },
      {
        bgImg:
          'https://cdn.fengjiangdali.com/image/static/1c75e75d0cfc7bedc9debb79859406dc6d712b68.jpg',
        desc: '【0元拼团】',
      },
      {
        bgImg:
          'https://cdn.fengjiangdali.com/image/static/34bd771c0c66aab00c195f21616273b5060785b4.jpg',
        desc: '【经营数据】',
      },
    ];
    // 大商家起量
    const Array4 = [
      {
        bgImg:
          'https://cdn.fengjiangdali.com/image/static/1eefd8c74e6afc2c0edb90b93aef45370b5a9bca.jpg',
        desc: '【爆款商品】',
      },
    ];
    // 小商家起量
    const Array5 = [
      {
        bgImg:
          'https://cdn.fengjiangdali.com/image/static/0ed38aa08d79e3eff72ddeada552dc74b292a61f.jpg',
        desc: '【爆款商品】',
      },
      {
        bgImg:
          'https://cdn.fengjiangdali.com/image/static/23184f6ece4a427b93ae67916b4e716db2833f28.jpg',
        desc: '【优质评价】',
      },
      {
        bgImg:
          'https://cdn.fengjiangdali.com/image/static/f10a6dde59303eebc588f472809d2458ceb95652.jpg',
        desc: '【订单查询】',
      },
    ];

    let said =
      '大家好，我这边是自主经营百货的店铺，我的目标：店铺所有单品10万+，单品类目排名top10，接触到真多客，主要因为运营态度非常真诚，抱着试试看的心态，做的试用，效果着实是令我惊讶的，评价质量高，晒图的买家秀真的是非常走心，自从接触了真多客，这边的商品补量，补评价就不用太操心了。';
    const said2 =
      '我是拼多多早期入驻的商家，一直在拼多多做牛轧糖生意，早期的时候一直是类目top1的商家，后来被山东的商家超越了，做拼多多越来越艰难，恰巧在朋友的介绍下接触了真多客，一开始我也不是特别相信真多客，所以抱着试一下的态度测试了2各款，真的超出我的期望，2个款做试用各100单，一个评价展示率高达95%，另一个更加高达99%。真多客真的挺靠谱的，综合算下来比其他方式都划算。';
    const said3 =
      '我们已经是一家拼多多的大店，类目top1的商家，去年拼多多开始发展多多进宝，我们作为类目的领头羊顺势也进入了多多进宝，在一个偶然的机会接触到真多客，真多客真的超级棒，都是真人帮我们完成试用，对于我们这样的大店来说，一个被降权可能就损失几千万，所以我们坚决选择最安全的平台合作，选真多客，超靠谱。';
    const said4 =
      '我是19年刚刚进入拼多多的商家，在拼多多卖香水和眼影，短短一周订单就上300单，一开始没注意关注评价和评分，到了第三周开始dsr一路下滑，订单也越来越少，老板特别苦恼，偶然的机会在拼多多招商广场接触到真多客，一开始不信，先放了100单，果然第三天晚上评价陆续开始出来了，后来连续200单放了3天，差不多过了一周，评价全部出来了，店铺dsr就变红了，还被小二邀请上9.9秒杀活动。';
    const said5 =
      '我们是水果行业的专业代运营公司，给拼多多的水果商家代运营已经3年了，今年随着拼多多的战略打法调整，我们也顺势接触到多多进宝和真多客，手上正好有个新的合作商家，在真多客做了一次试用后商品直接起飞了，从0销量不到半个月就破万，真多客的用户质量超级棒，用户评价质量也特别好，起到了事半功倍的效果，做完第一波试用，后面就一直推车维持，控制好roi，不到1个月就实现了盈利。';
    const said6 =
      '我是食品公司的员工，公司今年生产了一个网红款的饮料，看到拼多多这么火自己也想分一杯羹。注册开店上架，想着爆卖，然而现实打脸来得太快，每天都没流量，开车更是毫无用处。找了好多推手给推广，都不理人、还有先收费的骗子，有一天找到了真多客，虽然费用贵一点，看到宣传的效果，咬咬牙先尝试了几天。感觉生活瞬间到达了高潮，从每天0单到小卖100多单再到小爆款、开车的ROI翻天覆地的变化，直奔到4点多。非常感谢真多客给的鼎力支持！！！';
    let nickName = '维***亚';
    const nickName2 = '月***店';
    const nickName3 = '三***店';
    const nickName4 = '韩***店';
    const nickName5 = '鑫***店';
    const nickName6 = '新***店';
    let avater =
      'https://cdn.fengjiangdali.com/image/static/802e02c03aac9203ca223df10778202cdb39261f.jpg';
    const avater2 =
      'https://cdn.fengjiangdali.com/image/static/7b2498884743364357f1a8cf6009ef5b317d2e6b.jpg';
    const avater3 =
      'https://cdn.fengjiangdali.com/image/static/a9f6e13f651222b292a618587cb7ed042051b346.jpg';
    const avater4 =
      'https://cdn.fengjiangdali.com/image/static/b278a419bc73f8dc8c66f62015c5ee9e609b7d6c.jpg';
    const avater5 =
      'https://cdn.fengjiangdali.com/image/static/afbe165f411a1c09e81a3876d2197eb85f70c417.jpg';
    const avater6 =
      'https://cdn.fengjiangdali.com/image/static/1c3bcc50a3c1af401adc47c3fcca3744b8b43afa.jpg';
    const { key } = this.state;
    if (key === '2') {
      array = Array1;
      said = said2;
      nickName = nickName2;
      avater = avater2;
    } else if (key === '3') {
      array = Array2;
      said = said3;
      nickName = nickName3;
      avater = avater3;
    } else if (key === '4') {
      array = Array3;
      said = said4;
      nickName = nickName4;
      avater = avater4;
    } else if (key === '5') {
      array = Array4;
      said = said5;
      nickName = nickName5;
      avater = avater5;
    } else if (key === '6') {
      array = Array5;
      said = said6;
      nickName = nickName6;
      avater = avater6;
    }

    const { modalVisible } = this.state;

    return (
      <div className={styles.marketPromotion}>
        <Nav />

        {/* banner */}
        <div className={styles.bgColor}>
          <div className={styles.mp_banner}>
            <p className={styles.title}>真多客商家推广解决方案</p>
            <p className={styles.subtitle}>全方位一体化推广方案</p>
            <p className={`${styles.subtitle} ${styles.subtitle2}`}>让运营更高效</p>
            <div className={styles.btn} onClick={this.jumpTo.bind(this, '/homePage/index')}>
              立即申请
            </div>
          </div>
        </div>
        {/* content center */}
        <div className={styles.center}>
          <div className={styles.mp_center}>
            <p className={styles.title}>独有特色的商家服务</p>
            <div className={styles.programs}>
              <div className={styles.program}>
                <img
                  src="https://cdn.fengjiangdali.com/image/static/784192c8bffd6e64a7a94671011f39e76f237942.jpg"
                  alt=""
                />
                <span>新品提升综合权重</span>
                <p>优质种草买家秀，提高商品自然转化率；快速提高销量、买家秀数量，提升店铺DSR</p>
              </div>
              <div className={styles.program}>
                <img
                  src="https://cdn.fengjiangdali.com/image/static/98f011eb73b31bff3874f496e8479b94290586aa.jpg"
                  alt=""
                />
                <span>优化权重赋能维护</span>
                <p>快速提高商品的曝光量，快速出量；快速触达分销代理群体，稳定出量</p>
              </div>
              <div className={styles.program}>
                <img
                  src="https://cdn.fengjiangdali.com/image/static/ea1c492a676a9a11db23676622f2071dd37367b5.jpg"
                  alt=""
                />
                <span>单品精准爆款打造</span>
                <p>定时定量增加商品和店铺的收藏数量，优质用户收藏，提高店铺和商品权重和转化率</p>
              </div>
            </div>
          </div>
        </div>

        {/* 商家服务 */}
        <div className={styles.service}>
          <div className={styles.advantage_block}>
            <div className={styles.title}>专业服务优势</div>
            <div className={styles.advantages}>
              <div className={styles.advantage}>
                <p className={styles.desc1}>30000</p>
                <p className={styles.desc2}>可帮您吸粉(人/年)</p>
              </div>
              <div className={styles.advantage}>
                <p className={styles.desc1}>72000</p>
                <p className={styles.desc2}>节省短信费用(元/年)</p>
              </div>
              <div className={styles.advantage}>
                <p className={styles.desc1}>144000</p>
                <p className={styles.desc2}>引入老客流量(UV/年)</p>
              </div>
              <div className={styles.advantage}>
                <p className={styles.desc1}>720000</p>
                <p className={styles.desc2}>老客成交额增加(元/年)</p>
              </div>
            </div>
          </div>
          <div className={styles.bus}>
            <img
              src="https://cdn.fengjiangdali.com/image/static/a6a56fbeef8ac71e30480b855d3d88ab6807f140.jpg"
              alt=""
            />
          </div>
        </div>

        {/* 代理商家 */}
        <div className={styles.case_block}>
          <div className={styles.title}>累计给他们带来 100万+ 的收益</div>
          <div className={styles.earn}>
            <div className={styles.left_menu}>
              <Menu
                mode="inline"
                onClick={this.handleClick}
                defaultSelectedKeys={['1']}
                style={{ width: 200, textAlign: 'left', border: 'none' }}
              >
                <Menu.Item key="1">爆款补量，高质量评价</Menu.Item>
                <Menu.Item key="2">评价展示率高</Menu.Item>
                <Menu.Item key="3">爆款补量</Menu.Item>
                <Menu.Item key="4">拉升动态评分</Menu.Item>
                <Menu.Item key="5">大商家起量</Menu.Item>
                <Menu.Item key="6">小商家起量</Menu.Item>
              </Menu>
            </div>
            <div className={styles.rightContent}>
              <div className={styles.busMessage}>
                <img className={styles.avater} alt="" src={avater} />
                <p className={styles.nick_name}>{nickName}</p>
                <p className={styles.describe}>{said}</p>
              </div>
              <div className={styles.examples}>
                {array.map(val => {
                  return (
                    <div
                      className={styles.example}
                      key={val.desc}
                      onClick={this.setModal1Visible.bind(this, val)}
                    >
                      <img mode="center" alt="" src={val.bgImg} className={styles.bgImg} />
                      <div className={styles.mode}>{val.desc}</div>
                    </div>
                  );
                })}
                <Modal
                  visible={modalVisible}
                  footer={null}
                  maskClosable={1}
                  onCancel={this.Closable}
                  width="90%"
                  style={{ textAlign: 'center' }}
                  // bodyStyle={{background:'transparent',boxShadow:'0 0 0 0',width: 'auto',color:'#fff'}}
                >
                  <Carousel
                    // autoplay
                    dots={false}
                    ref={el => {
                      this.slider = el;
                    }}
                    bodyStyle={{ backgroundColor: '#F6F7F8' }}
                  >
                    {array.map(val => {
                      return (
                        <div className={styles.models} key={val.bgImg}>
                          <a href={val.bgImg} target="_Blank" rel="noopener noreferrer">
                            <img src={val.bgImg} alt="" className={styles.hp_img} />
                          </a>
                        </div>
                      );
                    })}
                  </Carousel>
                  <div>
                    <Icon type="left" style={{ color: '#fff' }} onClick={this.prev} />
                    <Icon type="right" style={{ color: '#fff' }} onClick={this.next} />
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default MarketPromotion;
