import type { MachineBookingRequest } from "../types";

export async function requestMachineBooking(
  request: MachineBookingRequest,
): Promise<{ success: boolean; reference: string }> {
  await new Promise((resolve) => window.setTimeout(resolve, 650));
  const reference = `LV-${Date.now().toString(36).toUpperCase()}`;
  console.info("LinterVale machine enquiry (frontend simulation):", request);
  return { success: true, reference };
}
