import { createFileRoute } from '@tanstack/react-router';
import { AnimalsPage } from '@/components/ioternak/pages';
import { pageHead } from '@/lib/ioternak/data';
export const Route=createFileRoute('/data-hewan/')({validateSearch:(s:Record<string,unknown>)=>({q:typeof s.q==='string'?s.q:'',filter:['vaccinated','unvaccinated'].includes(String(s.filter))?String(s.filter):'all'}),head:()=>pageHead('Data Hewan','Kelola identitas dan data vaksinasi sapi dan kambing.'),component:Page});
function Page(){const s=Route.useSearch();const navigate=Route.useNavigate();return <AnimalsPage query={s.q} filter={s.filter} onQuery={q=>navigate({search:prev=>({...prev,q}),replace:true})} onFilter={filter=>navigate({search:prev=>({...prev,filter}),replace:true})}/>;}
