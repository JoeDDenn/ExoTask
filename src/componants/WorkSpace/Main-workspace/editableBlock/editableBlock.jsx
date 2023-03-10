import ContentEditable from "react-contenteditable";
import React from "react";
import "./editableBlock.css";
import SelectMenu from "../selectMenu/SelectMenu";
import { getOffset } from 'caret-pos';


function setCaretToEnd(element) {
  const range = document.createRange();
  const selection = window.getSelection();
  range.selectNodeContents(element);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
  element.focus();
}
class EditableBlock extends React.Component {
  constructor(props) {
    super(props);
    // ...
    this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
    this.openSelectMenuHandler = this.openSelectMenuHandler.bind(this);
    this.closeSelectMenuHandler = this.closeSelectMenuHandler.bind(this);
    this.tagSelectionHandler = this.tagSelectionHandler.bind(this);
    this.onKeyDownHandler = this.onKeyDownHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.contentEditable = React.createRef();
    this.state = {
      htmlBackup: null,
      html: "",
      tag: "p",
      previousKey: "",
      selectMenuIsOpen: false,
      selectMenuPosition: {
        x: 0,
        y: 0
      }
    };
  }

  onChangeHandler(e) {
    this.setState({ html: e.target.value });
  }
      onKeyUpHandler(e) {
        this.setState({ html: e.target.value });
      }

      onKeyUpHandler(e) {
        // console.log("onKeyUpHandler called with event", e);
        if (e.key === "/") {
          console.log("You pressed the '/' key!");
          this.setState({ selectMenuIsOpen: true, x, y });
        }
      }
      openSelectMenuHandler() {
        const el = this.contentEditable.current;
        const { top, left } = getOffset(el);
        if (isNaN(top)) {
          return;
        }
        this.setState({
          selectMenuIsOpen: true,
          selectMenuPosition: { x: left, y: top },
        });
        document.addEventListener('click', this.closeSelectMenuHandler);
      }
      closeSelectMenuHandler() {
        console.log("closeSelectMenuHandler called");
        this.setState({
          htmlBackup: null,
          selectMenuIsOpen: false,
          selectMenuPosition: { x: null, y: null }
        });
        document.removeEventListener("click", this.closeSelectMenuHandler);
      }

      tagSelectionHandler(tag) {
        this.setState({ tag: tag, html: this.state.htmlBackup }, () => {
          const el = this.contentEditable.current;
          const { top, left } = getOffset(el);
          this.setState({
            selectMenuIsOpen: true,
            selectMenuPosition: { x: left, y: top },
          });
          document.addEventListener('click', this.closeSelectMenuHandler);
          setCaretToEnd(this.contentEditable.current);
        });
      }
  
      onKeyDownHandler(e) {
      if (e.key === "/") {
        this.setState({ htmlBackup: this.state.html });
        this.openSelectMenuHandler();
    //     console.log("You pressed the '/' key!");
    // this.openSelectMenuHandler();
      }
      if (e.key === "Enter") {
        if (this.state.previousKey === "Shift") {
          e.preventDefault();
          this.props.addBlock({
            id: this.props.id,
            ref: this.contentEditable.current
          });
        }
      }
      if (e.key === "Backspace") {
        if (this.state.previousKey === "Shift") {
          e.preventDefault();
          this.props.deleteBlock({
            id: this.props.id,
            ref: this.contentEditable.current
          });
        }
      }
      this.setState({ previousKey: e.key });
    }
  
    render() {
      return (
        <>
        {this.state.selectMenuIsOpen && (
          <SelectMenu
            position={this.state.selectMenuPosition}
            onSelect={this.tagSelectionHandler}
            close={this.closeSelectMenuHandler}
          />)}
        <ContentEditable
          className="Block"
          innerRef={this.contentEditable}
          html={this.state.html}
          tagName={this.state.tag}
          onChange={this.onChangeHandler}
          onKeyDown={this.onKeyDownHandler}
        />
        </>
      );
    }
  }
  
  export default EditableBlock;