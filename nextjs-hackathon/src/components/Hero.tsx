import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: "500",
    subsets: ["latin"],
})

export default function Hero() {
    return (
        <div className="parent w-full flex 2xl:justify-center">
            <div className="child h-[812.53px] bg-heroImg bg-repeat bg-cover bg-bottom w-full 2xl:w-[1440px] mx-auto flex items-center justify-end">
                <div className="w-[350px] md:w-[643px] h-[620px] md:h-[443px] bg-[#FFF3E3] flex md:items-center justify-center mr-3 2xl:mr-14 md:mt-28">
                    <div className={`${poppins.className} w-[268px] md:w-[561px] h-[344px] mt-5 md:mt-0 text-textCol`}>
                        <p className="text-[16px] font-semibold">New Arrival</p>
                        <h1 className="text-[52px] font-bold text-[#B88E2F]">Discover Our <br /> New Collection</h1>
                        <p className="text-[18px] font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                        <button className="w-[222px] h-[74px] bg-[#B88E2F] mt-14 text-white text-[16px] font-bold">BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}