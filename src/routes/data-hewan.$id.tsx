import { createFileRoute } from '@tanstack/react-router';
import { AnimalDetailPage } from '@/components/ioternak/pages';
import { pageHead } from '@/lib/ioternak/data';
export const Route=createFileRoute('/data-hewan/$id')({head:({params})=>pageHead(`Detail Hewan ${params.id}`,'Identitas hewan, status vaksin PMK dan riwayat vaksinasi.'),component:Page});
function Page(){const {id}=Route.useParams();return <AnimalDetailPage id={id}/>;}
