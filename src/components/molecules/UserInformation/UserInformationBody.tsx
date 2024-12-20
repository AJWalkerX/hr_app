import React from 'react'
import UserInformationButton from '../../atoms/UserInformation/UserInformationButton'

function UserInformationBody() {
  return (
    <>
    
        <div className="col-4">
            <h2 className='mt-5' style={{color:'#006ea6'}}>Kişisel Bilgiler</h2>
        <input style={{height:'50px'}} className='form-control mb-2 mt-5'type="text" placeholder='Adınız'/>
        <input style={{height:'50px'}} className='form-control mb-2 'type="text" placeholder='Soyadınız'/>
        <input style={{height:'50px'}} className='form-control mb-2 'type="text" placeholder='TC No'/>
        <input style={{height:'50px'}} className='form-control mb-2 'type="date" placeholder='Doğum Tarihi'/>
        <input style={{height:'50px'}} className='form-control mb-2 'type="text" placeholder='Telefon Numaranız'/>
        <input style={{height:'50px'}} className='form-control mb-2 'type="text" placeholder='Adresiniz'/>
        <input style={{height:'50px'}} className='form-control mb-2 'type="email" placeholder='Mail Adresiniz'/>
       
        <select style={{height:'50px'}} className="form-select mb-2" aria-label="Default select example">  
            <option selected>Cinsiyetiniz</option>  
            <option value="MALE">Erkek</option>  
            <option value="FEMALE">Kadın</option>
            <option value="OTHER">Belirtmek İstemiyorum</option>
        </select>
        </div>
        <div className="col-4">
        <h2 className='mt-5 ms-4 ' style={{color:'#006ea6'}}>Şirket Bilgileri</h2>
        <input style={{height:'50px'}} className='form-control mb-2 mt-5 'type="text" placeholder='Şirket Adı'/>
        <input style={{height:'50px'}} className='form-control mb-2 'type="text" placeholder='Şirket Mail Adresi'/>
        <input style={{height:'50px'}} className='form-control mb-2 'type="date" placeholder='Şirket Telefon Numarası'/>
        <input style={{height:'50px'}} className='form-control mb-2 'type="text" placeholder='Şirket Adresi'/>
        <select style={{height:'50px'}} className="form-select mb-2" aria-label="Default select example">  
            <option selected>Sektörünüz</option>  
            <option value="TECHNOLOGY">Teknoloji</option>  
            <option value="HEALTHCARE">Sağlık</option>
            <option value="CONSTRUCTION">İnşaat</option>
            <option value="FINANCE">Finans</option>
            <option value="ENERGY">Enerji</option>
            <option value="TOURISM">Turizm</option>
            <option value="MEDIA_AND_ENTERTAINMENT">Medya ve Eğlence</option>
            <option value="EDUCATION">Eğitim</option>
            <option value="FOOD">Gıda</option>
            <option value="AUTOMOTIVE">Otomotiv</option>
            <option value="FASHION_AND_TEXTILE">Moda Ve Tekstil</option>
            <option value="UNKNOWN">Diğer</option>
        </select>
        <select style={{height:'50px'}} className="form-select mb-2" aria-label="Default select example">  
            <option selected>Ülkeniz</option>  
            <option value="TURKEY">Türkiye</option>  
        </select>
        <div className=" mt-3">
        <p className='ms-2 mt-2' style={{fontSize:'20px', color:'#006ea6', border:'none'}}>Şirket Logosu:</p>
        <input className='form-control mb-2 mt-2'type="file" accept='image/*'/> 
        </div>
       
        </div>
        <div className="col-4">
            <div className="row me-2 ">
            <h2 className='mt-5 ms-4 ' style={{color:'#006ea6'}}>Kariyer Bilgileri</h2>
        <input style={{height:'50px'}} className='form-control mb-2 mt-5'type="date" placeholder='Çalışmaya Başlama Tarihiniz'/>
        <input style={{height:'50px'}} className='form-control mb-2 'type="text" placeholder='Sosyal Güvenlik Numaranız'/>
        <select style={{height:'50px'}} className="form-select mb-2" aria-label="Default select example">  
            <option selected>Pozisyonunuz</option>  
            <option value="INTERN">INTERN</option>  
            <option value="JUNIOR">JUNIOR</option>  
            <option value="MID_LEVEL">MID_LEVEL</option>
            <option value="SENIOR">SENIOR</option>
            <option value="TEAM_LEAD">TEAM_LEAD</option>
            <option value="MANAGER">MANAGER</option>
            <option value="DIRECTOR">DIRECTOR</option>
            <option value="NONE">NONE</option>
        </select>
          
            </div>
            <div className="row me-5  "> 
                <UserInformationButton/>
            </div>
        
        

        </div>
    </>
  )
}

export default UserInformationBody