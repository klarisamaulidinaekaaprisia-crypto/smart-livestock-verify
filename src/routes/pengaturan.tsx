import { createFileRoute } from '@tanstack/react-router';
import { SettingsPage } from '@/components/ioternak/pages';
import { pageHead } from '@/lib/ioternak/data';
export const Route = createFileRoute('/pengaturan')({ head:()=>pageHead('Pengaturan','Preferensi sistem verifikasi vaksin IoTernak.'), component:SettingsPage });
