import React, { useEffect, useState } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { Button } from "react-bootstrap";
import _ from 'lodash';

const EditorComponent = ({ maxLength, saveRequired, handleContent, value }) => {
  const [editorState, updateEditorState] = useState(
    EditorState.createWithContent(
      ContentState.createFromBlockArray(htmlToDraft('<p></p>'))
    )
  );

  useEffect(() => {
    if (value?.length) {
      const tempEditorState = EditorState.createWithContent(ContentState.createFromBlockArray(htmlToDraft(value)));
      updateEditorState(tempEditorState);
    }
  }, [])

  const [length, updateContentLength] = useState(0);

  const onEditorStateChange = editData => {
    if (length <= maxLength) {
      updateEditorState(editData);
    }
  };

  const onChange = e => {
    if(maxLength >= editorState.getCurrentContent().getPlainText('').length) {
      updateContentLength(editorState.getCurrentContent().getPlainText('').length);
      if (!saveRequired) {
        const content = editorState.getCurrentContent();
        const html = draftToHtml(convertToRaw(content));
        updateContent(html);
      }
    }
  };

  const updateContent = (html) => {
    handleContent(html);
  }

  const handleMaxLength = (val) => {
    const textLength = editorState.getCurrentContent().getPlainText().length;
    if (val && textLength >= maxLength) {
      return 'handled';
    }
    return 'not-handled';
  };

  const handlePasteInput = (val) => {
    const textLength = editorState.getCurrentContent().getPlainText().length;
    return ((val.length + textLength) >= maxLength);
  };

  const save = () => {
    const content = editorState.getCurrentContent();
    const html = draftToHtml(convertToRaw(content));
    handleContent(html);
  }

  return (
    <>
      <div className="textAreaBlock">
        <div className="editor">
          <Editor
            onChange={_.debounce(onChange, 500)}
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            handleBeforeInput={handleMaxLength}
            handlePastedText={handlePasteInput}
            toolbar={{
              options: ['inline', 'list', 'link', 'history', 'emoji'],
              inline: {
                inDropdown: false,
                options: ['bold', 'underline']
              },
              list: {
                inDropdown: false,
                className: undefined,
                component: undefined,
                dropdownClassName: undefined,
                options: ['unordered']
              },
              fontFamily: {
                options: ['Poppins', 'Poppins-Bold'],
                className: undefined,
                component: undefined,
                dropdownClassName: undefined
              },
              link: {
                inDropdown: false,
                popupClassName: 'popupClass'
              },
              history: { inDropdown: false }
            }}
          />
          {
            saveRequired && 
              <div className="saveContainer">
                <Button style={{margin: "0 10px 10px 0", fontSize:'12px'}} onClick={save}>Save</Button>
              </div>
          }
        </div>
        <div />
      </div>
      <div className="bufferLength">{`${length} / ${maxLength}`}</div>
    </>
  );
};

export default EditorComponent;
