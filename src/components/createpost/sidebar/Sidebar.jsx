import React, { useState } from "react";
import { Link } from "react-router-dom";
import './style.css'

const Sidebar = () => {
    const [isactive,setactive]=useState("");

    const handleonclick=(i)=>{
       if(i==="createpost")
       setactive("createpost")
       else if(i==="showposts")
       setactive("showposts")
       else if(i==="home")
       setactive("home")
       else if(i==="file")
       setactive("file")
       else if(i==="viewstory")
       setactive("viewstory")

    }

  return (
    <>
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark h" style={{ width: '280px' }}>
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
        <span className="fs-4">Social App</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" className={`nav-link text-white ${isactive==="home" ? "active":""}`} aria-current="page" onClick={()=>handleonclick("home")}>
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/createpost" className={`nav-link text-white ${isactive==="createpost" ? "active":""}`} aria-current="page" onClick={()=>handleonclick("createpost")}>
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
            Create Post
          </Link>
        </li>
        
        <li>
          <Link to="/showposts" className={`nav-link text-white ${isactive==="showposts" ? "active":""}`} aria-current="page" onClick={()=>handleonclick("showposts")}>
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
            View All Posts
          </Link>
        </li>
        <li>
          <Link to="/file" className={`nav-link text-white ${isactive==="file" ? "active":""}`} aria-current="page" onClick={()=>handleonclick("file")}>
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
           Add Story
          </Link>
        </li>
        <li>
          <Link to="/viewstory" className={`nav-link text-white ${isactive==="viewstory" ? "active":""}`} aria-current="page" onClick={()=>handleonclick("viewstory")}>
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
           View Story
          </Link>
        </li>
      </ul>
      <hr />
    </div>
    </>
  );
};

export default Sidebar;
