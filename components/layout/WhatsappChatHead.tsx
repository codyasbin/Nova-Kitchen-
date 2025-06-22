import React from "react";
import {FaWhatsapp} from "react-icons/fa";

const WhatsappChatHead = () => {
  const messengerUsername = "NovaKitchenInteriors";

  return (
    <a
      href="https://wa.me/9779845046865"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-5 z-50 w-[60px] h-[60px]  rounded-full flex items-center justify-center shadow-lg hover:bg-green-400 bg-transparent text-green-700 transition-colors"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsappChatHead;