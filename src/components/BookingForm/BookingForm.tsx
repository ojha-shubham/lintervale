import { useState, type FormEvent } from 'react';
import { CalendarDays, CheckCircle2, Clock3, MapPin, Phone, UserRound } from 'lucide-react';
import { requestMachineBooking } from '../../services/bookingService';
import type { ConstructionType, MachineBookingRequest } from '../../types';
import Button from '../Button/Button';

const constructionTypes: ConstructionType[] = ['House / Residential','Commercial Building','RCC / Slab Work','Road / Civil Work','Other'];
const initial: MachineBookingRequest = { name:'', phone:'', location:'', date:'', time:'', constructionType:'House / Residential', slabArea:'', requirement:'' };

export default function BookingForm() {
  const [form,setForm]=useState(initial); const [submitted,setSubmitted]=useState<string|null>(null); const [loading,setLoading]=useState(false);
  function update<K extends keyof MachineBookingRequest>(key:K,value:MachineBookingRequest[K]) { setForm(current=>({...current,[key]:value})); }
  async function submit(event:FormEvent<HTMLFormElement>) { event.preventDefault(); setLoading(true); const result=await requestMachineBooking(form); setLoading(false); if(result.success)setSubmitted(result.reference); }
  if(submitted) return <div className="booking-success"><span className="success-icon"><CheckCircle2 size={32}/></span><span className="eyebrow">Enquiry Received</span><h3>We have your site details.</h3><p>We’ll check machine availability and contact you to confirm the timing and charges. This enquiry is not an automatic booking confirmation.</p><div className="reference">Reference: {submitted}</div><Button type="button" variant="dark" onClick={()=>{setSubmitted(null);setForm(initial)}}>Submit Another Enquiry</Button></div>;
  return <form className="booking-form" onSubmit={submit}><div className="form-grid">
    <label><span><UserRound size={15}/> Name</span><input required value={form.name} onChange={e=>update('name',e.target.value)} placeholder="Your name"/></label>
    <label><span><Phone size={15}/> Phone Number</span><input required type="tel" inputMode="tel" value={form.phone} onChange={e=>update('phone',e.target.value)} placeholder="Your phone number"/></label>
    <label className="field-wide"><span><MapPin size={15}/> Project Location</span><input required value={form.location} onChange={e=>update('location',e.target.value)} placeholder="Village, town, site address"/></label>
    <label><span><CalendarDays size={15}/> Required Date</span><input required type="date" min={new Date().toISOString().split('T')[0]} value={form.date} onChange={e=>update('date',e.target.value)}/></label>
    <label><span><Clock3 size={15}/> Preferred Time</span><input required type="time" value={form.time} onChange={e=>update('time',e.target.value)}/></label>
    <label><span>Construction Type</span><select value={form.constructionType} onChange={e=>update('constructionType',e.target.value as ConstructionType)}>{constructionTypes.map(type=><option key={type}>{type}</option>)}</select></label>
    <label><span>Approximate Slab Area</span><input value={form.slabArea} onChange={e=>update('slabArea',e.target.value)} placeholder="e.g. 1500 sq ft"/></label>
    <label className="field-wide"><span>Additional Requirement</span><textarea rows={4} value={form.requirement} onChange={e=>update('requirement',e.target.value)} placeholder="Tell us anything important about the site or finishing work."/></label>
  </div><div className="form-footer"><p>We’ll verify availability before confirming your request.</p><Button type="submit" disabled={loading}>{loading?'Sending Enquiry…':'Request Machine'}</Button></div></form>;
}