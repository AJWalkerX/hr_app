import React from "react";

function Introduction() {
  return (
    <>
      <div className="row bg-color ">
        <div className="col-2"></div>
        <div className="col-8 mt-5">
          <div className="row">
            <div className="col-6">
              <h1 className="text" style={{fontWeight:'bold'}}>
               Bordronun artık kolayı var! 
              </h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, itaque quasi? Nisi facere possimus tenetur totam nobis optio maxime neque quibusdam blanditiis laborum ut temporibus corporis sapiente accusamus, consectetur eaque.
                <br />
                <button type="button" className="btn btn-primary btn-lg mt-3">Large button</button>
            </div>
            <div className="col-6">
              <img src="http://picsum.photos/450/300" />
            </div>
          </div>


          <div className="row mt-5">
              <img src="http://picsum.photos/750/550 "  />
            
          </div>
        </div>

        <div className="col-2"></div>
      </div>
    </>
  );
}

export default Introduction;
