import { Poppins } from "next/font/google"
import Image from "next/image"

const poppins = Poppins({
    weight: "500",
    subsets: ["latin"],
})

export default function OurProducts() {
    return (
        <div className="parent w-full flex 2xl:justify-center">
            <div className="child w-[95%] 2xl:w-[1440px] mx-auto mt-8 text-textCol flex flex-col items-center">
                <h2 className={`${poppins.className} text-[40px] font-bold text-center`}>Our Products</h2>
                <div className={`${poppins.className} grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-x-5 md:gap-x-10 xl:gap-x-5 2xl:gap-x-20 gap-y-5 mt-5`}>
                    <div className="w-[285px] h-[446px] flex flex-col bg-[#F4F5F7]">
                        <Image
                            src={"product1.svg"}
                            alt="product1"
                            width={285}
                            height={301}
                        />
                        <div className="absolute ml-56 mt-5">
                            <div className="w-[48px] h-[48px] bg-[#E97171] rounded-full flex items-center justify-center">
                                <p className={`${poppins.className} text-[16px] text-white`}>-30%</p>
                            </div>
                        </div>
                        <h3 className="text-[24px] font-semibold pl-4 pt-2">Syltherine</h3>
                        <p className="text-[16px] font-medium text-[#898989] pl-4 pt-1">Stylish cafe chair</p>

                        <div className="flex gap-5 pl-4 pt-1">
                            <p className="text-[20px] font-semibold">Rp 2.500.000</p>
                            <p className="text-[#B0B0B0] text-[16px] font-normal line-through">Rp 3.500.000</p>
                        </div>
                    </div>

                    <div className="w-[285px] h-[446px] flex flex-col bg-[#F4F5F7]">
                        <Image
                            src={"product2.svg"}
                            alt="product2"
                            width={285}
                            height={301}
                        />
                        <h3 className="text-[24px] font-semibold pl-4 pt-2">Leviosa</h3>
                        <p className="text-[16px] font-medium text-[#898989] pl-4 pt-1">Stylish cafe chair</p>

                        <div className="flex gap-5 pl-4 pt-1">
                            <p className="text-[20px] font-semibold">Rp 2.500.000</p>
                            {/* <p className="text-[#B0B0B0] text-[16px] font-normal line-through">Rp 3.500.000</p> */}
                        </div>
                    </div>

                    <div className="w-[285px] h-[446px] flex flex-col bg-[#F4F5F7]">
                        <Image
                            src={"product3.svg"}
                            alt="product3"
                            width={285}
                            height={301}
                        />
                        <div className="absolute ml-56 mt-5">
                            <div className="w-[48px] h-[48px] bg-[#E97171] rounded-full flex items-center justify-center">
                                <p className={`${poppins.className} text-[16px] text-white`}>-50%</p>
                            </div>
                        </div>
                        <h3 className="text-[24px] font-semibold pl-4 pt-2">Lolito</h3>
                        <p className="text-[16px] font-medium text-[#898989] pl-4 pt-1">Luxury Big Sofa</p>

                        <div className="flex gap-5 pl-4 pt-1">
                            <p className="text-[20px] font-semibold">Rp 7.000.000</p>
                            <p className="text-[#B0B0B0] text-[16px] font-normal line-through">Rp 14.000.000</p>
                        </div>
                    </div>

                    <div className="w-[285px] h-[446px] flex flex-col bg-[#F4F5F7]">
                        <Image
                            src={"product4.svg"}
                            alt="product4"
                            width={285}
                            height={301}
                        />
                        <div className="absolute ml-56 mt-5">
                            <div className="w-[48px] h-[48px] bg-[#2EC0AB] rounded-full flex items-center justify-center">
                                <p className={`${poppins.className} text-[16px] text-white`}>New</p>
                            </div>
                        </div>
                        <h3 className="text-[24px] font-semibold pl-4 pt-2">Respira</h3>
                        <p className="text-[16px] font-medium text-[#898989] pl-4 pt-1">Outdoor bar table and stool</p>

                        <div className="flex gap-5 pl-4 pt-1">
                            <p className="text-[20px] font-semibold">Rp 5.000.000</p>
                            {/* <p className="text-[#B0B0B0] text-[16px] font-normal line-through">Rp 3.500.000</p> */}
                        </div>
                    </div>

                    <div className="w-[285px] h-[446px] flex flex-col bg-[#F4F5F7]">
                        <Image
                            src={"product5.svg"}
                            alt="product5"
                            width={285}
                            height={301}
                        />
                        <h3 className="text-[24px] font-semibold pl-4 pt-2">Grifo</h3>
                        <p className="text-[16px] font-medium text-[#898989] pl-4 pt-1">Night Lamp</p>

                        <div className="flex gap-5 pl-4 pt-1">
                            <p className="text-[20px] font-semibold">Rp 1.500.000</p>
                            {/* <p className="text-[#B0B0B0] text-[16px] font-normal line-through">Rp 3.500.000</p> */}
                        </div>
                    </div>

                    <div className="w-[285px] h-[446px] flex flex-col bg-[#F4F5F7]">
                        <Image
                            src={"product6.svg"}
                            alt="product6"
                            width={285}
                            height={301}
                        />
                        <div className="absolute ml-56 mt-5">
                            <div className="w-[48px] h-[48px] bg-[#2EC0AB] rounded-full flex items-center justify-center">
                                <p className={`${poppins.className} text-[16px] text-white`}>New</p>
                            </div>
                        </div>
                        <h3 className="text-[24px] font-semibold pl-4 pt-2">Muggo</h3>
                        <p className="text-[16px] font-medium text-[#898989] pl-4 pt-1">small mug</p>

                        <div className="flex gap-5 pl-4 pt-1">
                            <p className="text-[20px] font-semibold">Rp 150.000</p>
                            {/* <p className="text-[#B0B0B0] text-[16px] font-normal line-through">Rp 3.500.000</p> */}
                        </div>
                    </div>

                    <div className="w-[285px] h-[446px] flex flex-col bg-[#F4F5F7]">
                        <Image
                            src={"product7.svg"}
                            alt="product7"
                            width={285}
                            height={301}
                        />
                        <div className="absolute ml-56 mt-5">
                            <div className="w-[48px] h-[48px] bg-[#E97171] rounded-full flex items-center justify-center">
                                <p className={`${poppins.className} text-[16px] text-white`}>-50%</p>
                            </div>
                        </div>
                        <h3 className="text-[24px] font-semibold pl-4 pt-2">Pingky</h3>
                        <p className="text-[16px] font-medium text-[#898989] pl-4 pt-1">cute bed set</p>

                        <div className="flex gap-5 pl-4 pt-1">
                            <p className="text-[20px] font-semibold">Rp 7.000.000</p>
                            <p className="text-[#B0B0B0] text-[16px] font-normal line-through">Rp 14.000.000</p>
                        </div>
                    </div>

                    <div className="w-[285px] h-[446px] flex flex-col bg-[#F4F5F7]">
                        <Image
                            src={"product8.svg"}
                            alt="product8"
                            width={285}
                            height={301}
                        />
                        <div className="absolute ml-56 mt-5">
                            <div className="w-[48px] h-[48px] bg-[#2EC0AB] rounded-full flex items-center justify-center">
                                <p className={`${poppins.className} text-[16px] text-white`}>New</p>
                            </div>
                        </div>
                        <h3 className="text-[24px] font-semibold pl-4 pt-2">Potty</h3>
                        <p className="text-[16px] font-medium text-[#898989] pl-4 pt-1">Minimalist flower pot</p>

                        <div className="flex gap-5 pl-4 pt-1">
                            <p className="text-[20px] font-semibold">Rp 5.00.000</p>
                            {/* <p className="text-[#B0B0B0] text-[16px] font-normal line-through">Rp 3.500.000</p> */}
                        </div>
                    </div>
                </div>

                <button className={`${poppins.className} w-[245px] h-[48px] border border-[#B88E2F] text-[#B88E2F] text-[16px] font-semibold mt-8`}>Show More</button>
            </div>
        </div>
    )
}