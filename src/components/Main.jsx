import React from "react";
import { Layout, Col, Row, Input } from "antd";
import { GoogleOutlined, SecurityScanOutlined } from "@ant-design/icons";
import axios from "axios";

import SingleCard from "./SingleCard";
import "../App.css";
import AddNewSite from "./AddNewSite";
import ItemContextMenu from "./ItemContextMenu";

const { Search } = Input;
const { Content } = Layout;

export default class Main extends React.Component {
  state = {
    loading: false,
    collapsed: true,
    size: "large",
    items: [],
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  SearchOnGoogle = (q) => {
    let url = "https://duckduckgo.com/?q=" + q;
    window.location = url;
  };
  componentDidMount = () => {
    let items = localStorage.getItem('items')
    items = JSON.parse(items)
    console.log(items)
    this.setState({ items: items });
    // console.log("object");
    const options = {
      method: "GET",
      url: "https://ssadev.github.io/myjsondbs/ssdev.json",
      headers: {},
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        const { data } = response;
        this.setState({ items: data });
        localStorage.setItem("items", JSON.stringify(data));
      })
      .catch((error) => {
        // console.log(error);
        let data = localStorage.getItem("items");
        data = JSON.parse(data);
        this.setState({ items: data });
        console.log(data);
      });
  };
  render() {
    const { items } = this.state;

    return (
      <Layout className="site-layout bg-trans" style={{ background: "pink" }}>
        <Content
          className="site-layout-background bg-trans"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 900,
            background: "transparent",
          }}
        >
          <Content
            className="site-layout-background bg-trans"
            style={{
              width: "50%",
              margin: "24px 25%",
              padding: 24,
              minHeight: 100,
            }}
          >
            <Search
              placeholder="Search On Google"
              prefix={<SecurityScanOutlined className="site-form-item-icon" />}
              onSearch={(value) => this.SearchOnGoogle(value)}
              size="large"
              enterButton
            />
          </Content>
          <div className="site-card-wrapper">
            <Row gutter={16}>
              {items.map((data, index) => (
                <Col span={4} key={index}>
                  <SingleCard data={data} id={index} />
                </Col>
              ))}
              <AddNewSite />
            </Row>
          </div>
        </Content>

        <ItemContextMenu />
      </Layout>
    );
  }
}
