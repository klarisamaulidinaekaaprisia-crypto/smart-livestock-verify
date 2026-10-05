import { createFileRoute } from '@tanstack/react-router';
import { VerificationPage } from '@/components/ioternak/pages';
import { pageHead } from '@/lib/ioternak/data';
export const Route = createFileRoute('/verifikasi-rfid')({ head:()=>pageHead('Verifikasi RFID','Pindai RFID dan verifikasi status vaksinasi hewan.'), component:VerificationPage });
