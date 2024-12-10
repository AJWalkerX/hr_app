import React from "react";

function UserComments() {
  return (
    <div className="container-fluid mt-5">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title" style={{fontWeight:'bold',fontSize:'35px'}}>Kullanıcı Hikayeleri</h5>
                <p className="card-text">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, magni exercitationem tempore maxime quaerat sapiente non obcaecati! Architecto nemo accusantium laborum aliquam magni pariatur dolore mollitia sed! Eius, commodi laborum!
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-6">
              <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title" style={{fontWeight:'bold',fontSize:'35px'}}>Penti</h5>
                <p className="card-text" style={{fontWeight:'bold',fontSize:'12px'}}>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, magni exercitationem tempore maxime quaerat sapiente non obcaecati! Architecto nemo accusantium laborum aliquam magni pariatur dolore mollitia sed! Eius, commodi laborum!
                </p>
                <p className="card-text" style={{fontWeight:'lighter'}}> ahmet eriş i was here !!!</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
              </div>
              <div className="col-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserComments;
