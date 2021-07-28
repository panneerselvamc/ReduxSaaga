import React, { useState } from "react";
import {
  Button,
  Card,
  Form,
  Dropdown,
  DropdownButton,
  Image,
} from "react-bootstrap";

import { useHistory } from "react-router-dom";
import CancelIcon from "../../Assets/svg/cancelIcon.svg";
import EditorComponent from "../Editor";

const AddBlog = () => {
  const [blog, setBlog] = useState({
    category: "",
    title: "",
    description: "",
    sections: [],
  });

  const handleChange = (id, value, isSection, index = 0) => {
    let data = { ...blog };
    if (isSection) {
    } else {
      data[id] = value;
    }
    setBlog(data);
  };
  const handleFileRead = async (event, index) => {
    debugger;
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64);
    let existingBlog = { ...blog };
    existingBlog.sections[index].imageUrl = base64;
    setBlog(existingBlog);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const addBlog = () => {
    let newBlog = {
      title: "",
      description: "",
      imageUrl: null,
    };
    let existingBlog = { ...blog };
    existingBlog.sections.push(newBlog);
    setBlog(existingBlog);
  };

  const removeBlog = (index) => {
    let existingBlog = { ...blog };
    existingBlog.sections.splice(index, 1);
    setBlog(existingBlog);
  };

  const removeImageFromSection = (index) => {
    let existingBlog = { ...blog };
    existingBlog.sections[index].imageUrl = null;
    setBlog(existingBlog);
  };

  let history = useHistory();
  return (
    <div style={{ width: "100%"}}>
      <div style={{ height: "100vh", overflow: "scroll"  }}>
        <Card style={{background:"#1A1F61",color:"white"}} >
          <Card.Header style={{ textAlign: "center" }}>
            Add New Blog
          </Card.Header>
          <Card.Body>
            <Card.Title>
              Blog Category:
            </Card.Title>
            <DropdownButton
              id="dropdown-item-button"
              title="Categories"
              onSelect={(e) => {
                handleChange("category", e, false);
              }}
              style={{ display: "inline" }}
              variant="secondary"
            >
              <Dropdown.Item eventKey="Crypto" as="button">
                Cryto
              </Dropdown.Item>
              <Dropdown.Item eventKey="Stock" as="button">
                Stock
              </Dropdown.Item>
            </DropdownButton>
            <span style={{ paddingLeft: "10px" }}>
              <strong>: {blog.category}</strong>
            </span>
            <Card.Title>
              Blog Heading:
            </Card.Title>
            {/* <Card.Text></Card.Text>  */}
            <Card.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Title *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    onChange={(e) =>
                      handleChange("title", e.target.value, false)
                    }
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Title Description *</Form.Label>
                  <EditorComponent
                    handleContent={(value) =>
                      handleChange("description", value, false)
                    }
                    maxLength={100}
                    saveRequired={false}
                    value={blog.description}
                  />
                </Form.Group>
              </Form>
            </Card.Body>
            <Card.Title>
              Blog Sections:
            </Card.Title>
            {blog.sections.map((eachSection, index) => (
              <div style={{ paddingBottom: "10px" }}>
                <Card.Body>
                  <b>Section: {index + 1}</b>
                  <b
                    style={{ float: "right", cursor: "pointer" }}
                    onClick={() => removeBlog(index)}
                  >
                    X
                  </b>
                  <div>Title :</div>
                  <Form.Control
                    type="text"
                    placeholder=""
                    onChange={(e) =>
                      handleChange("title", e.target.value, true, index)
                    }
                  />
                  <div>Description :</div>
                  <EditorComponent
                    handleContent={(value) =>
                      handleChange("description", value, true, index)
                    }
                    maxLength={100}
                    saveRequired={false}
                    value={eachSection.description}
                  />

                  {eachSection.imageUrl === null && (
                    <Form.Group controlId="formFileLg" className="mb-3">
                      <Form.Label>Image Upload: </Form.Label>
                      <Form.Control
                        onChange={(e) => handleFileRead(e, index)}
                        type="file"
                        size="lg"
                      />
                    </Form.Group>
                  )}

                  {eachSection.imageUrl !== null && (
                    <div
                      style={{ display: "inlineBlock", position: "relative" }}
                    >
                      <Image src={eachSection.imageUrl} fluid />
                      <img
                        class="close"
                        src={CancelIcon}
                        style={{ position: "absolute", top: "0", right: "0" }}
                        onClick={() => removeImageFromSection(index)}
                      />
                    </div>
                  )}
                </Card.Body>
              </div>
            ))}
            <Button variant="primary" onClick={addBlog}>
              + Add Section
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default AddBlog;
