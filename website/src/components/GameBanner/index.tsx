interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
  return (
    <a
      className='relative overflow-hidden rounded-lg'
      href='#'
      aria-label='game card'
    >
      <img
        src={props.bannerUrl}
        alt={props.title}
      />
      <div className='absolute bottom-0 flex w-full flex-col gap-1 bg-game-gradient px-2 pt-16 pb-4'>
        <strong className='block font-bold text-white'>{props.title}</strong>
        <span className='block text-sm text-zinc-300'>
          {props.adsCount} anúncio(s)
        </span>
      </div>
    </a>
  );
}
