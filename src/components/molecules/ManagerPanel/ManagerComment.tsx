import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddComment } from "../../../stores/features/commentSlice";
import { hrDispatch, hrState } from "../../../stores";
import { IAddCommentRequest } from "../../../models/Request/IAddCommentRequest";
import Swal from "sweetalert2"; 

function ManagerComment()  {
  const dispatch = useDispatch<hrDispatch>();
  const isLoading = useSelector((state: hrState) => state.comment.isAddCommentLoading);

  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (content.trim() === "" || description.trim() === "") {
      alert("Lütfen tüm alanları doldurun!");
      return;
    }

    const payload: IAddCommentRequest = {
      content,
      description,
    };

    dispatch(fetchAddComment(payload))
      .then(() => {
     
        Swal.fire({
          title: "Başarılı!",
          text: "Değerlendirmeniz başarıyla kaydedildi.",
          icon: "success",
          confirmButtonText: "Tamam",
        });
      })
      .catch((error) => {
       
        Swal.fire({
          title: "Hata!",
          text: "Değerlendirme kaydedilemedi. Lütfen tekrar deneyin.",
          icon: "error",
          confirmButtonText: "Tamam",
        });
      });
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">KolaysaİK Uygulama Değerlendirmesi</h2>
      <p className="mb-4">Deneyiminizi paylaşın ve uygulamayı değerlendirin</p>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Uygulama Deneyiminiz
        </label>
        <textarea
          placeholder="KolaysaİK uygulamasını kullanırken edindiğiniz deneyimi kısa bir şekilde paylaşın..."
          className="w-full min-h-[200px] p-3 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 ease-in-out resize-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Uygulama Deneyiminiz
        </label>
        <textarea
          placeholder="KolaysaİK uygulamasını kullanırken edindiğiniz deneyimi detaylı bir şekilde paylaşın..."
          className="w-full min-h-[200px] p-3 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 ease-in-out resize-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="flex justify-end items-center">
        <button
          className="btn btn-success text-white"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Kaydediliyor..." : "Değerlendirmeyi Kaydet"}
        </button>
      </div>
    </div>
  );
};

export default ManagerComment;
