import React from 'react'
import AddBlock from '../../WorkSpace/AddBlock';

const block = {
    type: 'paragraph',
    className: 'WSParagraph',
    data: {
        text: 'Hey. This is a simple text block'
    }
}

class AddParagraph extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ComponentList-item-title">
                <div className="ComponentList-item-title">
                    <button className="ComponentList-item-title-button" onClick={() => AddBlock(block.type, block, block.className)}>
                        Paragraph
                    </button>
                </div>
            </div>
        )
    }
}

export default AddParagraph
