import React from 'react'
import './Main.css'
import EditableBlock from './editableBlock/editableBlock'


const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const initialBlock = { id: uid(), html: "<p>hello</p>", tag: "p" };


const setCaretToEnd = (element) => {
  const range = document.createRange();
  const selection = window.getSelection();
  range.selectNodeContents(element);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
  element.focus();
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.updatePageHandler = this.updatePageHandler.bind(this);
    this.addBlockHandler = this.addBlockHandler.bind(this);
    this.deleteBlockHandler = this.deleteBlockHandler.bind(this);
    this.state = { blocks: [initialBlock] };
  }

  updatePageHandler(updatedBlock) {
    const blocks = this.state.blocks;
    const index = blocks.map((b) => b.id).indexOf(updatedBlock.id);
    const updatedBlocks = [...blocks];
    updatedBlocks[index] = {
      ...updatedBlocks[index],
      tag: updatedBlock.tag,
      html: updatedBlock.html
    };
    this.setState({ blocks: updatedBlocks });
  }

  addBlockHandler(currentBlock) {
    const newBlock = { id: uid(), html: "", tag: "p" };
    const blocks = this.state.blocks;
    const index = blocks.map((b) => b.id).indexOf(currentBlock.id);
    const updatedBlocks = [...blocks];
    updatedBlocks.splice(index + 1, 0, newBlock);
    this.setState({ blocks: updatedBlocks }, () => {
      currentBlock.ref.nextElementSibling.focus();
    });
  }
  


  deleteBlockHandler(currentBlock) {
    const previousBlock = currentBlock.ref.previousElementSibling;
    if (previousBlock) {
      const blocks = this.state.blocks;
      const index = blocks.map((b) => b.id).indexOf(currentBlock.id);
      const updatedBlocks = [...blocks];
      updatedBlocks.splice(index, 1);

      this.setState({ blocks: updatedBlocks }, () => {
        setCaretToEnd(previousBlock);
      });
    }
  }

  render() {
    return (
      
      <div className="Page mainws container" id='workspace'>
        {this.state.blocks.map((block, key) => {
          return (
            <EditableBlock
              key={key}
              id={block.id}
              tag={block.tag}
              html={block.html}
              updatePage={this.updatePageHandler}
              addBlock={this.addBlockHandler}
              deleteBlock={this.deleteBlockHandler}
            />
          );
        })}
      </div>
   
    );
  }
}


export default Main