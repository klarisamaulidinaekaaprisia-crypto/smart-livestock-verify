import { createFileRoute } from '@tanstack/react-router';
import { PMKPage } from '@/components/ioternak/pages';
import { pageHead } from '@/lib/ioternak/data';
export const Route = createFileRoute('/status-pmk')({ head:()=>pageHead('Status PMK','Monitoring pencegahan PMK melalui status verifikasi vaksin.'), component:PMKPage });
