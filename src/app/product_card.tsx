import React from 'react';
import Image from "next/image";
import { Card, CardBody } from "@nextui-org/card";

export default function ProductCard({ image, title, description }) {
    return (
        <Card className="h-[26rem] w-[18rem] shadow-xl ml-5 rounded-2xl mb-10">
            <CardBody className='p-5'>
                <Image src={image} alt='' width={300} height={300} className='rounded-lg' />
                <h2 className='text-center mt-3 mb-2 font-bold text-xl'>{title}</h2>
                <p className='text-center'>{description}</p>
            </CardBody>
        </Card>
    );
}