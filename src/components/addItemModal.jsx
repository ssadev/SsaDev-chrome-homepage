import React, { Component } from "react";
import { Form, Input, Modal, Button } from "antd";
import { connect } from "react-redux";
import { ToggleAddItemModal } from "../store/actions";

class AddItemModal extends Component {
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    // console.log(e);
    this.props.ToggleAddItemModal();
  };

  handleCancel = (e) => {
    // console.log(e);
    this.props.ToggleAddItemModal();
  };
  // componentDidUpdate(prevProps) {
  //   if (prevProps.visible !== this.props.visible) {
  //     // console.log("update", this.props.visible);
  //     let { visible } = this.props;
  //     this.setState({ visible: visible });
  //   }
  // }
  onFinish = (values) => {
    console.log("Success:", values);
  };
  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  render() {
    // const layout = {
    //   labelCol: {
    //     span: 8,
    //   },
    //   wrapperCol: {
    //     span: 16,
    //   },
    // };
    // const tailLayout = {
    //   wrapperCol: {
    //     offset: 8,
    //     span: 16,
    //   },
    // };

    return (
      <>
        <Modal
          title="Add Item"
          visible={this.props.modelVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form
            // {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="Site"
              name="site"
              rules={[
                {
                  required: true,
                  message: "Please input Site Name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="URL"
              name="url"
              rules={[
                {
                  required: true,
                  message: "Please input Site URL!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Icon"
              name="icon"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" shape="round" block>
                Add
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
}

function mapStateToProps(state) {
  let { modelVisible } = state;
  return {
    modelVisible,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ToggleAddItemModal: () => dispatch(ToggleAddItemModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItemModal);
