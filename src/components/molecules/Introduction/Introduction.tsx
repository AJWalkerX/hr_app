import React from "react";
import './Introduction.css'
function Introduction() {
  return (
    
     <div className="container-fluid bg-color">
       <div className="row ">
        <div className="col-2"></div>
        <div className="col-8 mt-5">
          <div className="row">
            <div className="col-6">
              <h1  style={{fontWeight:'bold'}}>
               Bordronun artık <span style={{color:'#0A5EB0',fontWeight:'bold'}}>kolayı var!</span> 
              </h1>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit possimus cupiditate blanditiis autem quae iure, omnis eaque inventore minima fuga incidunt ex exercitationem quos sit voluptas nobis earum ea ipsum.</p>
                <br />
              
                <button type="button" className="btn btn-primary btn-lg mt-1">Large button</button>
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
     </div>
    
  );
}

export default Introduction;
