import{n as c,q as A,r as i,t as n}from"./index.9da81139.js";const E=async()=>{try{return await c.get("/clinics")}catch(t){return console.log(t),t}},N=async t=>{try{return await c.post("/clinics/new",t)}catch(s){return console.log(s),s}},S=async(t,s)=>{try{return await c.post(`/clinics/${t}/update`,s)}catch(e){return console.log(e),e}},$=async(t,s)=>{try{return await c.post(`/doctors/${t}/update`,s)}catch(e){return console.log(e),e}},z=async t=>{try{return await c.post("/doctors/new",t)}catch(s){return console.log(s),s}},b=async()=>{try{return await c.get("/doctors")}catch(t){return console.log(t),t}},I=async()=>{try{return await c.get("/cities")}catch(t){return console.log(t),t}},q=async()=>{try{return await c.get("/specializations")}catch(t){return console.log(t),t}},O=A("clinics",()=>{const t=i([]),s=i([]),e=i([]),d=i([]),g=i([]),y=i(),f=i();async function p(){const a=await E();n.isAxiosError(a)||(t.value=a.data.data)}async function D(a){const r=await N(a);return console.log("createClinicData  res:",r),n.isAxiosError(r)?0:(t.value.push(r.data.data),r.status)}async function w(a,r){const o=await S(a,r);if(console.log("changeClinicData  res:",o),!n.isAxiosError(o)){const u=t.value.findIndex(l=>l.id===a);return t.value[u]=o.data,o.status}return 0}async function h(a,r){const o=await $(a,r);if(console.log("changeDoctorData  res:",o),!n.isAxiosError(o)){const u=t.value.findIndex(l=>l.id===a);return s.value[u]=o.data,o.status}return 0}async function x(){const a=await b();n.isAxiosError(a)||(s.value=a.data.data,e.value=s.value.map(r=>({id:r.id,name:`${r.attributes.firstName} ${r.attributes.lastName} ${r.attributes.midName}`})))}async function C(a){const r=await z(a);return console.log("createDoctorData  res:",r),n.isAxiosError(r)?0:(s.value.push(r.data.data),r.status)}async function v(){const a=await I();n.isAxiosError(a)||(d.value=a.data.data)}async function m(){const a=await q();n.isAxiosError(a)||(g.value=a.data.data)}return{cities:d,clinics:t,doctors:s,doctorsFIO:e,selectedClinic:y,selectedDoctor:f,specializations:g,changeClinicData:w,changeDoctorData:h,getCitiesData:v,createDoctorData:C,getSpecializationsData:m,createClinicData:D,getDoctorsData:x,getClinicsData:p}});export{O as u};
