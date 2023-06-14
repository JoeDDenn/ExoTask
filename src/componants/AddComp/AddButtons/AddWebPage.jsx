import React from 'react'

        

const AddWebPage = () => {

    const addNewBlock = (className) => {
        const newBlockId = uid();
        AddBlock(className, newBlockId);
    }

  return (
    <div>
        <div className="ComponentList-item-title">
            <div className="ComponentList-item-title">
                <button className="ComponentList-item-title-button" onClick={() => addNewBlock("WSFrame")}>
                    Link
                </button>
            </div>
        </div>
    </div>
  )
}

export default AddWebPage


function AddBlock(className, id) {
    //find workspace
    const workspace = document.getElementById('workspace');
    //create new block
    const newBlock = document.createElement('div');
    newBlock.className = "Block";
    newBlock.id = id;
   //embed iframe in new block
    const newIframe = document.createElement('iframe');
    newIframe.className = className;
    // ask user for url
    const url = prompt("Please enter the URL of the page you want to embed", "https://www.w3schools.com");
    //set src of iframe to url
    newIframe.src = url;
    newBlock.appendChild(newIframe);
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

}

const uid = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };