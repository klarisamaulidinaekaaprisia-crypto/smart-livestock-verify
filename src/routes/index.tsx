import { createFileRoute } from '@tanstack/react-router';
import { OverviewPage } from '@/components/ioternak/pages';
import { pageHead } from '@/lib/ioternak/data';
export const Route = createFileRoute('/')({ head:()=>pageHead('Overview','Monitor data hewan, vaksinasi, dan verifikasi RFID.'), component:OverviewPage });
