import { useState, useEffect } from 'react';
import { CreateAdBanner } from './components/CreateAdBanner';
import { GameBanner } from './components/GameBanner';
import * as Dialog from '@radix-ui/react-dialog';
import logoImg from './assets/logo-nlw-esport.svg';
import { CreateAdModal } from './components/CreateAdModal';
import { Game } from './@types/Game';

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
    <div className='container mx-auto px-4 py-8'>
      <div className='flex justify-center pb-20 pt-12'>
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
        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;
