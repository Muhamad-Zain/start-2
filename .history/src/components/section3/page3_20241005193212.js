import Image from "next/image";
import ImgAnimation from "@/assets/img/animate/flower.svg"


export default function Page3 (){
    return(
        <section>
            <Image src={ImgAnimation} alt="Img-Naimation" className="text-white bg-slate-500"  />
        </section>
    )
}