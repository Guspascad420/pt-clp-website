'use client'
import Image from "next/image";
import QuestionCard from './question_card';
import ProductCard from './product_card';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link'
import useMediaQuery from '../utils/next_media_query';
import { Card, CardBody } from "@nextui-org/card";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu, 
  DropdownSection,
  DropdownItem
} from "@nextui-org/dropdown";

export default function Home() {
  const isBreakpoint = useMediaQuery(768)
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 80,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 80
    }
  };
  return (
    <div>
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
                    <DropdownItem key="home">Home</DropdownItem>
                    <DropdownItem href="/products" key="products">Products</DropdownItem>
                    <DropdownItem key="contact"><Link href="#contact">Contact Us</Link></DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              )
              : (
                <div>
                  <a href="/" className="mr-5 px-12 py-2 bg-white text-[#3C4751] rounded-xl border-2 border-white">
                    Home
                  </a>
                  <Link href="/products" className="border-2 mr-5 border-white hover:text-[#3C4751] px-8 py-2 hover:bg-white rounded-xl text-white">
                    Products
                  </Link>
                  <Link href="#contact" scroll={true} className="border-2 border-white px-7 py-2 hover:bg-white 
          hover:text-[#3C4751] rounded-xl">
                    Contact Us
                  </Link>
                </div>
              )
          }
        </div>
      </header>
      {
        isBreakpoint
          ? (
            <div className="flex flex-col py-20 items-center" style={{ background: 'linear-gradient(180deg, rgba(51,178,186,1) 0%, rgba(43,165,172,1) 61%, rgba(47,171,179,1) 76%, rgba(133,248,255,1) 100%)' }}>
              <h1 className="font-bold text-[3rem] text-white text-center">PT CAKRAWALA</h1>
              <h1 className="font-bold text-[2rem] text-[#3C4751]">LANGIT PERSADA</h1>
              <button className="py-3 mt-3 px-3 w-52 border-2 border-white rounded-xl bg-[#56B7BD] text-white">
                Check Our Products
              </button>
            </div>
          )
          : (
            <div className="grid">
              <div className="flex justify-end headerImg">
                <Image src="/header_img.png" alt="logo" width={620} height={620} />
              </div>
              <div className="shape-2 ml-3 flex flex-col justify-center top-0 pl-5">
              </div>
              <div className="shape flex flex-col justify-center top-0 pl-5">
                <Image src="/logo_large.png" alt="logo" width={130} height={130} />
                <h1 className="font-bold text-[4rem] text-white">PT CAKRAWALA</h1>
                <h1 className="font-bold text-[3rem] text-[#3C4751]">LANGIT PERSADA</h1>
                <button className="py-3 mt-3 px-3 w-52 border-2 border-white rounded-xl bg-[#56B7BD] text-white">
                  Check Our Products
                </button>
              </div>
            </div>
          )
      }

      <div className="bg-[#34BEC6]">
        <h1 className="text-center py-5 font-bold text-white text-2xl">What do we provide?</h1>
      </div>
      <div className="py-14 bg-[#EEFEFF]">
        <div className="grid grid-cols-1 md:grid-cols-4 justify-center content-center">
          <div className="flex flex-col items-center">
            <Image src="/power_plant.png" alt="logo" width={120} height={130} />
            <p className="font-bold">Renewable</p>
            <p>Power plant</p>
          </div>
          <div className="flex mt-5 lg:mt-0 flex-col items-center">
            <Image src="/frame_16.png" alt="logo" width={120} height={130} />
            <p className="font-bold">Green Hydrogen</p>
            <p>& Amonia</p>
          </div>
          <div className="flex mt-5 lg:mt-0 flex-col items-center">
            <Image src="/frame_17.png" alt="logo" width={120} height={130} />
            <p className="font-bold">Carbon Capture</p>
            <p>Utilization and Storage</p>
          </div>
          <div className="flex mt-5 lg:mt-0 flex-col items-center">
            <Image src="/frame_14.png" alt="logo" width={120} height={130} />
            <p className="font-bold">Carbon Capture</p>
            <p>and Storage (CCS)</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center md:mt-10">
          <div className="flex mt-5 lg:mt-0 flex-col items-center">
            <Image src="/frame_9.png" alt="logo" width={120} height={130} />
            <p className="font-bold">Blue</p>
            <p>& Amonia</p>
          </div>
          <div className="flex mt-5 lg:mt-0 flex-col items-center">
            <Image src="/frame_15.png" alt="logo" width={120} height={130} />
            <p className="font-bold">Emission Reduction</p>
            <p>Programme</p>
          </div>
          <div className="flex mt-5 lg:mt-0 flex-col items-center">
            <Image src="/frame_18.png" alt="logo" width={120} height={130} />
            <p className="font-bold">Transission energy program</p>
            <p>From Coal, Diesel to Natural Gas</p>
          </div>
        </div>
      </div>
      <div id="about" className="cargo-ship py-10 lg:py-40 gap-10 lg:px-20 flex flex-wrap lg:flex-nowrap justify-center">
        <QuestionCard title={'Why Us'} height={''} description={"Our diverse range of services includes both standard and customized solutions to meet your specific needs. Comprehensive safety and engineering solutions for both domestic and international clients, serving private and public sectors"} />
        <QuestionCard title={'Who Are We'} height={'h-52'} description={"Provides comprehensive safety and engineering solutions for both domestic and international clients, serving private and public sectors."} />
        <QuestionCard title={'What Do We Do'} height={''} description={"We specialize in consulting, designing, manufacturing, delivering, and maintaining high-quality products for high-risk industries. We offer design, fabrication, certification, repair, and refurbishment services, meeting BS EN12079 and DNV 2.7-1 standards. "} />
      </div>
      <div className="py-10 bg-[#F3F3F3]">
        <div className="ml-10">
          <h1 className="text-4xl font-bold">MEET OUR</h1>
          <h1 className="text-4xl text-[#2DA9B0] font-bold">PRODUCTS</h1>
        </div>
        <Carousel centerMode={true} itemClass="carousel-item-margin" className="pt-5" removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive}>
          <Card className="bg-[#1D7C82] h-[26rem] w-[18rem] ml-7 mb-10 rounded-2xl">
            <CardBody className="p-5">
              <div className="flex flex-col items-center mt-6">
                <div className="bg-white p-5 font-bold text-6xl rounded-3xl text-[#1D7C82]">
                  20++
                </div>
              </div>
              <h1 className="text-[#43C2CA] font-bold text-5xl mt-5">High Quality</h1>
              <h1 className="text-white font-bold text-5xl mt-2">Products</h1>
            </CardBody>
          </Card>
          <ProductCard image='/image_32.png' title='Foam filled fenders' description='Heavy-duty Floating Fenders system for harbor, offshore and ship to ship application. Filled and constructed with closed-cell, enerygy absorbing resillient foam laminated layer' />
          <ProductCard image='/image_38.png' title='Marine Air Bags' description='Consist of rubber layers, Synthetic-cord-reinforced rubber layers, which kind of cylindrical airbags with hemisphirical heads at the both ends.' />
          <ProductCard image='/image_35.png' title='Proof Load Testing Water Bags' description='Water filled abgs meet the need for the simple, economy, convenience, safety and high efficiency load testing method.' />
          <ProductCard image='/image_33.png' title='Totally Enclosed Air Lifting Bags' description='One of a kind effective alternative of Open Bottom Parachute tape Lifting Bags for the surface buoyancy support operation.' />
          <ProductCard image='/image_36.png' title='Load Headroom Water Bags' description='Designed for proof loading test for the lifting equipment structures when the crane testing operation have low headroom (LH)' />
          <ProductCard image='/image_34.png' title='Pipeline Buoyancy Bags' description='Provide the buoyancy continuously to support the submarine cable, or steel pipe during installation and transportation in the shallow water,' />
        </Carousel>
      </div>
      <div id="contact" className="flex flex-wrap-reverse justify-center lg:justify-normal ml-10 pt-20 items-center">
        <Image src="/worker_asian.png" alt="" width={300} height={300} />
        <div className="w-[50%] flex flex-col items-center">
          <h1 className="text-5xl font-bold text-center">"<span className="text-[#1D7C82]">Do not hesitate</span>, It is our pleasure to help."</h1>
          <button onClick={() => window.location.href = "https://wa.me/6281290209598"} className="hover:bg-[#1D7C82] hover:text-white border-2 border-[#1D7C82] mt-5 font-bold text-xl p-3 rounded-xl text-[#1D7C82]">
            Contact Us
          </button>
        </div>
      </div>
      <footer className="px-10 py-8 bg-[#1D7C82] flex flex-wrap justify-between">
        <div className={isBreakpoint ? "flex w-full justify-center mb-5" : ""}>
          <Image src="/logo_3.png" alt="logo" width={280} height={200} />
        </div>
        <div>
          <div className="flex flex-wrap justify-center border-b-4 border-white pb-5 mb-14">
            <Link href="" className="mr-5 px-12 py-2 rounded-xl bg-[#4D989C] text-white border-white border-2">
              Home
            </Link>
            <Link href="#about" className="mr-5 px-12 py-2 rounded-xl bg-[#4D989C] text-white border-white border-2">
              About
            </Link>
            <a href="/products" className="mr-5 mt-5 lg:mt-0 px-10 py-2 rounded-xl bg-[#4D989C] text-white border-white border-2">
              Products
            </a>
            <a href="https://wa.me/6281290209598" className="mr-5 mt-5 lg:mt-0 px-8 py-2 rounded-xl bg-[#4D989C] text-white border-white border-2">
              Contact Us
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex flex-col items-center hover:cursor-pointer" onClick={() => window.location.href = "https://wa.me/6281290209598"}>
              <Image src="/frame_199.png" width={50} height={50} alt="" />
              <p className="text-white mt-2">+6281290209598</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/frame_200.png" width={50} height={50} alt="" />
              <p className="text-white mt-2">cakrawala1888@gmail.com</p>
            </div>
            <div className="flex flex-col items-center hover:cursor-pointer" onClick={() => window.location.href = "https://g.co/kgs/hxFtncR"}>
              <Image src="/frame_201.png" width={50} height={50} alt="" />
              <p className="text-white mt-2 w-52 text-center">Jl. Dr.Ide Anak Agung Gde Agung Blok 6 Nomor 3, Mega Kuningan, Jakarta Selatan</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
