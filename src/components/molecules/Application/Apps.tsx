import React from "react";
import './Apps.css'
import AppsCard from "../../atoms/Apps/AppsCard";


function Apps() {
  const appcards = [
    {
      imageUrl: "https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/6113b539458e093011715772_group-10%20(3).svg",
      title: 'Personel Yönetimi',
      description: 'Çalışanların tüm bilgilerini tek uygulamada yönetin', 
      linkUrl: '#', 
      hreftitle: 'ŞİMDİ İNCELE', 
      arrow: 'fa-solid fa-arrow-right'

    },
    

    {
      imageUrl: "https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/6717b86616ee16efc14e6252_bordro%20icon.svg",
      title: 'Bordro Yönetimi',
      description: 'Tüm bordro işlemlerinizi tek ekranda kolayca yönetin', 
      linkUrl: '#', 
      hreftitle: 'ŞİMDİ İNCELE', 
      arrow: 'fa-solid fa-arrow-right'

    },
    
    {
      imageUrl: "https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/6113b6c1afed4f887b9abb86_group-8%20(3).svg",
      title: 'Performans Yönetimi',
      description: 'Çalışanları online performans değerlendirmeye dahil edin', 
      linkUrl: '#', 
      hreftitle: 'ŞİMDİ İNCELE', 
      arrow: 'fa-solid fa-arrow-right'
    },
    {
      imageUrl: "https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/66c4ff4bc3c8acd906e30f7b_talentii.svg",
      title: 'İşe Alım ve Aday Takip',
      description: 'İşe alım süreçlerinizi tek bir platformda yönetin', 
      linkUrl: '#', 
      hreftitle: 'ŞİMDİ İNCELE', 
      arrow: 'fa-solid fa-arrow-right'
    },
    {
      imageUrl: "https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/6113b6b76e2094438bf1f37c_group-9%20(3).svg",
      title: 'Vardiya Yönetimi',
      description: 'Çalışma zamanınızı en verimli şekilde planlayın ve yönetin', 
      linkUrl: '#', 
      hreftitle: 'ŞİMDİ İNCELE', 
      arrow: 'fa-solid fa-arrow-right'
    },
    {
      imageUrl:"https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/66c5f3f54ff100f5618fc390_analitikv1.svg",
      title: 'Ücret Yönetimi',
      description: 'Maaşları güncelleyin, yönetin ve raporlayın', 
      linkUrl: '#', 
      hreftitle: 'ŞİMDİ İNCELE', 
      arrow: 'fa-solid fa-arrow-right'
    }
  ] ;
  return (
   
  <>
  <div className="col-2"></div>
  <div className="col-8">
  <div className="apps-container">
      <div className="text-center mb-4">
        <h2 className="apps-title">Uygulamalar</h2>
        <p className="apps-subtitle ms-5">
          Çalışan sayınıza göre fiyatlama, dilediğiniz kadar kullanın, kullandığınız kadar ödeyin!
        </p>
      </div>
      <div className="row g-3">
        {appcards.map((appcard, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
            <AppsCard
              imageUrl={appcard.imageUrl}
              title={appcard.title}
              description={appcard.description}
              linkUrl={appcard.linkUrl}
              hreftitle={appcard.hreftitle}
              arrow={appcard.arrow}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
  <div className="col-2"></div>
   
      
      
  </>
 
  );
}
export default Apps;
