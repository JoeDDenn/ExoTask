import React from 'react';
import AddHeading from './AddButtons/AddHeading';
import AddParagraph from './AddButtons/AddParagraph';
import Addimg from './AddButtons/AddImg';
import './AddComp.css';

// create a window with a menu list of components to add to the workspace

class SelectMenuWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      isLoading: false,
      workspace: null,
      block: null,
    };
  }

  toggleWindow = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen, isLoading } = this.state;

    return (
      <div className="Select-window">
        {isOpen && (
          <div className="ComponentList">
            <div className="ComponentList-item">
              <AddHeading />
              <AddParagraph />
              <Addimg />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SelectMenuWindow;