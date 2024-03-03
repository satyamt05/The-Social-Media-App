import React, { useState } from "react";
import './style.css'
const File = ({ handleChange, files,showAlert,setShowAlert,alert }) => {
  return (
    <>
      <div className="container m-5">
        <h2>Add Story!!</h2>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Select the posts you want to add to your story</h5>
            <input type="file" onChange={handleChange} multiple className="inp" />
            <button className="btn btn-primary m-2" onClick={alert}>Submit</button>
           
           
          </div>
        </div>

      </div>
      {
              
              showAlert && (
                  <div className="container m-5">
                    <div className="alert alert-success" role="alert">
                      Added Successfully
                    </div>
                  </div>
                 
                )

              
      
      }
     
    </>
  );
};

export default File;
