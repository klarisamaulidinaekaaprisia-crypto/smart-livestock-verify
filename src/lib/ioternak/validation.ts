import { z } from 'zod';
export const animalInputSchema = z.object({
 id:z.string().trim().toUpperCase().regex(/^RFID-[A-Z0-9-]{3,24}$/, 'Gunakan format RFID- diikuti nomor atau huruf.'),
 type:z.enum(['Sapi','Kambing']), sex:z.enum(['Jantan','Betina']),
 age:z.coerce.number().int().min(0).max(30), vaccinated:z.enum(['yes','no']),
 date:z.string().refine(v=>!v||/^\d{4}-\d{2}-\d{2}$/.test(v),'Tanggal tidak valid.'),
}).refine(v=>v.vaccinated!=='yes'||Boolean(v.date),{message:'Tanggal vaksin terakhir diperlukan.',path:['date']});
