import React, { Component } from "react";
import { ContextMenu } from "react-contextmenu";
import { Menu } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export class ItemContextMenu extends Component {
  handleClick(e) {
    console.log("click", e);
  }
  render() {
    return (
      <ContextMenu id="same_unique_identifier">
        <Menu
          onClick={this.handleClick}
          style={{ width: 256, border: "0.5px solid gray" }}
          mode="vertical"
        >
          <Menu.Item
            key="1"
            icon={<EditOutlined />}
            style={{ width: 256, borderBottom: "0.5px solid gray" }}
          >
            Edit
          </Menu.Item>
          <Menu.Item key="2" icon={<DeleteOutlined />} style={{ color: "red" }}>
            Delete
          </Menu.Item>
        </Menu>
      </ContextMenu>
    );
  }
}

export default ItemContextMenu;
