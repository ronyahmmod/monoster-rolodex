import React from "react";
import CustomButton from "../custom-button/custom-button.component";
// import Modal from "../modal/modal.component";
import "./card-item.styles.scss";

class CardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <div className="card-item">
        <div className="card-item__side card-item__side--front">
          <div className="card-item__content">
            <h4 className="card-item__header">{this.props.name}</h4>
            <img
              className="card-item__image"
              src={`https://robohash.org/${this.props.id}?set=set2`}
              alt={`robo-${this.props.id}`}
            />
          </div>
        </div>
        <div className="card-item__side card-item__side--back">
          <div className="card-item__details">
            <ul>
              <li>{this.props.username}</li>
              <li>{this.props.email}</li>
              <li>{this.props.address.street}</li>
              <li>{this.props.address.city}</li>
              <li>{this.props.address.zipcode}</li>
            </ul>

            <CustomButton
              value="Full details"
              onClick={() => this.setState({ show: true })}
            />
            {/* <Modal show={this.state.show} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default CardItem;
