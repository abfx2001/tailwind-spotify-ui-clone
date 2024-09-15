import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, ListVideo, Laptop2, Volume1, Maximize2} from 'lucide-react'
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full' />
            <div className='w-3 h-3 bg-yellow-500 rounded-full' />
            <div className='w-3 h-3 bg-green-500 rounded-full' />
          </div>

          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <HomeIcon />
              Home
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Search />
              Search
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Library />
              Your Library
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Daily Mix 1</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Hard Rock</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Animes</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Indie só que bom</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>BASS BOOSTED</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>funk de qualidade</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Rock Triste</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Nu Metal Era</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Lo-fi</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/50 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/50 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-bold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/ok-computer-album.jpg" width={104} height={104} alt='Capa Album Ok Computer banda Radiohead' />
              <strong>Ok Computer</strong>
              <button className='size-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/ok-computer-album.jpg" width={104} height={104} alt='Capa Album Ok Computer banda Radiohead' />
              <strong>Ok Computer</strong>
              <button className='size-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/ok-computer-album.jpg" width={104} height={104} alt='Capa Album Ok Computer banda Radiohead' />
              <strong>Ok Computer</strong>
              <button className='size-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/ok-computer-album.jpg" width={104} height={104} alt='Capa Album Ok Computer banda Radiohead' />
              <strong>Ok Computer</strong>
              <button className='size-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/ok-computer-album.jpg" width={104} height={104} alt='Capa Album Ok Computer banda Radiohead' />
              <strong>Ok Computer</strong>
              <button className='size-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/ok-computer-album.jpg" width={104} height={104} alt='Capa Album Ok Computer banda Radiohead' />
              <strong>Ok Computer</strong>
              <button className='size-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h1 className='font-bold text-2xl mt-10'>Made for Arthur Batista Furlan</h1>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10'>
              	<Image src="/ok-computer-album.jpg" className='w-full' width={104} height={104} alt='Capa Album Ok Computer banda Radiohead' />
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-500'>Travis Scott, GreenDay</span>
            </a>
            <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10'>
              	<Image src="/ok-computer-album.jpg" className='w-full' width={104} height={104} alt='Capa Album Ok Computer banda Radiohead' />
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-500'>Travis Scott, GreenDay</span>
            </a>
            <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10'>
              	<Image src="/ok-computer-album.jpg" className='w-full' width={104} height={104} alt='Capa Album Ok Computer banda Radiohead' />
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-500'>Travis Scott, GreenDay</span>
            </a>
            <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10'>
              	<Image src="/ok-computer-album.jpg" className='w-full' width={104} height={104} alt='Capa Album Ok Computer banda Radiohead' />
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-500'>Travis Scott, GreenDay</span>
            </a>
            <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10'>
              	<Image src="/ok-computer-album.jpg" className='w-full' width={104} height={104} alt='Capa Album Ok Computer banda Radiohead' />
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-500'>Travis Scott, GreenDay</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className='flex items-center gap-3'>
          <Image src="/ok-computer-album.jpg" width={72} height={72} alt='Capa Album Ok Computer banda Radiohead' />
          <div className='flex flex-col'>
            <strong className='font-normal'>Exit Music</strong>
            <span className='text-xs text-zinc-400'>Radiohead</span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-6'>
            <Shuffle size={20} className='text-zinc-200' />
            <SkipBack size={20} className='text-zinc-200' />

            <button className='size-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
              <Play />
            </button >

            <SkipForward size={20} className='text-zinc-200' />
            <Repeat size={20} className='text-zinc-200' />
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-500'>0:35</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-20 h-1 rounded-full'></div>
            </div>
            <span className='text-xs text-zinc-500'>3:14</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Mic2 size={20} />
          <ListVideo size={20} />
          <Laptop2 size={20} />
          <div className='flex items-center gap-2'>
            <Volume1 />
            <div className='h-1 rounded-full w-20 bg-zinc-600'>
              <div className='bg-zinc-200 w-16 h-1 rounded-full'></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>
    </div>
  );
}
