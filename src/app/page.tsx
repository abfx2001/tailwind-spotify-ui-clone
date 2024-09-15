import Aside from '@/components/Aside/page';
import Footer from '@/components/Footer/page';
import PlaylistDown from '@/components/PlaylistDown/page';
import PlaylistTop from '@/components/PlaylistTop/page';
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">

        <Aside />

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
            <PlaylistTop />
            <PlaylistTop />
            <PlaylistTop />
            <PlaylistTop />
            <PlaylistTop />
            <PlaylistTop />
          </div>

          <h1 className='font-bold text-2xl mt-10'>Made for Arthur Batista Furlan</h1>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <PlaylistDown />
            <PlaylistDown />
            <PlaylistDown />
            <PlaylistDown />
            <PlaylistDown />
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}
