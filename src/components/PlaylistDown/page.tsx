import Image from "next/image";

export default function PlaylistDown() {
    return (
        <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10'>
            <Image src="/ok-computer-album.jpg" className='w-full' width={104} height={104} alt='Capa Album Ok Computer banda Radiohead' />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-500'>Travis Scott, GreenDay</span>
        </a>
    )
}