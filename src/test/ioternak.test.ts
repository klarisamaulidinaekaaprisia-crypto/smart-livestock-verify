import { describe,it,expect,vi } from 'vitest';
import { initialAnimals,verifyAnimal,mockRFIDTransport } from '@/lib/ioternak/data';
import { animalInputSchema } from '@/lib/ioternak/validation';
describe('IoTernak verification',()=>{
 it('accepts an animal with a vaccination record',()=>{const animal=initialAnimals.find(a=>a.id==='RFID-001245');expect(animal).toBeDefined();if(!animal)return;expect(verifyAnimal(animal).eligible).toBe(true);});
 it('rejects an animal without vaccination',()=>{const animal=initialAnimals.find(a=>a.id==='RFID-001247');expect(animal).toBeDefined();if(!animal)return;expect(verifyAnimal(animal).eligible).toBe(false);});
 it('rejects a missing vaccination date',()=>{const animal=initialAnimals[0];if(!animal)throw new Error('Missing mock');expect(verifyAnimal({...animal,lastVaccine:null}).eligible).toBe(false);});
 it('validates RFID format and age',()=>{expect(animalInputSchema.safeParse({id:'invalid',type:'Sapi',sex:'Jantan',age:-2,vaccinated:'no',date:''}).success).toBe(false);});
 it('requires vaccination date for vaccinated animals',()=>{expect(animalInputSchema.safeParse({id:'RFID-001251',type:'Sapi',sex:'Jantan',age:2,vaccinated:'yes',date:''}).success).toBe(false);});
 it('receives an RFID tag asynchronously',async()=>{vi.useFakeTimers();const promise=mockRFIDTransport.receiveTag(new AbortController().signal);await vi.advanceTimersByTimeAsync(2200);await expect(promise).resolves.toBe('RFID-001245');vi.useRealTimers();});
 it('cancels scanning',async()=>{const controller=new AbortController();const promise=mockRFIDTransport.receiveTag(controller.signal);controller.abort();await expect(promise).rejects.toMatchObject({name:'AbortError'});});
});
