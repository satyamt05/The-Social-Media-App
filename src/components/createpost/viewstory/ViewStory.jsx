import React, { useState } from "react";
import Stories from "stories-react";
import "stories-react/dist/index.css";
import "./style.css";

const ViewStory = ({ files }) => {
  // Convert files array into stories array
  const stories = files.map((file, index) => ({
    type: "image",
    url: URL.createObjectURL(file), // Convert file into URL
    duration: 5000, // Set duration as needed
  }));

  // State to manage whether the stories are visible or not
  const [showStories, setShowStories] = useState(false);

  // State to manage whether all stories have been shown
  const [allStoriesShown, setAllStoriesShown] = useState(false);

  // Function to handle the end of stories
  const handleStoriesEnd = () => {
    setShowStories(false); // Hide the stories
    setAllStoriesShown(true); // Set allStoriesShown to true
  };

  return (
    <>
      {/* Conditionally render the Stories component based on showStories state */}
      {showStories ? (
        <div className="container flex">
          <Stories
            width="400px"
            height="600px"
            stories={stories}
            onAllStoriesEnd={handleStoriesEnd} // Call handleStoriesEnd when all stories end
          />
        </div>
      ) : !allStoriesShown ? ( // Render circle div only if allStoriesShown is false
        <>
          <div className="container circle1"></div>
          <div
            className="container circle"
            onClick={() => setShowStories(true)} // Set showStories to true on click
          >
            <h1>View Stories</h1>
          </div>
        </>
      ) : (
        <>
          <div className="container circle1"></div>
          <div
            className="container circle"
            onClick={() => setShowStories(true)} // Set showStories to true on click
          >
            <h1>View Stories</h1>
          </div>
        </>
      )}{" "}
      {/* Render nothing if allStoriesShown is true */}
    </>
  );
};

export default ViewStory;
