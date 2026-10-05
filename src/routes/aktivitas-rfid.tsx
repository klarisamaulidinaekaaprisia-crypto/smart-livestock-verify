import { createFileRoute } from '@tanstack/react-router';
import { ActivityPage } from '@/components/ioternak/pages';
import { pageHead } from '@/lib/ioternak/data';
export const Route=createFileRoute('/aktivitas-rfid')({validateSearch:(s:Record<string,unknown>)=>({q:typeof s.q==='string'?s.q:''}),head:()=>pageHead('Aktivitas RFID','Catatan pemeriksaan RFID dan hasil verifikasi vaksin hewan.'),component:Page});
function Page(){const s=Route.useSearch();const navigate=Route.useNavigate();return <ActivityPage history={false} query={s.q} onQuery={q=>navigate({search:{q},replace:true})}/>;}
