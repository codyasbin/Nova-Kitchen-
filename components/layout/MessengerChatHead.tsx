import React from "react";
import Image from "next/image";

const MessengerChatHead = () => {
  const messengerUsername = "NovaKitchenInteriors";

  return (
    <a
      href={`https://m.me/${messengerUsername}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 w-[60px] h-[60px]  rounded-full flex items-center justify-center shadow-lg hover:bg-[#006dbf] transition-colors"
    >
      <Image src="/Messanger.png" alt="Messenger Chat" width={100} height={60} />
    </a>
  );
};

export default MessengerChatHead;
