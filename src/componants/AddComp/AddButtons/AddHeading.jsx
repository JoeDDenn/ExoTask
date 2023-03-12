import React from 'react'

class AddHeading extends React.Component {

    addNewBlock = (className) => {
        const newBlockId = uid();
        AddBlock(className, newBlockId);
    }


    render() {
        return (
            <div className="ComponentList-item-title">
            <div className="ComponentList-item-title">
            <button className="ComponentList-item-title-button" onClick={() => this.addNewBlock("WSHeading")}>
                Heading
            </button>
            </div>
            </div>
        )
    }
}

export default AddHeading



function AddBlock(className, id) {
    //find workspace
    const workspace = document.getElementById('workspace');
    //create new block
    const newBlock = document.createElement('div');
    newBlock.className = "Block";
    newBlock.id = id;
    //add a paragraph to new block
    const newParagraph = document.createElement('H1');
    newParagraph.innerHTML = 'Type here...';
    newParagraph.contentEditable = true;
    newParagraph.className = className;
    newBlock.appendChild(newParagraph);

    //add new block to workspace
    workspace.appendChild(newBlock);
    //set focus on new block
    //add a delete button to new block with id
    const newDeleteButton = document.createElement('button');
    newDeleteButton.className = "del-but";
    //add child Icon to button
    const newDeleteIcon = document.createElement('i');
    newDeleteIcon.className = "fa fa-trash";
    newDeleteButton.appendChild(newDeleteIcon);
    
    newDeleteButton.onclick = () => {
        const block = document.getElementById(id);
        block.parentNode.removeChild(block);
    }
    newBlock.appendChild(newDeleteButton);

}



const uid = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };