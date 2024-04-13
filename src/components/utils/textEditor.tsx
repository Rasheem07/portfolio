import React, { useRef, ChangeEvent, useEffect } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

interface TextEditorProps {}

const TextEditor: React.FC<TextEditorProps> = () => {
  
  const modules = {
    toolbar: {
        container: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'size': [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image', 'video', 'code-block'],
            ['clean'],
            ['align', 'direction'],
          ],
    },
  };

  const editorRef = useRef<ReactQuill>(null);

  useEffect(() => {
    if (editorRef.current) {
      // Get the Quill instance from the ReactQuill component
      const quill = editorRef.current.getEditor();

      // Set the minimum height of the editor
      const minHeight = '400px'; // Adjust this value to set the desired minimum height
      quill.root.style.minHeight = minHeight;
    }
  }, []);


  return (
    <div>
      <ReactQuill
        theme="snow"
        style={{ height: '100%' }}
        modules={modules}
        ref={editorRef}
      />
    </div>
  );
};

export default TextEditor;
