export const siteConfig = {
  name: 'LinterVale',
  tagline: 'Build Strong. Build Better.',
  phone: 'YOUR_PHONE_NUMBER',
  whatsapp: 'YOUR_WHATSAPP_NUMBER',
  email: 'YOUR_EMAIL',
  city: 'YOUR_CITY',
  serviceArea: 'YOUR_SERVICE_AREA',
} as const;

export const isConfigured = (value: string) =>
  value.length > 0 && !value.startsWith('YOUR_');