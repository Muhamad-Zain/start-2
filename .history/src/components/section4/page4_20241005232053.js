import Image from 'next/image'
import style from './style.module.css'
import ImgMen from '@/assets/img/men.png'
import ImgGrils from '@/assets/img/grils.png'
import { GrInstagram } from "react-icons/gr";
import { RiFacebookCircleLine } from "react-icons/ri";

import Link from 'next/link';



export default function Page4(){
    return(
        <section className={style.bg} >
            <div className='text-center text-white z-10 relative px-5 py-10 font-serif text-xl '>
                <p className='p-2 font-bold '>Assalamualaikum wr. wb.</p>
                <p>Dengan memohon ramat Allah SWT. dan dengan segenap kerendahan hati.
                    perkanankanla kami mengundang Bapak/Ibu Saudara/i untuk hadir di acara pernikahan kami : </p>
            </div>
            <div className='bg-black bg-opacity-25 w-[90%] p-2 my-20 m-auto z-10 relative rounded-3xl'>
                <div className='bg-black bg-opacity-20 border-double border-4  rounded-3xl m-auto'>
                    <div className='w-1/2 m-auto rounded-full border-4 border-black border-double bg-white my-10'>
                        <Image src={ImgMen} alt='img-men' className='h-[14rem]' />
                    </div>
                    <div className='text-center text-white  py-5'>
                        <h3 className='sacramento text-5xl font-bold'>Dilan</h3>
                        <p className='leading-4'>Putra Pertama dari<br/> Bapak Lorem dan Ibu Ipsum </p>
                    </div>
                        <div className='w-10 flex justify-around m-auto'>
                            <Link href='' >
                                <GrInstagram />
                            </Link>
                            <Link href='' >
                                <RiFacebookCircleLine />
                            </Link>
                        </div>
                    <div className='flex justify-between items-center text-white w-1/2 m-auto my-20'>
                        <div className='border w-20 border-white'/>
                        <h1 className='sacramento font-bold text-7xl mx-2'>&</h1>
                        <div className='border w-20 border-white'/>
                    </div>
                    <div className='w-1/2 m-auto rounded-full border-4 border-black border-double bg-white my-10'>
                        <Image src={ImgGrils} alt='img-men' className='h-[14rem]' />
                    </div>
                    <div className='text-center text-white  py-5'>
                        <h3 className='sacramento text-5xl font-bold'>Milea</h3>
                        <p className='leading-4'>Putra Pertama dari<br/> Bapak Lorem dan Ibu Ipsum </p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}