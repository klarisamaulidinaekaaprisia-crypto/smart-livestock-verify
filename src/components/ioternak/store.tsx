import { createContext, useContext, useState, type ReactNode } from 'react';
import { initialAnimals, initialActivities, verifyAnimal, type Animal, type Activity } from '@/lib/ioternak/data';
type Store = { animals:Animal[]; activities:Activity[]; addAnimal:(a:Animal)=>void; verify:(id:string)=>ReturnType<typeof verifyAnimal> | undefined; };
const StoreContext=createContext<Store | null>(null);
export function LivestockProvider({children}:{children:ReactNode}) {
  const [animals,setAnimals]=useState(initialAnimals);
  const [activities,setActivities]=useState(initialActivities);
  function verify(id:string) {
    const animal=animals.find(a=>a.id===id.trim().toUpperCase());
    if(!animal) return undefined;
    const result=verifyAnimal(animal);
    const now=new Date();
    setActivities(prev=>[{id:`check-${now.getTime()}`,animalId:animal.id,type:animal.type,checkedAt:now.toLocaleString('id-ID',{day:'2-digit',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit',timeZone:'Asia/Jakarta'}),vaccinated:animal.vaccinated,eligible:result.eligible,officer:'Admin'},...prev]);
    return result;
  }
  return <StoreContext.Provider value={{animals,activities,addAnimal:a=>setAnimals(prev=>[a,...prev]),verify}}>{children}</StoreContext.Provider>;
}
export function useLivestock() { const value=useContext(StoreContext); if(!value) throw new Error('Livestock provider missing'); return value; }
