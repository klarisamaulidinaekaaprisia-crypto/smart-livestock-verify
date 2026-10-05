export type Animal = {
  id: string; tag: string; type: 'Sapi' | 'Kambing'; sex: 'Jantan' | 'Betina'; age: number;
  vaccinated: boolean; lastVaccine: string | null; nextVaccine: string; booster?: boolean;
};
export type Activity = { id: string; animalId: string; type: string; checkedAt: string; vaccinated: boolean; eligible: boolean; officer: string };
export type Verification = { animal: Animal; eligible: boolean; reason: string };
export const initialAnimals: Animal[] = [
  { id:'RFID-001245', tag:'TAG-001245', type:'Sapi', sex:'Jantan', age:3, vaccinated:true, lastVaccine:'15 Agustus 2026', nextVaccine:'15 Februari 2027' },
  { id:'RFID-001246', tag:'TAG-001246', type:'Kambing', sex:'Betina', age:2, vaccinated:true, lastVaccine:'20 Agustus 2026', nextVaccine:'20 Februari 2027' },
  { id:'RFID-001247', tag:'TAG-001247', type:'Sapi', sex:'Betina', age:2, vaccinated:false, lastVaccine:null, nextVaccine:'08 Oktober 2026' },
  { id:'RFID-001248', tag:'TAG-001248', type:'Sapi', sex:'Jantan', age:4, vaccinated:true, lastVaccine:'08 April 2026', nextVaccine:'08 Oktober 2026', booster:true },
  { id:'RFID-001249', tag:'TAG-001249', type:'Kambing', sex:'Jantan', age:1, vaccinated:true, lastVaccine:'10 September 2026', nextVaccine:'10 Maret 2027' },
  { id:'RFID-001250', tag:'TAG-001250', type:'Sapi', sex:'Betina', age:3, vaccinated:false, lastVaccine:null, nextVaccine:'12 Oktober 2026' },
];
export const initialActivities: Activity[] = initialAnimals.slice(0,5).map((a,i) => ({ id:`check-${i}`, animalId:a.id, type:a.type, checkedAt:`05 Okt 2026, ${['14:32','14:28','14:21','14:16','14:10'][i]}`, vaccinated:a.vaccinated, eligible:a.vaccinated, officer:'Admin' }));
export const dashboard = { total:1248, vaccinated:1086, unvaccinated:162, today:86, booster:42, coverage:87 };
export function verifyAnimal(animal: Animal): Verification {
  return { animal, eligible:animal.vaccinated && Boolean(animal.lastVaccine), reason:animal.vaccinated ? 'Hewan memenuhi aturan verifikasi vaksin.' : 'Status vaksin belum memenuhi persyaratan.' };
}
// Transport contract: swap the mock implementation for an HTTP / IoT adapter.
// Endpoints: GET /api/animals, GET /api/animals/:id, GET /api/vaccinations,
// GET /api/rfid/:id, POST /api/rfid/verify, GET /api/dashboard, GET /api/rfid/activity.
export interface RFIDTransport { receiveTag(signal: AbortSignal): Promise<string> }
export const mockRFIDTransport: RFIDTransport = {
  receiveTag: signal => new Promise((resolve,reject) => {
    const timer = setTimeout(() => { signal.removeEventListener('abort',cancel); resolve('RFID-001245'); },2200);
    const cancel = () => { clearTimeout(timer); reject(new DOMException('Scan canceled','AbortError')); };
    signal.addEventListener('abort',cancel,{once:true});
    if(signal.aborted) cancel();
  }),
};
export function pageHead(title: string, description: string) {
  return { meta:[{title:`${title} — IoTernak`},{name:'description',content:description},{property:'og:title',content:`${title} — IoTernak`},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}] };
}
export function downloadCSV(name: string, rows: string[][]) {
  const csv = '\uFEFF'+rows.map(row => row.map(cell => `"${cell.replaceAll('"','""')}"`).join(',')).join('\r\n');
  const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8;'}));
  const link=document.createElement('a'); link.href=url; link.download=name; link.click(); URL.revokeObjectURL(url);
}
