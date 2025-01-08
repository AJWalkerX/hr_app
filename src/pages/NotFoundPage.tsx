import React from "react";

function NotFoundPage() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row w-100">
        <div className="col-md-6 text-center">
          <h2 className="display-4">Üzgünüz, aradığınız sayfayı bulamadık.</h2>

          <a
            href="/"
            className="btn btn-primary"
            style={{ marginTop: "100px" }}
          >
            Ana Sayfaya Git
          </a>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src="https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/61a891f3586cea48e03baf8a_404.svg"
            alt="404 Not Found"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
