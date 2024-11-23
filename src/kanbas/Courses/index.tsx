import CoursesNavigation from "./Navigation";
import { courses } from "../Database";
import { useNavigate, Route, Routes, useParams, useLocation } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Courses({ courses }: { courses: any[]; }) {
  const navigate = useNavigate();
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!currentUser) {
        navigate("/Kanbas/Account/Signin");
        return;
    }
  }, [currentUser]);

  // Only render content if user is authenticated
  if (!currentUser) {
    return null;
  }

  const course = courses.find((course) => course._id === cid);
  // Split pathname and find the relevant segment
  const pathSegments = pathname.split("/");
  const currentSegment = pathSegments[pathSegments.length - 1] || "Home"; // Get the last segment or default to "Home"

  // Sanitize the current segment to remove any unwanted characters
  const sanitizedSegment = currentSegment.replace(/%60/g, "").replace(/[^\w\s]/g, "");

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course ? course.name : "Course Not Found"} &gt; {sanitizedSegment.charAt(0).toUpperCase() + sanitizedSegment.slice(1)}
      </h2>
      <hr />
      
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}