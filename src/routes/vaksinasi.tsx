import { createFileRoute } from '@tanstack/react-router';
import { VaccinationPage } from '@/components/ioternak/pages';
import { pageHead } from '@/lib/ioternak/data';
export const Route = createFileRoute('/vaksinasi')({ head:()=>pageHead('Vaksinasi','Cakupan vaksin dan jadwal vaksinasi ternak.'), component:VaccinationPage });
