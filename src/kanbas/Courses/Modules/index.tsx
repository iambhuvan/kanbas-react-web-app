export default function Modules() {
    return (
      <div>
        <div id="wd-modules-header">
        <button>Collapse All</button> <button>View Progress</button>  
        <select>
            <option>Publish All</option>
        </select> 

        <button>+ Modules</button>
        </div>

        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda </div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
            </ul>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full stack Developer - chapter 1 - Introduction</li>
                  <li className="wd-content-item">Full stack Developer - chapter 2 - creating User</li>
                </ul>
              </li>
            </ul>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to Web Development</li>
                  <li className="wd-content-item">Creating HTTP server with Node.js</li>
                  <li className="wd-content-item">Creating react applicaion</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}  
  