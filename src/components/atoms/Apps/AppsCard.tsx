import React from 'react'
import './AppsCard.css'
import { IAppsCard } from '../../../models/IAppsCard'   

function AppsCard(props: IAppsCard) {
   const {imageUrl, description, title, linkUrl, hreftitle, arrow} = props;
   
   return (
     <div>
       <div className="card justify-content-center ms-5" style={{ width: "18rem" }}>
         <div className="card-body ms-2">
           <div className="row">
             <div className="col-2 mt-1">
               <img src={imageUrl} className='img-style' alt={title}/>
             </div>
             <div className="col-10 mt-2">
               <span className="apps-text-style">{title}</span>
             </div>
           </div>
           <div className="row mt-2">
             <p className="card-text">{description}</p>
           </div>
           <div className="row mt-2">
             <a 
               className="me-5 mt-4" 
               style={{
                 textDecoration: 'none', 
                 color: 'black', 
                 fontSize: '13px'
               }} 
               href={linkUrl}
             >
               {hreftitle}
               <i className={`${arrow} apps-arrow-style`}></i>
             </a>
           </div>
         </div>
       </div>
     </div>
   )
}

export default AppsCard