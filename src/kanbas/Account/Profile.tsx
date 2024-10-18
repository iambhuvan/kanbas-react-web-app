import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div className="container d-flex justify-content-center align-items-center">
            <div>
                <h3 className="mb-4">Profile</h3>
                <form>
                    <div className="mb-3">
                        <input 
                            id="wd-username" 
                            value="Username" 
                            placeholder="Username" 
                            className="form-control" 
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            id="wd-password" 
                            value="Password" 
                            placeholder="Password"
                            className="form-control" 
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            id="wd-firstname" 
                            value="Firstname" 
                            placeholder="First Name" 
                            className="form-control" 
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            id="wd-lastname" 
                            value="Lastname" 
                            placeholder="Last Name" 
                            className="form-control" 
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            id="wd-dob" 
                            value="mm/dd/yyyy" 
                            type="date" 
                            className="form-control" 
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            id="wd-email" 
                            value="EmailID" 
                            type="email" 
                            placeholder="Email" 
                            className="form-control" 
                        />
                    </div>
                    <div className="mb-3">
                        <select id="wd-role" className="form-select">
                        <option value="" disabled selected>Select Role</option>
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                            <option value="FACULTY">Faculty</option>
                            <option value="STUDENT">Student</option>
                        </select>
                    </div>
                    <Link 
                        to="/Kanbas/Account/Signin" 
                        className="btn btn-danger w-100">
                        Sign Out
                    </Link>
                </form>
            </div>
        </div>
  );
}
