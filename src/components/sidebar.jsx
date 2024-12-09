export const SidebarMenu = () => {
  return (
    <div className="left-menu">
      <nav>
        <ul>
          <li className="active">
            {" "}
            <a href="dashboard.html">
              <i className="ri-dashboard-line"></i>
              <span>Dashboard</span>{" "}
            </a>
          </li>
          <li>
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
        </ul>
      </nav>
    </div>
  );
};
