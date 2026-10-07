import { siteConfig, isConfigured } from "../config/siteConfig";

export function openWhatsApp(message: string) {
  if (!isConfigured(siteConfig.whatsapp)) {
    window.alert(
      "WhatsApp number is not configured yet. Please update src/config/siteConfig.ts.",
    );
    return;
  }
  const number = siteConfig.whatsapp.replace(/[^0-9]/g, "");
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function openMachineWhatsApp() {
  openWhatsApp(`Hello, I want to enquire about the Linter Machine.

Name:
Project Location:
Required Date:
Construction Type:
Approximate Slab Area:`);
}
