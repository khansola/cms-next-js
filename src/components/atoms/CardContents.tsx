import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Image from 'next/image'

const CardContents = () => {
    const ProgramList = [{
        image: "/static/image/Container1.png",
        caption: "Pelatihan manajemen organısası bagı pengurus dan anggota SEHJIRA"
    },
    {
        image: "/static/image/Container2.png",
        caption: "Kelas Kursus Komputer tingkat dasar dan Mahir"
    },
    {
        image: "/static/image/Container3.png",
        caption: "Kelas bahasa Isyarat Bisindo dan ASL/ISL"
    },
    {
        image: "/static/image/Container4.png",
        caption: "Pelatihan kemandırian disabilitas rungu/Tuli bekerja"
    },
    ];


    return (
        <div className='flex flex-wrap justify-center gap-5'>{
            ProgramList.map((e, i) => {
                return (
                    <div >
                        <Card key={i} sx={{ maxWidth: 300, height: 400 }}>
                            <div >
                                <Image
                                    src={e.image}
                                    alt={"vector.png"}
                                    width={350}
                                    height={220}
                                ></Image>
                            </div>
                            <CardContent>
                                <Typography className='' gutterBottom variant="h5" component="div">
                                    {e.caption}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                )
            })
        }</div>

    );
}

export default CardContents