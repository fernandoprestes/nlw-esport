import { MagnifyingGlassPlus } from 'phosphor-react';

import logoImg from './assets/logo-nlw-esport.svg';

function App() {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-center py-20'>
        <img
          src={logoImg}
          alt='logo nlw-esports'
        />
      </div>
      <h1 className='text-center text-6xl font-black text-white'>
        Seu{' '}
        <span className='bg-nlw-gradient bg-clip-text text-transparent'>
          duo
        </span>{' '}
        esta aqui
      </h1>
      <div className='grid grid-cols-6 gap-6 pt-16 pb-8'>
        <a
          className='relative overflow-hidden rounded-lg'
          href='#'
          aria-label='game card'
        >
          <img
            src='/game1.png'
            alt='game1'
          />
          <div className='absolute bottom-0 flex w-full flex-col gap-1 bg-game-gradient px-2 pt-16 pb-4'>
            <strong className='block font-bold text-white'>
              League of Legends
            </strong>
            <span className='block text-sm text-zinc-300'>4 anúncios</span>
          </div>
        </a>
        <a
          className='relative overflow-hidden rounded-lg'
          href='#'
          aria-label='game card'
        >
          <img
            src='/game2.png'
            alt='game2'
          />
          <div className='absolute bottom-0 flex w-full flex-col gap-1 bg-game-gradient px-2 pt-16 pb-4'>
            <strong className='block font-bold text-white'>CS:60</strong>
            <span className='block text-sm text-zinc-300'>4 anúncios</span>
          </div>
        </a>
        <a
          className='relative overflow-hidden rounded-lg'
          href='#'
          aria-label='game card'
        >
          <img
            src='/game3.png'
            alt='game3'
          />
          <div className='absolute bottom-0 flex w-full flex-col gap-1 bg-game-gradient px-2 pt-16 pb-4'>
            <strong className='block font-bold text-white'>APEX</strong>
            <span className='block text-sm text-zinc-300'>4 anúncios</span>
          </div>
        </a>
        <a
          className='relative overflow-hidden rounded-lg'
          href='#'
          aria-label='game card'
        >
          <img
            src='/game1.png'
            alt='game1'
          />
          <div className='absolute bottom-0 flex w-full flex-col gap-1 bg-game-gradient px-2 pt-16 pb-4'>
            <strong className='block font-bold text-white'>
              League of Legends
            </strong>
            <span className='block text-sm text-zinc-300'>4 anúncios</span>
          </div>
        </a>
        <a
          className='relative overflow-hidden rounded-lg'
          href='#'
          aria-label='game card'
        >
          <img
            src='/game2.png'
            alt='game2'
          />
          <div className='absolute bottom-0 flex w-full flex-col gap-1 bg-game-gradient px-2 pt-16 pb-4'>
            <strong className='block font-bold text-white'>CS:60</strong>
            <span className='block text-sm text-zinc-300'>4 anúncios</span>
          </div>
        </a>
        <a
          className='relative overflow-hidden rounded-lg'
          href='#'
          aria-label='game card'
        >
          <img
            src='/game3.png'
            alt='game3'
          />
          <div className='absolute bottom-0 flex w-full flex-col gap-1 bg-game-gradient px-2 pt-16 pb-4'>
            <strong className='block font-bold text-white'>APEX</strong>
            <span className='block text-sm text-zinc-300'>4 anúncios</span>
          </div>
        </a>
      </div>

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
          <button
            type='button'
            className='flex items-center gap-3 rounded bg-violet-500 py-3 px-4 text-white hover:bg-violet-600'
          >
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
