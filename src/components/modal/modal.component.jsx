import React from "react";
import "./modal.styles.scss";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    if (this.props.show) {
      return (
        <div className="modal">
          <div className="modal__content">Modal</div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Modal;
