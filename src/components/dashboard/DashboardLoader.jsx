function DashboardLoader() {
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {[1, 2, 3, 4].map((item) => (
          <div className="col-lg-3 col-md-6 mb-4" key={item}>
            <div className="card placeholder-glow" style={{ height: "150px" }}>
              <div className="card-body">
                <span className="placeholder col-8"></span>

                <br />
                <br />

                <span className="placeholder col-6"></span>

                <br />

                <span className="placeholder col-5"></span>

                <br />

                <span className="placeholder col-7"></span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card placeholder-glow mb-4" style={{ height: "420px" }}>
        <div className="card-body">
          <span className="placeholder col-12"></span>
        </div>
      </div>

      <div className="card placeholder-glow" style={{ height: "350px" }}>
        <div className="card-body">
          <span className="placeholder col-12"></span>
        </div>
      </div>
    </div>
  );
}

export default DashboardLoader;
