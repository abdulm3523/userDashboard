export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="assest/icons/tapone-logo.svg" alt="" />
        </div>

        <button className="menu-toggoler">
          <i className="ri-menu-2-line"></i>
          <img src="assest/images/user-profile.png" alt="" />
        </button>

        <div className="side_menu-bar">
          <div className="desktop_menu">
            <ul>
              <li className="menu-links">
                <a href="#">
                  <i className="ri-user-line"></i>
                  <span>My profile</span>
                </a>
              </li>
              <li className="menu-links">
                <a href="#">
                  <i className="ri-question-answer-line"></i>
                  <span>Support</span>
                </a>
              </li>
              <li className="menu-links">
                <a href="#">
                  <i className="ri-notification-badge-line"></i>
                  <span>Whats New</span>
                </a>
              </li>
              <li className="menu-links">
                <a href="#">
                  <i className="ri-flashlight-line"></i>
                  <span>Feature Request</span>
                </a>
              </li>
              <li className="menu-links">
                <a href="#">
                  <i className="ri-question-line"></i>
                  <span>Help Center</span>
                </a>
              </li>
            </ul>
          </div>

          <nav className="mobile_menu">
            <button className="menu-toggoler">
              <i className="ri-close-line"></i>
            </button>
            <ul>
              <li className="menu-links">
                <a href="#">
                  <i className="ri-user-line"></i>
                  <span>My profile</span>
                </a>
              </li>
              <li>
                {" "}
                <a href="dashboard.html">
                  <i className="ri-dashboard-line"></i>
                  <span>Dashboard</span>{" "}
                </a>
              </li>
              <li className="active">
                {" "}
                <a href="index.html">
                  <i className="ri-edit-box-line"></i>
                  <span>Edit</span>{" "}
                </a>
              </li>
              <li>
                {" "}
                <a href="addstaff.html">
                  <i className="ri-user-add-line"></i> <span>Add Staff</span>
                </a>
              </li>
              <li>
                {" "}
                <a href="staff.html">
                  <i className="ri-team-line"></i> <span>Team Members</span>
                </a>
              </li>
              <li>
                {" "}
                <a href="gallery.html">
                  <i className="ri-gallery-line"></i> <span>Gallery</span>
                </a>
              </li>
              <li>
                {" "}
                <a href="contacts.html">
                  <i className="ri-contacts-line"></i>
                  <span>Contacts</span>
                </a>
              </li>
              <li>
                {" "}
                <a href="integrations.html">
                  <i className="ri-flashlight-line"></i>
                  <span>Integration</span>{" "}
                </a>
              </li>
              <li>
                {" "}
                <a href="personalize.html">
                  <i className="ri-brush-line"></i>
                  <span>Personalize</span>{" "}
                </a>
              </li>
              <li>
                {" "}
                <a href="billing.html">
                  <i className="ri-money-dollar-box-line"></i>
                  <span>Billing</span>
                </a>
              </li>
              <li>
                {" "}
                <a href="#">
                  <i className="ri-logout-box-line"></i> <span>Logout</span>{" "}
                </a>
              </li>

              <p>Important Links</p>

              <li className="menu-links">
                <a href="#">
                  <i className="ri-question-answer-line"></i>
                  <span>Support</span>
                </a>
              </li>
              <li className="menu-links">
                <a href="#">
                  <i className="ri-notification-badge-line"></i>
                  <span>Whats New</span>
                </a>
              </li>
              <li className="menu-links">
                <a href="#">
                  <i className="ri-flashlight-line"></i>
                  <span>Feature Request</span>
                </a>
              </li>
              <li className="menu-links">
                <a href="#">
                  <i className="ri-question-line"></i>
                  <span>Help Center</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
