import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { convertFromRaw } from 'draft-js';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};


class RichEditor extends Component {
    constructor(props) {
        super(props);
        const contentState = convertFromRaw(content);
        this.state = {
            contentState,
        }
    }
    
    onContentStateChange = (contentState) => {
        this.setState({
            contentState,
      });
    };
    
    render() {
        const { contentState } = this.state;
        console.log(JSON.stringify(contentState));
        return (
            <Editor
          wrapperClassName="demo-wrapper"
          toolbarClassName="toolbar-class"
            toolbar={{
                inline: { inDropdown: true },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: true },
            }}
          onContentStateChange={this.onContentStateChange}
        />
      );
    }
}

export default RichEditor