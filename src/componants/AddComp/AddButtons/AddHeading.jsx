import React from 'react'
import AddBlock from '../../WorkSpace/AddBlock';

const block = {
    type: 'heading',
    className: 'WSHeading',
    data: {
        text: 'Type here....'
    }
}
class AddHeading extends React.Component {

    render() {
        
        return (
            <div className="ComponentList-item-title">
            <div className="ComponentList-item-title">
            <button className="ComponentList-item-title-button" onClick={() => AddBlock('heading', block, "WSHeading")}>
                Heading
            </button>
            </div>
            </div>
        )
    }
}

export default AddHeading