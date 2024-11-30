// import React from "react";
import Imghero from "@/assets/img/hero.png";
import Image from "next/image";
import Background from '@/assets/img/bird.jpg'
import style from './style.module.css'

export default function Hero() {

    return(
    <section className={`${style.bgSection} h-[100dvh] min-h-[100vh] w-full relative overflow-x-hidden flex justify-center items-center`}>
        {/* <Image src={Background} alt="Background" className={style.bgSection} /> */}
        {/* <div className={style.bg}> test </div> */}
        <div className=" text-center bg-white bg-opacity-25 font-sans flex-col items-center w-3/4">
            <p className="text-white text-2xl mb-24 tracking-widest ">Wedding Invitation</p>
            <h2 className="sacramento text-[3rem] font-bold font-sha " style={{textShadow:'2px 2px white'}}>Dilan <span>&</span>Milea</h2>
        </div>
    </section>
    );
}