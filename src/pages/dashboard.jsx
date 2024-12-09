export const Dashboard = () => {
  return (
    <div className="section" id="dashboard">
      <div className="container">
        <div className="left-side">
          <h2 className="page_title">Dashboard</h2>
          <div className="row card_box">
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <div className="icon_box">
                  <i className="ri-user-line"></i>
                </div>
                <div className="text-box">
                  <label htmlFor="" className="">
                    Total Users
                  </label>
                  <span className="number">1,289</span>
                  <span className="activity">since last 2 months</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <div className="icon_box">
                  <i className="ri-flag-line"></i>
                </div>
                <div className="text-box">
                  <label htmlFor="" className="">
                    Total Sessions
                  </label>
                  <span className="number">1,289</span>
                  <span className="activity">since last 2 months</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <div className="icon_box">
                  <i className="ri-eye-line"></i>
                </div>
                <div className="text-box">
                  <label htmlFor="" className="">
                    Page Views
                  </label>
                  <span className="number">15,250</span>
                  <span className="activity">since last 2 months</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h3 className="section_heading">Session Overview</h3>
              <div>
                <canvas id="myChart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
