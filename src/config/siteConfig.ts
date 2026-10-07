export const siteConfig = {
  name: "LinterVale",
  tagline: "Build Strong. Build Better.",
  phone: "9014465414",
  whatsapp: "9014465414",
  email: "ojhashubham00@gmail.com",
  city: "Pratapgarh",
  serviceArea: "Pratapgarh, uttar pradesh, India",
} as const;

export const isConfigured = (value: string) =>
  value.length > 0 && !value.startsWith("YOUR_");
