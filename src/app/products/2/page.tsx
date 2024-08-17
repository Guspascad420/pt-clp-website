'use client'
import Image from "next/image";
import Link from 'next/link';
import { Inter } from "next/font/google";
import { Card, CardBody } from "@nextui-org/card";
import useMediaQuery from '../../../utils/next_media_query';
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem
} from "@nextui-org/dropdown";

const inter = Inter({ subsets: ["latin"] });


export default function Products() {
    const isBreakpoint = useMediaQuery(768)

    return (
        <div className={inter.className}>
            <header className="bg-[#3C4751] px-3 py-3 flex items-center justify-between">
                <div className="flex items-center">
                    <Image src="/logo.png" alt="logo" width={45} height={45} />
                    <p className="font-bold hidden lg:inline text-white ml-5 mt-2">PT Cakrawala Langit Persada</p>
                </div>
                <div className="text-white font-bold">
                    {
                        isBreakpoint
                            ? (
                                <Dropdown backdrop="blur">
                                    <DropdownTrigger>
                                        <a>
                                            <img src="/dots.svg" />
                                        </a>
                                    </DropdownTrigger>
                                    <DropdownMenu className="bg-white py-3 px-6 rounded-xl" variant="faded" aria-label="Static Actions">
                                        <DropdownItem key="home" href="/">Home</DropdownItem>
                                        <DropdownItem href="/products" key="products">Products</DropdownItem>
                                        <DropdownItem href="#contact" key="contact">Contact Us</DropdownItem>
                                        <DropdownItem key="delete" className="text-danger" color="danger">
                                            Delete file
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            )
                            : (
                                <div>
                                    <a href="/" className="mr-5 px-12 py-2 hover:bg-white hover:text-[#3C4751] rounded-xl bg-[#3C4751] border-2 border-white text-white">
                                        Home
                                    </a>
                                    <Link href="/products" className="border-2 mr-5 border-white px-8 py-2 bg-white rounded-xl text-[#3C4751]">
                                        Products
                                    </Link>
                                    <Link href="" className="border-2 border-white px-7 py-2 hover:bg-white 
          hover:text-[#3C4751] rounded-xl">
                                        Contact Us
                                    </Link>
                                </div>
                            )
                    }
                </div>
            </header>
            <div style={{ backgroundImage: `url('/image_42.png')`, backgroundPosition: 'center' }} className="flex justify-center py-24 rounded-b-3xl">
                <h1 className="font-bold text-6xl text-white text-center">OUR PRODUCTS</h1>
            </div>
            <div>
                <Card className="mx-5 mt-10 px-10 py-10 shadow-3xl rounded-xl">
                    <CardBody>
                        <div className="flex flex-wrap lg:flex-nowrap">
                            <div>
                                <div className="flex items-center">
                                    <div className="bg-[#EEFEFF] font-bold text-2xl px-3 py-1">
                                        6
                                    </div>
                                    <h1 className="font-bold text-2xl ml-10">Platform Test Water Bags</h1>
                                </div>
                                <p className="mb-5 lg:mb-0 lg:w-[75%] mt-5">This type water bags are used for the load testing of bridge, platform, walkways, floor and slab, or other structures in many industries. Each water bag has the inlet port, discharge port, and air release valve. We also can adjust the size upon the clients' special request.
                                </p>
                            </div>
                            <Image src="/image_93.png" alt="" width={300} height={0} className="h-[10rem] mt-5" />
                        </div>
                        <div className="flex flex-wrap justify-center lg:flex-nowrap mt-3 lg:mt-10">
                            <Image src="/image_94.png" className="mt-10 lg:mt-0" alt="" width={400} height={400} />
                        </div>
                    </CardBody>
                </Card>
                <Card className="mx-5 mt-10 px-10 py-10 shadow-3xl rounded-xl">
                    <CardBody>
                        <div className="flex flex-wrap lg:flex-nowrap">
                            <div>
                                <div className="flex items-center">
                                    <div className="bg-[#EEFEFF] font-bold text-2xl px-3 py-1">
                                        7
                                    </div>
                                    <h1 className="font-bold text-2xl ml-10">Gangway Test Water Bags</h1>
                                </div>
                                <p className="mb-5 lg:mb-0 lg:w-[75%] mt-5">This type water 
                                    bags are used for the load testing of gangway, 
                                    accommodation ladder and other long structures.
                                    We also can make the size upon the clients' special request.
                                </p>
                            </div>
                            <Image src="/image_95.png" alt="" width={300} height={0} className="mt-5" />
                        </div>
                        <div className="flex flex-wrap justify-center lg:flex-nowrap mt-3 lg:mt-10">
                            <Image src="/image_96.png" className="mt-10 lg:mt-0" alt="" width={400} height={400} />
                        </div>
                    </CardBody>
                </Card>
                <Card className="mx-5 mt-10 px-10 py-10 shadow-3xl rounded-xl">
                    <CardBody>
                        <div className="flex flex-wrap lg:flex-nowrap">
                            <div>
                                <div className="flex items-center">
                                    <div className="bg-[#EEFEFF] font-bold text-2xl px-3 py-1">
                                        8
                                    </div>
                                    <h1 className="font-bold text-2xl ml-10">Lifeboat Testing Water Bags</h1>
                                </div>
                                <p className="mb-5 lg:mb-0 lg:w-[75%] mt-5">Lifeboat test water bags Lifeboat Proof 
                                    Load Testing Water Bags are designed with the bolster cylindrical shape, made 
                                    of heavy duty PVC coating fabric, and equipped with fill/discharge fittings, 
                                    handles and automatic relief valve, which is activated once the water bags 
                                    achieve the designed weight. Because of the lifeboat test water bags economy, 
                                    convenience, high efficiency advantages, this system is widely used for the 
                                    distributed proof load testing for the lifeboats, or any other equipments 
                                    that need distributed proof load testing, such as crew bastes, gangways, samll bridges and so on.
                                </p>
                            </div>
                            <Image src="/image_97.png" alt="" width={300} height={0} className="mt-5" />
                        </div>
                        <div className="flex flex-wrap justify-center lg:flex-nowrap mt-3 lg:mt-10">
                            <Image src="/image_99.png" className="mt-10 lg:mt-0" alt="" width={400} height={400} />
                        </div>
                    </CardBody>
                </Card>
                <Card className="mx-5 mt-10 px-10 py-10 shadow-3xl rounded-xl">
                    <CardBody>
                        <div className="flex flex-wrap lg:flex-nowrap">
                            <div>
                                <div className="flex items-center">
                                    <div className="bg-[#EEFEFF] font-bold text-2xl px-3 py-1">
                                        9
                                    </div>
                                    <h1 className="font-bold text-2xl ml-10">Load Headroom Water Bags</h1>
                                </div>
                                <p className="mb-5 lg:mb-0 lg:w-[75%] mt-5">Load head room water weight bags are designed for proof loading 
                                    test for the lifting equipment and structures when the crane testing operation have low headroom (LH). 
                                    It also can be used as a fluid storage container for emergency use. <br/> <br/>
                                    Low headroom load testing water weight bags are made from high tenacity PVC coated polyester 
                                    fabric material. The standard assembly of whole water weight bags system include the shackles, mater 
                                    link, filling and discharge fittings, lifting belts, and incorporating with some innovative design
                                </p>
                            </div>
                            <Image src="/image_100.png" alt="" width={300} height={0} className="mt-5" />
                        </div>
                        <div className="flex flex-wrap justify-center lg:flex-nowrap mt-3 lg:mt-10">
                            <Image src="/image_101.png" className="mt-10 lg:mt-0" alt="" width={400} height={400} />
                        </div>
                    </CardBody>
                </Card>
                <Card className="mx-5 mt-10 px-10 py-10 shadow-3xl rounded-xl">
                    <CardBody>
                        <div className="flex flex-wrap lg:flex-nowrap">
                            <div>
                                <div className="flex items-center">
                                    <div className="bg-[#EEFEFF] font-bold text-2xl px-3 py-1">
                                        10
                                    </div>
                                    <h1 className="font-bold text-2xl ml-10">Proof Load testing Water Bags</h1>
                                </div>
                                <p className="mb-5 lg:mb-0 lg:w-[75%] mt-5">Water filled weight bags meet the need for the simple, 
                                    economy, convenience, safety and high efficiency load testing method instead of 
                                    traditional solid test method. Load testing water bags used for the proof load testing of crane, 
                                    davit, bridge, beam, derrick, and other lifting equipment's and structures in the maritime, 
                                    oil & gas, power plants, military, heavy construction, and manufacturing industries. 
                                    Our water filled weight bag is designed with 6:1 safety factor at least and we design water 
                                    filled weight bags as per the requirement of LEEA 051.
                                </p>
                            </div>
                            <Image src="/image_102.png" alt="" width={300} height={0} className="mt-5" />
                        </div>
                        <div className="flex flex-wrap justify-center lg:flex-nowrap mt-3 lg:mt-10">
                            <Image src="/image_101.png" className="mt-10 lg:mt-0" alt="" width={400} height={400} />
                        </div>
                    </CardBody>
                </Card>
                <Card className="mx-5 mt-10 px-10 py-10 shadow-3xl rounded-xl">
                    <CardBody>
                        <div className="flex flex-wrap lg:flex-nowrap">
                            <div>
                                <div className="flex items-center">
                                    <div className="bg-[#EEFEFF] font-bold text-2xl px-3 py-1">
                                        11
                                    </div>
                                    <h1 className="font-bold text-2xl ml-10">Pipeline Buoyancy Bags</h1>
                                </div>
                                <p className="mb-5 lg:mb-0 lg:w-[75%] mt-5">We have several types air lifting bags can be 
                                    used as the pipeline buoyancy bags. It can be provide the buoyancy continuously, 
                                    to support the submarine cable, or steel pipe during installation and transportation 
                                    in shallow water. All of pipeline buoyancy bags are made of high strength PVC coating 
                                    fabric material, which is highly abrasion, and UV resistant.
                                </p>
                            </div>
                            <Image src="/image_105.png" alt="" width={300} height={0} className="mt-5" />
                        </div>
                        <div className="flex flex-col flex-wrap items-center lg:flex-nowrap mt-3 lg:mt-10">
                            <Image src="/image_108.png" className="mt-10 lg:mt-0" alt="" width={400} height={400} />
                            <Image src="/image_107.png" className="mt-10 lg:mt-5" alt="" width={400} height={400} />
                        </div>
                    </CardBody>
                </Card>
                <div className="my-16 flex justify-center">
                    <div className="rounded-lg px-4 py-2 border border-gray-400 cursor-pointer hover:bg-[#2DA9B0] hover:text-white">
                        <a href="/products">1</a>
                    </div>
                    <div className="rounded-lg ml-5 bg-[#2DA9B0] px-4 py-2 text-white">
                        2
                    </div>
                </div>
            </div>
        </div>
    )
}