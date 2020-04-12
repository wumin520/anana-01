import React, { Component, Fragment } from 'react';
import styles from './flow.less';

import Nav from './components/Nav';
import Footer from './components/Footer';

class index extends Component {
  state = {
    hoverIndex: 0,
  };

  toggleHover = i => {
    this.setState({
      hoverIndex: i || 0,
    });
  };

  render() {
    const { hoverIndex } = this.state;

    const Banner = () => (
      <Fragment>
        <div className={styles.content0}>
          <div className={styles.mask} />
          <div className={styles.con}>
            <p className={styles.p1}>真多客流量变现</p>
            <p className={styles.p2}>基于ADS互动广告系统，聚合流量，可持续变现</p>
            <div className={styles.qr_block}>
              <img
                className={styles.qr_img}
                src="https://cdn.fengjiangdali.com/image/static/cb6b6bed18ad4927069076a53362aec6008c53ca.jpg"
                alt=""
              />
              <div className={styles.qr_right}>
                <div className={styles.word_1}>请使用手机预览</div>
                <div className={styles.word_2}>查看手机演示</div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );

    const skinList = [
      {
        img: 'https://cdn.fengjiangdali.com/image/static/6ee4a5db46ae9679d330f85a76b05449a5dd069f.jpg',
        desc1: '每套商城模板都精心设计',
        desc2: '满足您的挑剔审美',
      },
      {
        img: 'https://cdn.fengjiangdali.com/image/static/971863daa9b50bc0306eeef50021e6262410d1de.jpg',
        desc1: '模板匹配多套精美主题',
        desc2: '呈现极致视觉体验',
      },
      {
        img: 'https://cdn.fengjiangdali.com/image/static/648519cb2a779f3cdd3e1552e8e5f939fe59cdcc.jpg',
        desc1: '大淘客多年导购经验沉淀',
        desc2: '大师级专业导购栏目',
      },
    ];

    const planList = [
      {
        img: 'https://cdn.fengjiangdali.com/image/static/47831826796c237d8005de3b02becb924a835ecf.jpg',
        title: '0开发',
        desc: '无需开发，无需懂技术，即可拥有自己的小程序',
      },
      {
        img: 'https://cdn.fengjiangdali.com/image/static/da1a3cb80204ae82c4095537a24120fbb69831cc.jpg',
        title: '用户增长引擎',
        desc: '低成本、高效率的粉丝裂变',
      },
      {
        img: 'https://cdn.fengjiangdali.com/image/static/0f14d9200b6eba2642fb34048bfdbfcab6cb24c7.jpg',
        title: 'ADS互动广告系统',
        desc: 'P分析粉丝画像，实现精准唤醒',
      },
      {
        img: 'https://cdn.fengjiangdali.com/image/static/b5f0743fb5fa66bd74c249f5cfec732abf2e1a35.jpg',
        title: '高佣分成',
        desc: '60%~100%的高额广告分成',
      },
    ];

    const capList = [
      {
        img: 'https://cdn.fengjiangdali.com/image/static/a612f6286c0d4e123d46ec1a28dc5fedafedab6c.jpg',
        title: '【红包墙】每天都有红包拿',
      },
      {
        img: 'https://cdn.fengjiangdali.com/image/static/ab920bd5e2967f074dc4fd18cf242de0e4056815.jpg',
        title: '【步数免费换】走的多换的多',
      },
      {
        img: 'https://cdn.fengjiangdali.com/image/static/63e9920bf1d7c33ae9032b0e514ca1e434905263.jpg',
        title: '【一起瓜分金币】组队瓜分好礼',
      },
      {
        img: 'https://cdn.fengjiangdali.com/image/static/0c670e2ea18f93fbabf0643504ca35eaaac5fbda.jpg',
        title: '【0元助力】助力免费拿',
      },
      {
        img: 'https://cdn.fengjiangdali.com/image/static/53277f8623bc7dc7aab96afe7bd2ae27c1c53a4e.jpg',
        title: '【9.9包邮】全网最低价',
      },
    ];

    const avatarList = [
      {
        avatar:
          'https://cdn.fengjiangdali.com/image/static/6c9333045f11da1a91886702a91f5c178d86053b.jpg',
      },
      {
        avatar:
          'https://cdn.fengjiangdali.com/image/static/7f8dc0d5d5fcdd1212d204fd3ca417cf0be28586.jpg',
      },
      {
        avatar:
          'https://cdn.fengjiangdali.com/image/static/6ddadebcff35c6e5fe5818aa4e109ee3f913ef83.jpg',
      },
      {
        avatar:
          'https://cdn.fengjiangdali.com/image/static/c21dc10b3a3fdbb47a1e26096d8d7c9883c30087.jpg',
      },
      {
        avatar:
          'https://cdn.fengjiangdali.com/image/static/d094202cedfc312effb9dc0edfb14505916854ad.jpg',
      },
      {
        avatar:
          'https://cdn.fengjiangdali.com/image/static/f867c194d7ac214e5aee280fd6eb8b3a7279a676.jpg',
      },
      {
        avatar:
          'https://cdn.fengjiangdali.com/image/static/359580d60ce9f9aaaa875682859808ebfa1ccc7e.jpg',
      },
      {
        avatar:
          'https://cdn.fengjiangdali.com/image/static/60cb88ff238890b5ff6f8258acf62df6066e5c01.jpg',
      },
      {
        avatar:
          'https://cdn.fengjiangdali.com/image/static/942c325ef130519ef736a20ab89c9a31642dae60.jpg',
      },
    ];

    return (
      <div className={styles.main}>
        <Nav />

        {/* banner */}
        <div className={styles.banners}>
          <Banner />
        </div>

        {/* content */}
        <div className={`${styles.con_block} ${styles.con_block_bg}`}>
          <div className={styles.mask} />
          <p className={styles.title}>深耕产品运营，为流量变现创造更多可能</p>
          <div className={styles.plan_block}>
            {planList.map(e => (
              <div className={styles.plan_item} key={e.title}>
                <img className={styles.img_icon} src={e.img} alt="" />
                <p className={styles.tit}>{e.title}</p>
                <p className={styles.desc}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* content */}
        <div className={styles.con_block} style={{ background: 'rgba(230,247,255,.24)' }}>
          <p className={styles.title}>好用！丰富的营销玩法任意搭</p>
          <div className={styles.cap_block}>
            <img className={styles.cap_img} src={capList[hoverIndex].img} alt="" />
            <ul style={{ marginTop: '80px' }}>
              {capList.map((e, i) => (
                <li
                  className={styles.cap_item_title}
                  key={e.title}
                  onMouseEnter={this.toggleHover.bind(this, i)}
                >
                  {e.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* content */}
        <div className={styles.con_block}>
          <p className={styles.title}>精致！多样的炫彩皮肤随心换</p>
          <div className={styles.skin_block}>
            {skinList.map(e => (
              <div className={styles.skin_item} key={e.img}>
                <img className={styles.img_skin} src={e.img} alt="" />
                <div className={styles.desc}>{e.desc1}</div>
                <div className={styles.desc}>{e.desc2}</div>
              </div>
            ))}
          </div>
        </div>

        {/* content 6 */}
        <div className={`${styles.con_block} ${styles.con_block_bg4}`}>
          <div className={styles.mask} />
          <p className={styles.title}>他们正在变现，期待你的加入</p>
          <div className={styles.avatar_block}>
            {avatarList.map(e => (
              <img className={styles.avatar} src={e.avatar} alt="" key={e.avatar} />
            ))}
          </div>
        </div>

        {/* content */}
        <div className={styles.con_block} style={{ marginBottom: '120px' }}>
          <p className={styles.title}>简单几步，即可开始变现</p>
          <img
            className={styles.con_img}
            src="https://cdn.fengjiangdali.com/image/static/7e9b9676848e050989bdcf41e77b6adef46dfb3f.jpg"
            alt=""
          />
        </div>

        <Footer />
      </div>
    );
  }
}

export default index;
