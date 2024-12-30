import React from "react";

const ManagerComment = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white p-4 border-b">
        <h1 className="text-xl font-semibold text-gray-800">
          KolaysaİK Uygulama Değerlendirmesi
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Deneyiminizi paylaşın ve uygulamayı değerlendirin
        </p>
      </div>

      <div className="bg-white p-4">

      <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Uygulama Deneyiminiz İle İlgili Özet Bilgi
          </label>
          <textarea
            placeholder="KolaysaİK uygulamasını kullanırken edindiğiniz deneyimi kısa bir şekilde paylaşın..."
            className="w-full min-h-[200px] p-3 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 ease-in-out resize-none"
          />
        </div>


        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Uygulama Deneyiminiz
          </label>
          <textarea
            placeholder="KolaysaİK uygulamasını kullanırken edindiğiniz deneyimi detaylı bir şekilde paylaşın..."
            className="w-full min-h-[200px] p-3 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 ease-in-out resize-none"
          />
        </div>

    
        <div className="flex justify-end items-center">
          <button className="btn btn-success text-white">
            Değerlendirmeyi Kaydet
          </button>
        </div>
      </div>
    </div>
  );
};
export default ManagerComment;
