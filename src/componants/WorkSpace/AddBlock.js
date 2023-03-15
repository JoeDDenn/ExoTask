
import { v4 as uuid } from 'uuid';

function AddBlock(type, block, className) {

    //find workspace
    const workspace = document.getElementById('workspace');
    //create new block
    const newBlock = document.createElement('div');
    newBlock.className = "Block";
    const id = newBlock.id = uuid();
    switch (type) {
        case 'paragraph':
            //add a paragraph to new block
            const newParagraph = document.createElement('p');
            newParagraph.innerHTML = block.data.text;
            newParagraph.contentEditable = true;
            newParagraph.className = className;
            newBlock.appendChild(newParagraph);
            break;
        case 'heading':
            const newHeading = document.createElement('h1');
            newHeading.innerHTML = block.data.text;
            newHeading.contentEditable = true;
            newHeading.className = className;
            newBlock.appendChild(newHeading);
            break;
        case 'image':
            //add a image to new block
            const newImage = document.createElement('img');
            newImage.src = block.data.file.url;
            newImage.className = className;
            newBlock.appendChild(newImage);
            break;
        case 'webpage':
            const newIframe = document.createElement('iframe');
            newIframe.className = className;
            // ask user for url
            const url = block.data.url;
            //set src of iframe to url
            newIframe.src = url;
            newBlock.appendChild(newIframe);
            break;
        default:
            break;
    }
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


export default AddBlock;
