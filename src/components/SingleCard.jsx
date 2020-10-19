import React, { Component } from "react";
import { Card, Avatar } from "antd";
import { ContextMenu, ContextMenuTrigger } from "react-contextmenu";
import { connect } from "react-redux";
import { OpenContextMenuOfItem } from "../store/actions";
const { Meta } = Card;

export class SingleCard extends Component {
  handleCardClickRedirect = (link) => {
    window.location = link;
  };
  handleContextMenuClick = (id) => {
    // console.log(id);
    this.props.OpenContextMenuOfItem(id);
  };
  render() {
    const { name, url, icon } = this.props.data;
    const { id } = this.props;
    return (
      <ContextMenuTrigger id="same_unique_identifier">
        <Card
          style={{ width: 300, marginTop: 16 }}
          hoverable
          onClick={(e) => this.handleCardClickRedirect(url)}
          onContextMenu={() => this.handleContextMenuClick(id)}
        >
          <Meta avatar={<Avatar src={icon} />} title={name} />
        </Card>
      </ContextMenuTrigger>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    OpenContextMenuOfItem: (e) => dispatch(OpenContextMenuOfItem(e)),
  };
}

export default connect(null, mapDispatchToProps)(SingleCard);
