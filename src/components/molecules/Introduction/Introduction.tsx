
import React from "react";
import './Introduction.css'
import { Link } from "react-router-dom";
function Introduction() {
  return (
    <>
     <div className="col bg-color-introduction">
       <div className="row ">
        <div className="col-2"></div>
        <div className="col-8 mt-5">
          <div className="row">
            <div className="col-8">
              <div className="row">
              <p  style={{fontWeight:'bold',color:'white', fontSize:'80px'}}>
               Bordronun artık <span style={{color:'#37AFE1',fontWeight:'bold'}}>kolayı var!</span> 
              </p>
                <p style={{color:'#BBE9FF', fontSize:'18px'}}> Kolay İK Bordro kullanıcı dostu tasarımı, modern ekranları, hatasız hesaplama yeteneği, güncel mevzuatlara uyumlu yapısıyla ay sonu sizi strese sokan bordro operasyonunu ortadan kaldırıyor.</p>
                <br />
              </div>
             
               
            </div>
            <div className="col-4 ">
              <img style={{width:'450px', height:'350px'}} src="https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/671b8dfbb8ae947a766f8076_sgdpli-1-p-500.avif" />
            </div>
          </div>

                  <div className="row">
          <button type="button" className="btn-introduction mt-4 me-3 ">
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <span>HEMEN İNCELEYİN</span>
              <i className="arrow-style fa-solid fa-arrow-right"></i>
            </Link>
          </button>
        </div>
                      



          <div className="row  mb-3 introduction-photo-container">
  <div className="introduction-photo-style">
    <img
      src="https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/671b8d47e82f222c66db44b7_dashboard-yeni.avif"
      style={{
        width: '1300px',
        position: 'relative',
        transform: 'translateY(-150px)',
      }}
    />
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
