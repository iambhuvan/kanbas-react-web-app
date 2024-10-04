import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      
      
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">



          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1/Home">
                <img src="/images/1.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1 React JS
                  </h5>
                  <p className="wd-dashboard-course-title">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>


          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/2/Home">
              <img src="/images/2.png" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS2 ML
                </h5>
                <p className="wd-dashboard-course-title">
                  ML Engineer
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/3/Home">
              <img src="/images/3.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS3 Devops
                </h5>
                <p className="wd-dashboard-course-title">
                  Devops Engineer
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
            </div>
          </div>


          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/4/Home">
              <img src="/images/4.webp" width="100%" height={160}/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS4 AI
                </h5>
                <p className="wd-dashboard-course-title">
                  AI Engineer
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/5/Home">
              <img src="/images/5.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS5 Robotics
                </h5>
                <p className="wd-dashboard-course-title">
                  Robotics Engineer
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/6/Home">
              <img src="/images/6.jpeg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS6 Networking
                </h5>
                <p className="wd-dashboard-course-title">
                  Networking Engineer
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/7/Home">
              <img src="/images/7.svg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS7 Iot
                </h5>
                <p className="wd-dashboard-course-title">
                  Iot Engineer
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

