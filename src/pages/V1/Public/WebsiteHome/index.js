import React, { Component, Fragment } from 'react';
import { Carousel } from 'antd';
import { connect } from 'dva';
import router from 'umi/router';
import styles from './index.less';
import { getStorage } from '@/utils/authority';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

@connect(({ user }) => ({
  currentUser: user.currentUser,
}))
class index extends Component {
  state = {};

  toGo = path => {
    router.push(path);
  };

  next = () => {
    this.setRef.slick.slickNext();
  };

  prev = () => {
    this.setRef.slick.slickPrev();
  };

  setRef = ref => {
    this.setRef = ref;
  };

  jumpTo = url => {
    const { currentUser } = this.props;
    if (getStorage('token') && getStorage('token') !== '' && currentUser.state === 0) {
      router.push('/user/settlein');
    } else if (getStorage('token') && getStorage('token') !== '' && currentUser.state === 1) {
      router.push(url);
    } else {
      router.push('/user/login');
    }
  };

  render() {
    const bannersSetting = {
      dots: true,
      lazyLoad: true,
      autoplay: true,
      autoplaySpeed: 5000, // 轮播间隔时长
      speed: 1000, // 切换速度
    };

    const Banner = () => (
      <Fragment>
        <Carousel {...bannersSetting} ref={this.setRef}>
          <div className={styles.content0}>
            <div className={styles.mask} />
            <div className={styles.con}>
              <p className={styles.p1}>一站式电商推广，精准引流</p>
              <p className={styles.p2}>持续引爆流量 / 稳定提升销量 / 轻松打造爆款</p>
              <p className={styles.p2}>10年电商经验，超10万商家，500万日活用户</p>
              <div className={styles.btn} onClick={this.jumpTo.bind(this, '/homepage')}>
                立即体验
              </div>
            </div>
          </div>
        </Carousel>
        {/* banner 悬浮按钮 */}
        {/* <div className={styles.icon_block}>
          <Icon type="left" className={`${styles.icon} ${styles.icon_prev}`} onClick={this.prev} />
          <Icon type="right" className={`${styles.icon} ${styles.icon_next}`} onClick={this.next} />
        </div> */}
      </Fragment>
    );

    const advList = [
      {
        other: '求快不求效果，存在安全隐患',
        img: 'https://cdn.youlianyc.com/image/static/da14265c920eb2b3ee582e04c40e4aa2e6422b93.jpg',
        cdk:
          '全链路优化设计，优质种草买家秀，提高商品自然转化率快速提高销量、买家秀数量，提升店铺DSR',
      },
      {
        other: '只关心销量，没有运营策略不懂得各大平台获取自然流量的运营规则',
        img: 'https://cdn.youlianyc.com/image/static/b92fd6426c47ac096d215867d9b6e282590fadf1.jpg',
        cdk: '定时定量增加商品和店铺的收藏数量，优质用户收藏，提高店铺和商品权重和转化率',
      },
      {
        other: '有没有转化完全靠运气，没有有趣的的营销玩法促进转化',
        img: 'https://cdn.youlianyc.com/image/static/b6bf63e16c66da5a77e186d667c717ed0c875bec.jpg',
        cdk: '快速提高商品的曝光量，快速出量快速触达分销代理群体，稳定出量',
      },
      {
        other: '用户质量打疑问号',
        img: 'https://cdn.youlianyc.com/image/static/cda3ffbd7e32bc3ec28fa0405ef3107b313a0431.jpg',
        cdk: '聚合多方资源，打造小程序矩阵覆盖全年龄层用户，层层筛选',
      },
    ];

    const planList = [
      {
        img: 'https://cdn.youlianyc.com/image/static/4ecd3248b68a4cf3be23c73832b01d9ad94482e7.jpg',
        title: '全网用户价值体系',
        desc: '积累了海量用户信息；建立了全方位的人群画像；根据客户自定义精准匹配。',
        last_desc: '了您吸粉之难',
      },
      {
        img: 'https://cdn.youlianyc.com/image/static/db4c789badd9c06cae3493a5678fc32e05623894.jpg',
        title: '独家ADS互动广告系统',
        desc:
          '通过全链路推广打造，多种运营实施手段，实现目标人群精准引流，有效提升店铺流量和投入产出比，确保运营效果，增加店铺收益。',
        last_desc: '解您推广之痛',
      },
      {
        img: 'https://cdn.youlianyc.com/image/static/378180a7ee736fad21f507c26c48ebe3af50d3de.jpg',
        title: '完善的DMP大数据分析',
        desc:
          'PDB程序化直接购买；分析粉丝画像，精细化控制转化用户质量；严格控制用户购买流程，确保万无一失。',
        last_desc: '安您后顾之忧',
      },
      {
        img: 'https://cdn.youlianyc.com/image/static/378b1248f835883b107c0698bc8d42461ef8969d.jpg',
        title: '流量主小程序矩阵',
        desc: '上万小程序整合，聚合1亿流量,相互导流推广，助您打造爆款。',
        last_desc: '助您成销量之王',
      },
    ];

    const users = [
      {
        name: '维***亚',
        cata: '家具百货',
        label: '爆款补量',
        desc:
          '大家好，我这边是自主经营百货的店铺，我的目标：店铺所有单品10万+，单品类目排名top10，接触到真多客，主要因为运营态度非常真诚，抱着试试看的心态，做的试用，效果着实是令我惊讶的，评价质量高，晒图的买家秀真的是非常走心，自从接触了真多客，这边的商品补量，补评价就不用太操心了。',
      },
      {
        name: '月***店',
        cata: '食品',
        label: '评价展示率高',
        desc:
          '我是拼多多早期入驻的商家，一直在拼多多做牛轧糖生意，早期的时候一直是类目top1的商家，后来被山东的商家超越了，做拼多多越来越艰难，恰巧在朋友的介绍下接触了真多客，一开始我也不是特别相信真多客，所以抱着试一下的态度测试了2各款，真的超出我的期望，2个款做试用各100单，一个评价展示率高达95%，另一个更加高达99%。真多客真的挺靠谱的，综合算下来比其他方式都划算。',
      },
      {
        name: '三***店',
        cata: '食品',
        label: '爆款补量',
        desc:
          '我们已经是一家拼多多的大店，类目top1的商家，去年拼多多开始发展多多进宝，我们作为类目的领头羊顺势也进入了多多进宝，在一个偶然的机会接触到真多客，真多客真的超级棒，都是真人帮我们完成试用，对于我们这样的大店来说，一个被降权可能就损失几千万，所以我们坚决选择最安全的平台合作，选真多客，超靠谱。',
      },
      {
        name: '韩***店',
        cata: '美妆',
        label: '拉升动态评分案例',
        desc:
          '我是19年刚刚进入拼多多的商家，在拼多多卖香水和眼影，短短一周订单就上300单，一开始没注意关注评价和评分，到了第三周开始dsr一路下滑，订单也越来越少，老板特别苦恼，偶然的机会在拼多多招商广场接触到真多客，一开始不信，先放了100单，果然第三天晚上评价陆续开始出来了，后来连续200单放了3天，差不多过了一周，评价全部出来了，店铺dsr就变红了，还被小二邀请上9.9秒杀活动。',
      },
      {
        name: '鑫***鲜',
        cata: '生鲜',
        label: '水果行业真多客案例',
        desc:
          '我们是水果行业的专业代运营公司，给拼多多的水果商家代运营已经3年了，今年随着拼多多的战略打法调整，我们也顺势接触到多多进宝和真多客，手上正好有个新的合作商家，在真多客做了一次试用后商品直接起飞了，从0销量不到半个月就破万，真多客的用户质量超级棒，用户评价质量也特别好，起到了事半功倍的效果，做完第一波试用，后面就一直推车维持，控制好roi，不到1个月就实现了盈利。',
      },
      {
        name: '新***品',
        cata: '食品',
        label: '小爆款可乐案例',
        desc:
          '我是食品公司的员工，公司今年生产了一个网红款的饮料，看到拼多多这么火自己也想分一杯羹。注册开店上架，想着爆卖，然而现实打脸来得太快，每天都没流量，开车更是毫无用处。找了好多推手给推广，都不理人、还有先收费的骗子，有一天找到了真多客，虽然费用贵一点，看到宣传的效果，咬咬牙先尝试了几天。感觉生活瞬间到达了高潮，从每天0单到小卖100多单再到小爆款、开车的ROI翻天覆地的变化，直奔到4点多。非常感谢真多客给的鼎力支持！！！',
      },
    ];

    const partner = [
      {
        img: 'https://cdn.youlianyc.com/image/static/a8a7244979a4b3fb99671b45e604d0226e448236.jpg',
        name: '阿里巴巴',
      },
      {
        img: 'https://cdn.youlianyc.com/image/static/56caead729c707b9c74c2ba7129b49706f4b865e.jpg',
        name: '拼多多',
      },
      {
        img: 'https://cdn.youlianyc.com/image/static/3ddd8a4a0f597714437a8c8f5f970da72c23232f.jpg',
        name: '京东',
      },
      {
        img: 'https://cdn.youlianyc.com/image/static/5fdf26175e7f05f37a3bf6601eabc11be197e11f.jpg',
        name: '淘宝',
      }
    ];

    return (
      <div className={styles.main}>
        <Nav />

        {/* banner */}
        <div className={styles.banners}>
          <Banner />
        </div>

        {/* content 1 */}
        <div className={styles.con_block}>
          <p className={styles.title}>眼看他人红红火火，您还在苦恼这些问题吗</p>
          <img
            className={styles.con_img}
            src="https://cdn.youlianyc.com/image/static/65ffab0d975604dcc352b214b4218632a3de99e0.jpg"
            alt=""
          />
          <div>
            <div className={styles.btn_long}>入驻真多客，这些都不是问题</div>
          </div>
        </div>

        {/* content 2 */}
        <div className={`${styles.con_block} ${styles.con_block_bg}`}>
          <div className={styles.mask} />
          <p className={styles.title}>真多客为您提供一站式电商推广解决方案</p>
          <div className={styles.plan_block}>
            {planList.map(e => (
              <div className={styles.plan_item} key={e.title}>
                <img className={styles.img_icon} src={e.img} alt="" />
                <p className={styles.tit}>{e.title}</p>
                <p className={styles.desc}>{e.desc}</p>
                <p className={styles.last_desc}>
                  <span className={styles.line_bg} />
                  {e.last_desc}
                </p>
              </div>
            ))}
          </div>
          <div>
            <div className={styles.btn_long}>推广交给我们，您会得到意想不到的效果</div>
          </div>
        </div>

        {/* content 3 */}
        <div className={`${styles.con_block}`}>
          <div className={styles.mask} />
          <p className={styles.title}>真多客的优势是什么</p>
          <div className={styles.adv_block}>
            <div className={styles.adv_item}>
              <div className={`${styles.other} ${styles.tit}`}>其他传统平台</div>
              <div className={`${styles.c_icon} ${styles.tit}`}>VS</div>
              <div className={`${styles.cdk} ${styles.tit}`}>真多客</div>
            </div>
            {advList.map(e => (
              <div className={`${styles.adv_item} ${styles.detail}`} key={e.other}>
                <div className={`${styles.other}`}>{e.other}</div>
                <img className={`${styles.c_icon}`} src={e.img} alt="" />
                <div className={`${styles.cdk}`}>{e.cdk}</div>
              </div>
            ))}
          </div>
        </div>

        {/* content 4 */}
        <div className={`${styles.con_block} ${styles.con_block_bg2}`}>
          <div className={styles.mask} />
          <p className={styles.title}>还无法满足您的店铺？我们还有</p>
          <img
            className={styles.con_img}
            src="https://cdn.youlianyc.com/image/static/8eb7a4a41a42dc8f65c233f03a35cd9cf074f2d6.jpg"
            alt=""
          />
          <div>
            <div className={styles.btn_long}>不为便宜买单，只为效果付费</div>
          </div>
        </div>

        {/* content 5 */}
        <div className={`${styles.con_block} ${styles.con_block_bg3}`}>
          <p className={styles.title}>他们都在用真多客</p>
          <p className={styles.tit_above}>涵盖高复购、高单价、快消品、家装、服饰等各个领域类目</p>
          <div className={styles.users_block}>
            {users.map(e => (
              <div className={styles.user_item} key={e.name}>
                {/**
                 * <div className={styles.user_img}>{e.img}</div>
                 */}
                <div className={styles.user_name}>{e.name}</div>
                <div className={styles.user_desc}>经营类目：{e.cata}</div>
                <div className={styles.user_labels}>
                  <div className={styles.user_label}>{e.label}</div>
                </div>
                <div className={styles.desc}>{e.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* content 6 */}
        <div className={`${styles.con_block} ${styles.con_block_bg4}`}>
          <div className={styles.mask} />
          <p className={styles.title}>合作伙伴</p>
          <div className={styles.partner_block}>
            {partner.map(e => (
              <div className={styles.partner_item} key={e.img}>
                <img src={e.img} className={styles.p_img} alt="" />
                <div className={styles.p_name}>{e.name}</div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default index;
