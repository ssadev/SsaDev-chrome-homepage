import React, { Component } from "react";
import { Card, Col, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AddItemModal from "./addItemModal";
import { connect } from "react-redux";
import { ToggleAddItemModal } from "../store/actions";
// import fire from "../fire";

export class AddNewSite extends Component {
  state = {
    addItemModalVisible: false,
    size: "small",
    addItemLink: "https://github.com/ssadev/myjsondbs/edit/master/ssdev.json",
  };

  addItems = () => {
    const { addItemLink } = this.state;
    window.open(addItemLink, "_blank");
  };

  showModal = () => {
    this.props.ToggleAddItemModal();
  };

  render() {
    const { size } = this.state;
    return (
      <Col span={4}>
        <Card style={{ width: 300, marginTop: 16 }} hoverable>
          <Button
            type="default"
            shape="circle"
            align="center"
            icon={<PlusOutlined />}
            size={size}
            style={{ marginLeft: "40%" }}
            // onClick={this.addItems}
            onClick={this.showModal}
          />
        </Card>
        <AddItemModal />
      </Col>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddNewSite);
