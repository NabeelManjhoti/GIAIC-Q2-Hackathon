import { Poppins } from "next/font/google"
import Image from "next/image"

const poppins = Poppins({
    subsets: ["latin"],
    weight: "500"
})

export default function Browse() {
    return (
        <div className="parent w-full flex 2xl:justify-center">
            <div className="child w-[90%] 2xl:w-[1440px] mt-10 mx-auto">
                <div className={`${poppins.className} flex flex-col items-center text-textCol`}>
                    <h2 className="text-[20px] md:text-[32px] font-bold">Browse The Range</h2>
                    <p className="text-[15px] md:text-[20px] font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 justify-center text-textCol">
                    <div className="img1 flex flex-col gap-5 items-center">
                        <Image
                            src={"/dining.svg"}
                            alt="dining"
                            width={381}
                            height={480}
                        />
                        <p className={`${poppins.className} text-[24px] font-semibold`}>Dining</p>
                    </div>

                    <div className="img2 flex flex-col gap-5 items-center text-textCol">
                        <Image
                            src={"/living.svg"}
                            alt="Living"
                            width={381}
                            height={480}
                        />
                        <p className={`${poppins.className} text-[24px] font-semibold`}>Living</p>
                    </div>

                    <div className="img3 flex flex-col gap-5 items-center text-textCol">
                        <Image
                            src={"/bedroom.svg"}
                            alt="bedroom"
                            width={381}
                            height={480}
                        />
                        <p className={`${poppins.className} text-[24px] font-semibold`}>Bedroom</p>
                    </div>
                </div>
            </div>
        </div>
    )
}