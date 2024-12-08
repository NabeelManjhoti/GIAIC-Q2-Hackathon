import { Poppins } from "next/font/google"

const poppins = Poppins({
    weight: "500",
    subsets: ["latin"],
})

export default function Inspirations() {
    return (
        <div className="parent w-full flex 2xl: justify-center">
            <div className={`child w-full 2xl:w-[1440px] px-10 bg-[#FCF8F3] flex flex-col xl:flex-row items-center justify-between mt-10 text-textCol`}>
                <div className="flex flex-col">
                    <h2 className="text-[40px] font-bold">50+ Beautiful rooms <br />
                        inspiration</h2>
                    <p className="text-[16px]">Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you</p>
                    <button className="w-[176px] h-[48px] bg-[#B88E2F] text-white text-[16px] font-semibold mt-10">Explore More</button>
                </div>

                <div className="flex flex-col xl:flex-row xl:py-10 mt-5 gap-5">
                    <img
                        src="/inspiration1.svg"
                        alt="inspiration1"
                        width={404}
                        height={582}
                    />
                    <img
                        className="mb-24"
                        src="/inspiration2.svg"
                        alt="inspiration2"
                        width={372}
                        height={486}
                    />
                </div>
            </div>
        </div>
    )
}