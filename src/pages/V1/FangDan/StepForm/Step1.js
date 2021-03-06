import React, { Fragment } from 'react';
import { connect } from 'dva';
import { Form, Input, Button } from 'antd';
import styles from './style.less';

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};

@connect(({ form, loading, user }) => ({
  currentUser: user.currentUser,
  data: form.step,
  pddGoodUrl: form.pddGoodUrl,
  pddZSId: form.pddZSId,
  submitting: loading.effects['form/queryGoodsDetail'],
}))
@Form.create()
class Step1 extends React.PureComponent {
  state = {
    isQf: false,
  };

  fetchPddGoodsDetail = values => {
    const { dispatch, location } = this.props;
    const params = values;
    if (location.query.qf !== undefined) {
      params.qf = location.query.qf;
      if (location.query.qf === '1') {
        params.type = 1;
      }
    }
    if (location.query.deq !== undefined) {
      params.deq = 1;
    }
    console.log('values -> 1', params);
    dispatch({
      type: 'form/queryGoodsDetail',
      payload: params,
    });
  };

  componentDidMount = () => {
    const { location } = this.props;
    // 身份为招商--->圈粉推广不显示招商团长id input框
    if (location.query.qf !== undefined) {
      this.setState({
        isQf: true,
      });
    }
  };

  render() {
    const { form, pddGoodUrl, submitting, dispatch, pddZSId, currentUser, location } = this.props;
    const { isQf } = this.state;
    const { getFieldDecorator, validateFields } = form;
    const onValidateForm = () => {
      validateFields((err, values) => {
        if (!err) {
          this.fetchPddGoodsDetail(values);
          // 新增时reset state
          dispatch({
            type: 'form/updateState',
            payload: {
              category_id: '',
              taskId: '',
              schedules: [],
              startTime: '',
              endTime: '',
            },
          });
        }
      });
    };
    return (
      <Fragment>
        <Form
          layout="horizontal"
          style={{ marginTop: '140px' }}
          className={styles.stepForm}
          hideRequiredMark
        >
          {location.query.qf !== '1' ? (
            <Form.Item {...formItemLayout} label="拼多多商品链接">
              {getFieldDecorator('goods_id', {
                initialValue: pddGoodUrl,
                rules: [{ required: true, message: '请粘贴商品链接进行校验' }],
              })(<Input placeholder="请粘贴商品链接进行校验" />)}
            </Form.Item>
          ) : (
            <Form.Item {...formItemLayout} label="拼多多店铺编号：">
              {getFieldDecorator('goods_id', {
                initialValue: currentUser.shop_code,
                rules: [{ required: true, message: '请粘贴拼多多店铺编号' }],
              })(<Input placeholder="请粘贴拼多多店铺编号" />)}
            </Form.Item>
          )}
          {/** sh_type=0商家1招商 */}
          {currentUser.sh_type === 1 && !isQf ? (
            <Form.Item {...formItemLayout} label="招商团长id">
              {getFieldDecorator('zs_duo_id', {
                initialValue: pddZSId,
              })(<Input placeholder="选填" />)}
            </Form.Item>
          ) : (
            ''
          )}
          <Form.Item
            wrapperCol={{
              xs: { span: 24, offset: 0 },
              sm: {
                span: formItemLayout.wrapperCol.span,
                offset: formItemLayout.labelCol.span,
              },
            }}
            label=""
          >
            <Button loading={submitting} type="primary" size="large" onClick={onValidateForm}>
              开始校验
            </Button>
          </Form.Item>
        </Form>
        {/* <Divider style={{ margin: '140px 0 24px' }} /> */}
        {/* <div className={styles.desc}>
          <h3>说明</h3>
          <h4>转账到支付宝账户</h4>
          <p>
            如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
          </p>
          <h4>转账到银行卡</h4>
          <p>
            如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
          </p>
        </div> */}
      </Fragment>
    );
  }
}

export default Step1;
