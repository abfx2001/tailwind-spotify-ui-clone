import { Laptop2, ListVideo, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume1 } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return(
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
    )
}