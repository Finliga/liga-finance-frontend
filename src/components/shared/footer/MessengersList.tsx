import IconTelegram from "@/components/shared/icons/IconTelegram";
import IconViber from "@/components/shared/icons/IconViber";
import IconWhatsApp from "@/components/shared/icons/IconWhatsApp";
import SocialLinkItem from "./SocialLinkItem";
import {
  TELEGRAM_LINK,
  VIBER_LINK,
  WHATSAPP_LINK,
} from "@/constants/constants";

export default function MessengersList() {
  const messengersList = [
    { name: "telegram", icon: <IconTelegram />, url: TELEGRAM_LINK },
    { name: "viber", icon: <IconViber />, url: VIBER_LINK },
    { name: "whatsapp", icon: <IconWhatsApp />, url: WHATSAPP_LINK },
  ];

  return (
    <ul className="flex gap-4 md:justify-end text-main mt-6">
      {messengersList.map((messenger, idx) => (
        <SocialLinkItem key={idx} social={messenger} />
      ))}
    </ul>
  );
}
