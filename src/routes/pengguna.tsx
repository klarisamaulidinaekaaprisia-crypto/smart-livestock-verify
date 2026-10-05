import { createFileRoute } from '@tanstack/react-router';
import { UsersPage } from '@/components/ioternak/pages';
import { pageHead } from '@/lib/ioternak/data';
export const Route = createFileRoute('/pengguna')({ head:()=>pageHead('Pengguna','Profil petugas administrator IoTernak.'), component:UsersPage });
