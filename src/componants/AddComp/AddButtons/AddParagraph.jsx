import React from 'react'

class AddParagraph extends React.Component {
 
    addNewBlock = (className) => {
        const newBlockId = uid();
        AddBlock(className, newBlockId);
    }
    render() {
        return (
            <div className="ComponentList-item-title">
            <button className="ComponentList-item-title-button" onClick={() => this.addNewBlock("paragraph")}>
                Paragraph
            </button>
            </div>
        )
    }
}

export default AddParagraph



function AddBlock(className, id) {
    //find workspace
    const workspace = document.getElementById('workspace');
    //create new block
    const newBlock = document.createElement('div');
    newBlock.className = "Block";
    newBlock.id = id;
    //add a paragraph to new block
    const newParagraph = document.createElement('p');
    newParagraph.innerHTML = 'Type here...';
    newParagraph.contentEditable = true;
    newParagraph.className = className;
    newBlock.appendChild(newParagraph);

    //add new block to workspace
    workspace.appendChild(newBlock);
    //set focus on new block

}


const uid = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };