import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import "./Status.css"; 
import { faFileImport,faMagnifyingGlass,faList,faCircleInfo,faChartSimple,faMessage } from "@fortawesome/free-solid-svg-icons";
export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> 
            Unpublish 
          </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> 
            Publish 
          </button>
        </div>
      </div><br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start " >
      <FontAwesomeIcon icon={faFileImport} /> Import Existing Content 
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
      <FontAwesomeIcon icon={faFileImport} /> Import from Commons 
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
      <FontAwesomeIcon icon={faMagnifyingGlass} /> Choose Home Page 
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
      <FontAwesomeIcon icon={faList} /> View Course Stream
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
      <FontAwesomeIcon icon={faCircleInfo} /> New Announcement
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
      <FontAwesomeIcon icon={faChartSimple} /> New Analytics
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
      <FontAwesomeIcon icon={faMessage} /> View Course Notifications
      </button>
      
    </div>
);}
  