import { useState, useEffect } from 'react';
import { CreateAdBanner } from './components/CreateAdBanner';
import { GameBanner } from './components/GameBanner';
import * as Dialog from '@radix-ui/react-dialog';
import logoImg from './assets/logo-nlw-esport.svg';
import { GameController } from 'phosphor-react';
import { Input } from './components/Form/Input';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/games')
      .then(response => response.json())
      .then(data => {
        setGames(data);
      });
  }, []);

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
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          );
        })}
      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <Dialog.Portal>
          <Dialog.Overlay className='fixed inset-0 bg-black/60' />
          <Dialog.Content className='fixed top-1/2 left-1/2 z-50 w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-[#242634] py-8 px-10 text-white shadow-lg shadow-black/25'>
            <Dialog.Title className='text-2xl font-black'>
              Publique um anuncio
            </Dialog.Title>

            <form className='mt-8 flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='game'
                  className='font-semibold'
                >
                  Qual o Game
                </label>
                <Input
                  id='game'
                  type='text'
                  placeholder='Selecione o game que deseja jogar'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='name'
                  className='font-semibold'
                >
                  Seu nome ou nickname
                </label>
                <Input
                  id='name'
                  type='text'
                  placeholder='Como te chama dentro do game?'
                />
              </div>
              <div className='grid grid-cols-2 gap-6'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor='yearsPlaying'>Joga há quantos anos?</label>
                  <Input
                    id='yearsPlaying'
                    type='number'
                    placeholder='tudo bem ser zero'
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor='discord'>Qual o seu discord</label>
                  <Input
                    id='discord'
                    type='text'
                    placeholder='Usuário#0000'
                  />
                </div>
              </div>
              <div className='grid grid-cols-2 gap-6'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor='weekDays'>Quando costuma jogar?</label>
                  <div className='flex flex-wrap justify-center gap-1'>
                    <button className='h-10 w-10 rounded bg-zinc-900'>D</button>
                    <button className='h-10 w-10 rounded bg-zinc-900'>S</button>
                    <button className='h-10 w-10 rounded bg-zinc-900'>T</button>
                    <button className='h-10 w-10 rounded bg-zinc-900'>Q</button>
                    <button className='h-10 w-10 rounded bg-zinc-900'>Q</button>
                    <button className='h-10 w-10 rounded bg-zinc-900'>S</button>
                    <button className='h-10 w-10 rounded bg-zinc-900'>S</button>
                  </div>
                </div>
                <div className='flex flex-1 flex-col gap-2'>
                  <label htmlFor='discord'>Qual horario do dia?</label>
                  <div className='flex gap-4'>
                    <Input
                      id='hourStart'
                      type='time'
                      placeholder='De'
                    />
                    <Input
                      id='hourEnd'
                      type='time'
                      placeholder='Ate'
                    />
                  </div>
                </div>
              </div>
              <div className='mt-2 flex gap-4 text-sm'>
                <Input
                  type='checkbox'
                  title='checkbox'
                />
                Costumo me conectar ao chat de voz
              </div>
              <footer className=' mt-4 grid grid-cols-2 gap-4'>
                <Dialog.Close
                  type='button'
                  className='h-12 rounded-md bg-zinc-500 px-5 hover:bg-zinc-600'
                >
                  Cancelar
                </Dialog.Close>
                <button
                  type='submit'
                  className='flex h-12 items-center justify-center gap-4 rounded-md bg-violet-500 px-5 hover:bg-violet-600'
                >
                  <GameController size={24} />
                  Encontra duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
