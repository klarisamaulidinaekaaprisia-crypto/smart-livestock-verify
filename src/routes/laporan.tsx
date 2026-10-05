import { createFileRoute } from '@tanstack/react-router';
import { ReportsPage } from '@/components/ioternak/pages';
import { pageHead } from '@/lib/ioternak/data';
export const Route = createFileRoute('/laporan')({ head:()=>pageHead('Laporan','Laporan hewan, vaksinasi dan pemeriksaan RFID.'), component:ReportsPage });
