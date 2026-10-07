import { siteConfig, isConfigured } from "../config/siteConfig";

export function callBusiness() {
  if (!isConfigured(siteConfig.phone)) {
    window.alert(
      "Phone number is not configured yet. Please update src/config/siteConfig.ts.",
    );
    return;
  }
  window.location.href = `tel:${siteConfig.phone}`;
}
