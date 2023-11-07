/* eslint-disable no-unused-vars */
import React, { useState, useCallback } from "react";
import { Pane, FileUploader, FileCard, Button } from "evergreen-ui";
import axios from "axios";
import Editor, { DiffEditor, useMonaco } from "@monaco-editor/react";
const Blog = () => {
  const [files, setFiles] = useState([]);
  const [fileRejections, setFileRejections] = useState([]);
  const handleChange = useCallback((files) => setFiles([files[0]]), []);
  const handleRejected = useCallback(
    (fileRejections) => setFileRejections([fileRejections[0]]),
    []
  );

  const handleRemove = useCallback(() => {
    setFiles([]);
    setFileRejections([]);
  }, []);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async () => {
    const payload = {
      title: title,
      desc: desc,
      imageUrl: imageUrl,
    };
    const result = await axios.post("//localhost:4000/createABlog", {
      payload,
    });
    console.log(result);
  };

  return (
    <Pane maxWidth={654} className="p-16">
      <h1 className="text-3xl p-2">Create a blog</h1>
      <FileUploader
        label="Upload Image"
        description="You can upload 1 file. File can be up to 50 MB."
        maxSizeInBytes={50 * 1024 ** 2}
        maxFiles={1}
        onChange={handleChange}
        onRejected={handleRejected}
        renderFile={(file) => {
          const { name, size, type } = file;
          const fileRejection = fileRejections.find(
            (fileRejection) => fileRejection.file === file
          );
          const { message } = fileRejection || {};
          return (
            <FileCard
              key={name}
              isInvalid={fileRejection != null}
              name={name}
              onRemove={handleRemove}
              sizeInBytes={size}
              type={type}
              validationMessage={message}
            />
          );
        }}
        values={files}
      />
      OR
      <div className="flex gap-32">
        <label>Image URL</label>
        <input
          type="text"
          placeholder="Enter here .."
          className="border-2 p-2"
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div className="flex gap-32">
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter here .."
          className="border-2 p-2"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex gap-20">
        <label>Description</label>
        <Editor
          height="40vh"
          defaultLanguage="md"
          defaultValue="Enter your blog here .."
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <Button onClick={handleSubmit}>Submit</Button>
    </Pane>
  );
};

export default Blog;
