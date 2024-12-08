import Image from "next/image"
import Link from "next/link"
import { Poppins } from 'next/font/google'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { FiMenu } from "react-icons/fi";


const poppins = Poppins({
    subsets: ["latin"],
    weight: "500"
})

export default function Navbar() {
    return (
        <div className="parent w-full flex 2xl:justify-center">
            <div className="child w-[95%] 2xl:w-[1440px] h-[100px] mx-auto bg-white flex items-center justify-between">
                <div className="logo flex gap-3">
                    <Image
                        src={"/logo.svg"}
                        alt="logo"
                        width={50}
                        height={32}
                    />
                    <Image
                        src={"/logo2.svg"}
                        alt="logo2"
                        width={130}
                        height={41}
                    />
                </div>

                <div className="hidden lg:block">
                    <ul className={`${poppins.className} text-[16px] font-medium flex gap-14 text-textCol`}>
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/shop"}>Shop</Link></li>
                        <li><Link href={"/blog"}>Blog</Link></li>
                        <li><Link href={"/contact"}>Contact</Link></li>
                    </ul>
                </div>

                <div className="hidden lg:block">
                    <div className="navIcons flex gap-10">
                        <Image
                            className="cursor-pointer"
                            src={"vector1.svg"}
                            alt="Vector1"
                            width={23.33}
                            height={18.67}
                        />
                        <Image
                            className="cursor-pointer"
                            src={"vector2.svg"}
                            alt="Vector2"
                            width={22.17}
                            height={22.17}
                        />
                        <Image
                            className="cursor-pointer"
                            src={"vector3.svg"}
                            alt="Vector3"
                            width={23.33}
                            height={20.81}
                        />
                        <Image
                            className="cursor-pointer"
                            src={"vector4.svg"}
                            alt="Vector4"
                            width={24.53}
                            height={22.06}
                        />
                    </div>
                </div>

                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger><FiMenu /></SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle><div className="logo flex gap-3">
                                    <Image
                                        src={"/logo.svg"}
                                        alt="logo"
                                        width={50}
                                        height={32}
                                    />
                                    <Image
                                        src={"/logo2.svg"}
                                        alt="logo2"
                                        width={130}
                                        height={41}
                                    />
                                </div></SheetTitle>
                                <SheetDescription>
                                    <ul className={`${poppins.className} text-[26px] font-medium flex flex-col gap-10 mt-10 text-textCol`}>
                                        <li><Link href={"/"}>Home</Link></li>
                                        <li><Link href={"/shop"}>Shop</Link></li>
                                        <li><Link href={"/blog"}>Blog</Link></li>
                                        <li><Link href={"/contact"}>Contact</Link></li>
                                    </ul>

                                    <div className="navIcons flex flex-col mt-10 gap-10">
                                        <Image
                                            className="cursor-pointer"
                                            src={"vector1.svg"}
                                            alt="Vector1"
                                            width={23.33}
                                            height={18.67}
                                        />
                                        <Image
                                            className="cursor-pointer"
                                            src={"vector2.svg"}
                                            alt="Vector2"
                                            width={22.17}
                                            height={22.17}
                                        />
                                        <Image
                                            className="cursor-pointer"
                                            src={"vector3.svg"}
                                            alt="Vector3"
                                            width={23.33}
                                            height={20.81}
                                        />
                                        <Image
                                            className="cursor-pointer"
                                            src={"vector4.svg"}
                                            alt="Vector4"
                                            width={24.53}
                                            height={22.06}
                                        />
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

        </div>
    )
}