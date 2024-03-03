import React, { useEffect, useRef } from "react";
import "./style.css";

const Createpost = ({handleSubmit,titleRef,DescReff,showAlert,setShowAlert,alert}) => {
   return (
        <>
            <div className="container m-5">
                <h1 className="my-5">Create Post</h1>
                <form onSubmit={handleSubmit} >
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Your Content
                        </label>
                        <input
                            ref={titleRef}
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter your content here"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            More about your content
                        </label>
                        <textarea
                        ref={DescReff}
                            type="text"
                            rows={4}
                            className="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" >
                        Submit
                    </button>
                </form>
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

export default Createpost;
