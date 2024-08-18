'use client'
import Image from "next/image";
import Link from 'next/link';
import { Inter } from "next/font/google";
import { Card, CardBody } from "@nextui-org/card";
import useMediaQuery from '../../utils/next_media_query';
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
                                    <a href="/products" className="border-2 mr-5 border-white px-8 py-2 bg-white rounded-xl text-[#3C4751]">
                                        Products
                                    </a>
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
                                        1
                                    </div>
                                    <h1 className="font-bold text-2xl ml-10">Pneumatic Rubber Fenders</h1>
                                </div>
                                <p className="mb-5 lg:mb-0 lg:w-[75%] mt-5">Pneumatic Rubber Fenders are Manufactured and tested comply with ISO 17357.
                                    Our real Yokohama type pneumatic fenders are made by mould based on korean
                                    production technology. The high-pressure floating pneumatic rubber fender
                                    is a leading anti-collision device for marine application in th world today.
                                    it is made of synthetic-cord-reinforced rubber sheet with compressed air inside to enable it to float on the water
                                    and work as a shock absorber when ship-to-ship (STS) transfer operations and ship-to-dock (STD) berthing and mooring operations.</p>
                            </div>
                            <Image src="/image_39.png" alt="" width={400} height={400} />
                        </div>
                        <div className="flex flex-wrap justify-center lg:flex-nowrap mt-10">
                            <Image src="/image_56.png" alt="" width={400} height={400} />
                            <Image src="/image_43.png" className="mt-10 lg:mt-0 lg:ml-28" alt="" width={600} height={600} />
                        </div>
                    </CardBody>
                </Card>
                <Card className="mx-5 mt-10 px-10 py-10 shadow-3xl rounded-xl">
                    <CardBody>
                        <div className="flex flex-wrap lg:flex-nowrap">
                            <div>
                                <div className="flex items-center">
                                    <div className="bg-[#EEFEFF] font-bold text-2xl px-3 py-1">
                                        2
                                    </div>
                                    <h1 className="font-bold text-2xl ml-10">Marine Airbags</h1>
                                </div>
                                <p className="mb-5 lg:mb-0 lg:w-[75%] mt-5">Marine airbags can be used for ship launching / landing,
                                    marine salvage, and heavy lifting. All marine airbags are made by innovative holistic wrapping
                                    technology. Ship launching or landing depending on Marine Airbags is an innovative technology
                                    having utmost bright prospect in maritime f ields. This kind of 'Flexible Launching Technology
                                    is becoming popular around the world because of its cost-effective and convenient advantages.
                                    Airbag ship launching overcomes the restriction of traditional slipway launching methods which
                                    is commonly used in small or medium size ships' building.</p>
                            </div>
                            <Image src="/image_48.png" alt="" width={400} height={400} />
                        </div>
                        <div className="flex flex-wrap justify-between lg:flex-nowrap mt-10">
                            <Image src="/image_57.png" alt="" width={400} height={100} className="h-[15rem]" />
                            <Image src="/image_50.png" className="mt-10 lg:mt-0" alt="" width={500} height={400} />
                        </div>
                    </CardBody>
                </Card>
                <Card className="mx-5 mt-10 px-10 py-10 shadow-3xl rounded-xl">
                    <CardBody>
                        <div className="flex flex-wrap lg:flex-nowrap">
                            <div>
                                <div className="flex items-center">
                                    <div className="bg-[#EEFEFF] font-bold text-2xl px-3 py-1">
                                        3
                                    </div>
                                    <h1 className="font-bold text-2xl ml-10">Totaly Enclosed Air Lifting Bags</h1>
                                </div>
                                <p className="mb-5 lg:mb-0 lg:w-[75%] mt-5">Totally Enclosed Type Lift Bags (Salvage Tube,
                                    Inflatable Buoyancy Bags) is one kind effective alternative of Open Bottom Parachute type
                                    lifting bags for the surface buoyancy support operation. Totally Enclosed Air Lift Bags
                                    can be used for buoyancy support and refloatation operation in shallow water and on the
                                    surface, support/salvage pontoons for bridges, floating platforms, dock gates, sunkend
                                    objects or military equipment. Totally enclosed lifting bags offer an effectual method
                                    of reducing the draught of vessel and floating underwater structures. Then also provide
                                    an ideal system of buoyancy or cable and static buoyancy support.</p>
                            </div>
                            <Image src="/image_33.png" alt="" width={700} height={700} />
                        </div>
                        <div className="flex flex-wrap justify-center lg:flex-nowrap mt-3 lg:mt-10">
                            <Image src="/image_109.png" className="mt-10 lg:mt-0" alt="" width={600} height={600} />
                        </div>
                    </CardBody>
                </Card>
                <Card className="mx-5 mt-10 px-10 py-10 shadow-3xl rounded-xl">
                    <CardBody>
                        <div className="flex flex-wrap lg:flex-nowrap">
                            <div>
                                <div className="flex items-center">
                                    <div className="bg-[#EEFEFF] font-bold text-2xl px-3 py-1">
                                        4
                                    </div>
                                    <h1 className="font-bold text-2xl ml-10">Pillow Water Tanks</h1>
                                </div>
                                <p className="mb-5 lg:mb-0 lg:w-[75%] mt-5">Pillow Type PVC Water Tanks (Water Bladder) 
                                    are normally "pillow" shaped tanks having a low profile, made from heavy duty/special 
                                    application PVC/TPU coating fabric, which gives high abrasion and UV resistance. 
                                    PVC water tanks are used for temporary or long-term water or liquid storage of oil, 
                                    potable water, sewage, rainwater chemical spillage waste and other liquids. 
                                    Pillow PVC water tanks are very lightweight, reliable, quick and simple. 
                                    Charlocks, or ball valves are supplied as the standard assembly. 
                                    Pillow Type PVC Water Tank Various inlet and outlet valves are optional. 
                                    The standard capacity is from 1,000 to 500,000 Liters.</p>
                            </div>
                            <Image src="/image_481.png" alt="" width={500} height={0} className="h-[15rem] mt-5" />
                        </div>
                        <div className="flex flex-wrap justify-center lg:flex-nowrap mt-3 lg:mt-10">
                            <Image src="/image_90.png" className="mt-10 lg:mt-0" alt="" width={300} height={300} />
                        </div>
                    </CardBody>
                </Card>
                <Card className="mx-5 mt-10 px-10 py-10 shadow-3xl rounded-xl">
                    <CardBody>
                        <div className="flex flex-wrap lg:flex-nowrap">
                            <div>
                                <div className="flex items-center">
                                    <div className="bg-[#EEFEFF] font-bold text-2xl px-3 py-1">
                                        5
                                    </div>
                                    <h1 className="font-bold text-2xl ml-10">Inflateable Test Water Bags</h1>
                                </div>
                                <p className="mb-5 lg:mb-0 lg:w-[75%] mt-5">inflatable PVC boat fenders are designed 
                                    for the yacht or boat application to provide maximum protection. 
                                    Inflatable PVC boat fenders can be quickly deployed and inflated 
                                    with a standard foot pump, electric inf lator or onboard airline 
                                    making them ready to use in minutes. Headway inf latable PVC boat 
                                    fenders are made of heavy-duty PVC or Nylon coating fabric for high 
                                    strength, puncture and abrasion resistance and resistance to</p>
                            </div>
                            <Image src="/image_91.png" alt="" width={500} height={0} className="h-[15rem] mt-5" />
                        </div>
                        <div className="flex flex-wrap justify-center lg:flex-nowrap mt-3 lg:mt-10">
                            <Image src="/image_92.png" className="mt-10 lg:mt-0" alt="" width={400} height={400} />
                        </div>
                    </CardBody>
                </Card>
                <div className="my-16 flex justify-center">
                    <div className="rounded-lg mr-5 bg-[#2DA9B0] px-5 py-2 text-white">
                        1
                    </div>
                    <div className="rounded-lg px-4 py-2 border border-gray-400 cursor-pointer hover:bg-[#2DA9B0] hover:text-white">
                        <a href="/products/2">2</a>
                    </div>
                </div>
            </div>
        </div>
    )
}