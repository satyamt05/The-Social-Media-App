import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Createpost from "./components/createpost/Createpost";
import Sidebar from "./components/createpost/sidebar/Sidebar";
import Showposts from "./components/createpost/showposts/Showposts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/createpost/Home/Home";
import { useRef } from "react";
import File from "./components/createpost/file/File";
import ViewStory from "./components/createpost/viewstory/ViewStory";

function App() {
  const titleRef = useRef("");
  const DescReff = useRef("");
  const [posts, setPosts] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [files, setFiles] = useState([]);
  const [fileUrls, setFileUrls] = useState([]);

  const handleChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles]);

    const urls = selectedFiles.map((file) => URL.createObjectURL(file));
    setFileUrls([...fileUrls, ...urls]);
    console.log(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const titleValue = titleRef.current.value;
    const descValue = DescReff.current.value;
    console.log(titleValue);
    console.log(descValue);
    if(titleValue!="" && descValue!=""){
    const newPost = { title: titleValue, description: descValue };
    setPosts([...posts, newPost]);
    e.preventDefault();
    
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);

  }}
    const alert = (e) => {
      e.preventDefault();
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 1000);
    };

    console.log(posts);

  return (
    <>
      <div className="fl">
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/createpost"
              element={
                <Createpost
                  handleSubmit={handleSubmit}
                  alert={alert}
                  titleRef={titleRef}
                  DescReff={DescReff}
                  showAlert={showAlert}
                />
              }
            />
            <Route
              path="/showposts"
              element={
                <Showposts
                  posts={posts}
                  setPosts={setPosts}
                  setShowAlert={setShowAlert}
                />
              }
            />
            <Route
              path="/file"
              element={
                <File
                  handleChange={handleChange}
                  alert={alert}
                  file={files}
                  showAlert={showAlert}
                  setShowAlert={setShowAlert}
                />
              }
            />
            <Route path="/viewstory" element={<ViewStory files={files} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
