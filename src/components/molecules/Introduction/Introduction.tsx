
import React from "react";
import './Introduction.css'
function Introduction() {
  return (
    <>
     <div className="col bg-color-introduction">
       <div className="row ">
        <div className="col-2"></div>
        <div className="col-8 mt-5">
          <div className="row">
            <div className="col-8">
              <p  style={{fontWeight:'bold',color:'white', fontSize:'80px'}}>
               Bordronun artık <span style={{color:'#37AFE1',fontWeight:'bold'}}>kolayı var!</span> 
              </p>
                <p style={{color:'#BBE9FF', fontSize:'18px'}}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit possimus cupiditate blanditiis autem quae iure, omnis eaque inventore minima fuga incidunt ex exercitationem quos sit voluptas nobis earum ea ipsum.</p>
                <br />
                <button type="button" className="btn-introduction mt-1 me-3 ">
                  <span>HEMEN İNCELEYİN</span>
                  <i className="arrow-style fa-solid fa-arrow-right"></i>
                </button>
            </div>
            <div className="col-4">
              <img src="http://picsum.photos/400/300" />
            </div>
          </div>


          <div className="row mt-5 mb-3">
            <div className="col d-flex justify-content-center">
              <img src="http://picsum.photos/500/300 "  />         
            </div>
              
          </div>
        </div>

        <div className="col-2"></div>
      </div>
     </div>
    
    </>
    
  );
}

export default Introduction;
