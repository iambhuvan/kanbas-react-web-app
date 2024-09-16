import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1/Home">
            <img src="/images/1.png" width={200} />
            <div>
              <h5>
                 CS1 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>


        <div className="wd-dashboard-course"> 
        <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/2/Home">
            <img src="/images/2.png" width={200} />
            <div>
              <h5>
                 CS2 ML
              </h5>
              <p className="wd-dashboard-course-title">
                ML Engineer
              </p>
              <button> Go </button>
            </div>
          </Link>
         </div>

        <div className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/3/Home">
                <img src="/images/3.jpg" width={200} />
                <div>
                <h5>
                     CS3 Devops
                </h5>
                <p className="wd-dashboard-course-title">
                    Devops Engineer
                </p>
                <button> Go </button>
                </div>
            </Link>
        </div>


        <div className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/4/Home">
                <img src="/images/4.webp" width={200} />
                <div>
                <h5>
                     CS4 AI
                </h5>
                <p className="wd-dashboard-course-title">
                    AI Engineer
                </p>
                <button> Go </button>
                </div>
            </Link>
        </div>

        <div className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5/Home">
                <img src="/images/5.jpg" width={200} />
                <div>
                <h5>
                     CS5 Robotics
                </h5>
                <p className="wd-dashboard-course-title">
                    Robotics Engineer
                </p>
                <button> Go </button>
                </div>
            </Link>
        </div>

        <div className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/6/Home">
                <img src="/images/6.jpeg" width={200} />
                <div>
                <h5>
                     CS6 Networking
                </h5>
                <p className="wd-dashboard-course-title">
                    Networking Engineer
                </p>
                <button> Go </button>
                </div>
            </Link>
        </div>
        
        <div className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/7/Home">
                <img src="/images/7.svg" width={200} />
                <div>
                <h5>
                     CS7 Iot
                </h5>
                <p className="wd-dashboard-course-title">
                    Iot Engineer
                </p>
                <button> Go </button>
                </div>
            </Link>
        </div>
                
      </div>
    </div>
  );
}

