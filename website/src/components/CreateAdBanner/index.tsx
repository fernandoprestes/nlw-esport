import { MagnifyingGlassPlus } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';

export function CreateAdBanner() {
  return (
    <div className='self-stretch overflow-hidden rounded-t-lg bg-nlw-gradient pt-1'>
      <div className='flex items-center justify-between rounded-b-none bg-[#2a2634] px-8 py-6'>
        <div>
          <strong className='block text-2xl font-black text-white'>
            Não encontrou seu duo?
          </strong>
          <p className='block text-zinc-400'>
            Publique um anúncio para encontrar novos players!
          </p>
        </div>
        <Dialog.Trigger
          type='button'
          className='flex items-center gap-3 rounded bg-violet-500 py-3 px-4 text-white hover:bg-violet-600'
        >
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}
