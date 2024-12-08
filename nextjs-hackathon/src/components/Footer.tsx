import { Poppins } from "next/font/google"

const poppins = Poppins({
    weight: "500",
    subsets: ["latin"],
})

export default function Footer() {
    return (
        <div className="parent w-full flex 2xl:justify-center">
            <div className="child w-[95%] 2xl:w-[1440px] mx-auto">
                <div className={`${poppins.className} grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-between h-[312px]`}>
                    <div className="logo flex flex-col">
                        <h2 className="text-[24px] font-bold mb-20">Funiro.</h2>
                        <p className="text-[16px] font-normal text-[#9F9F9F]">400 University Drive Suite 200 Coral <br /> Gables, <br />
                            FL 33134 USA</p>
                    </div>

                    <div className="links flex flex-col">
                        <h4 className="text-[#9F9F9F]">Links</h4>
                        <div className="flex flex-col gap-y-5 mt-5">
                            <h4>Home</h4>
                            <h4>Shop</h4>
                            <h4>About</h4>
                            <h4>Contact</h4>
                        </div>
                    </div>

                    <div className="flex flex-col mb-10">
                        <h4 className="text-[#9F9F9F]">Help</h4>
                        <div className="flex flex-col gap-y-5 mt-5">
                            <h4>Payments Options</h4>
                            <h4>Returns</h4>
                            <h4>Privacy Policies</h4>
                        </div>
                    </div>

                    <div className="flex flex-col mb-36">
                        <h4 className="text-[#9F9F9F]">Newsletter</h4>
                        <div className="flex mt-8 gap-5">
                            <p className="underline text-[#9F9F9F]">Enter your Email Adress</p>
                            <p className="underline">SUBSCRIBE</p>
                        </div>
                    </div>
                </div>

                <p className={`${poppins.className} font-normal mt-20 xl:mt-5`}>2023 furino. All rights reserved.</p>
            </div>
        </div>
    )
}