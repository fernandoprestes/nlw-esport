import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Select from '@radix-ui/react-select';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { CaretDown, Check, GameController } from 'phosphor-react';
import { Input } from '../Form/Input';
import { Game } from '../../@types/Game';
import { useEffect, useState, FormEvent } from 'react';
import axios from 'axios';

export function CreateAdModal() {
  const [games, setGames] = useState<Game[]>([]);
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState<boolean>(false);

  async function handleCreateAd(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    if (!data.name) return;

    try {
      await axios.post(`http://localhost:3000/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel: useVoiceChannel,
      });
      alert('Anuncio criado com sucesso!');
    } catch (error) {
      alert('Erro ao criado um anuncio!');
      console.log(error);
    }
  }

  useEffect(() => {
    axios('http://localhost:3000/games').then(response => {
      setGames(response.data);
    });
  }, []);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className='fixed inset-0 bg-black/60' />
      <Dialog.Content className='fixed top-1/2 left-1/2 z-50 w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-[#242634] py-8 px-10 text-white shadow-lg shadow-black/25'>
        <Dialog.Title className='text-2xl font-black'>
          Publique um anuncio
        </Dialog.Title>

        <form
          onSubmit={handleCreateAd}
          className='mt-8 flex flex-col gap-4'
        >
          <div className='flex flex-col gap-2'>
            <label htmlFor='Game'>Qual o game?</label>
            <Select.Root name='game'>
              <Select.Trigger
                aria-label='Games'
                className='flex justify-between rounded bg-zinc-900 py-3 px-4 text-sm'
              >
                <Select.Value placeholder='Selecione o game que deseja jogar' />
                <Select.Icon>
                  <CaretDown />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal className='z-50'>
                <Select.Content className='flex justify-between gap-4 rounded bg-zinc-900 py-3 px-4 text-sm text-white'>
                  <Select.Viewport className='flex flex-col gap-4'>
                    {games.map(game => {
                      return (
                        <Select.Item
                          key={game.id}
                          value={game.id}
                          className='flex items-center justify-between text-white'
                        >
                          <Select.ItemText>{game.title}</Select.ItemText>
                          <Select.ItemIndicator>
                            <Check />
                          </Select.ItemIndicator>
                        </Select.Item>
                      );
                    })}
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
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
              name='name'
              type='text'
              placeholder='Como te chama dentro do game?'
            />
          </div>
          <div className='grid grid-cols-2 gap-6'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='yearsPlaying'>Joga há quantos anos?</label>
              <Input
                id='yearsPlaying'
                name='yearsPlaying'
                type='number'
                placeholder='tudo bem ser zero'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='discord'>Qual o seu discord</label>
              <Input
                id='discord'
                name='discord'
                type='text'
                placeholder='Usuário#0000'
              />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-6'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='weekDays'>Quando costuma jogar?</label>

              <ToggleGroup.Root
                type='multiple'
                className='flex flex-wrap justify-center gap-1'
                value={weekDays}
                onValueChange={setWeekDays}
              >
                <ToggleGroup.Item
                  value='0'
                  title='Domingo'
                  className={`h-10 w-10 rounded  ${
                    weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                >
                  D
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value='1'
                  title='Segunda-feira'
                  className={`h-10 w-10 rounded  ${
                    weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value='2'
                  title='Terça-feira'
                  className={`h-10 w-10 rounded  ${
                    weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                >
                  T
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value='3'
                  title='Quarta-feira'
                  className={`h-10 w-10 rounded  ${
                    weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value='4'
                  title='Quinta-feira'
                  className={`h-10 w-10 rounded  ${
                    weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value='5'
                  title='Sexta-feira'
                  className={`h-10 w-10 rounded  ${
                    weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value='6'
                  title='Sabado'
                  className={`h-10 w-10 rounded  ${
                    weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                >
                  S
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </div>
            <div className='flex flex-1 flex-col gap-2'>
              <label htmlFor='discord'>Qual horario do dia?</label>
              <div className='flex flex-col gap-2'>
                <Input
                  id='hourStart'
                  name='hourStart'
                  type='time'
                  placeholder='De'
                />
                <Input
                  id='hourEnd'
                  name='hourEnd'
                  type='time'
                  placeholder='Ate'
                />
              </div>
            </div>
          </div>
          <label className='mt-2 flex items-center gap-4 text-sm'>
            <Checkbox.Root
              checked={useVoiceChannel}
              onCheckedChange={checked => {
                if (checked === true) {
                  setUseVoiceChannel(true);
                } else {
                  setUseVoiceChannel(false);
                }
              }}
              className='h-6 w-6 rounded bg-zinc-900 p-1'
            >
              <Checkbox.Indicator>
                <Check className='h-4 w-4 text-emerald-400' />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </label>
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
  );
}
