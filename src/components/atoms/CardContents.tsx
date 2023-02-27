import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import articlelist from '@/components/assets/image/Articlelist.png'
import Image from 'next/image'

 const CardContents = () =>  {
    const ProgramList = [{
        image: articlelist,
        caption: "Pelatihan manajemen organısası bagı pengurus dan anggota SEHJIRA"
    },
    {
        image: articlelist,
        caption: "Kelas Kursus Komputer tingkat dasar dan Mahir"
    },
    {
        image: articlelist,
        caption: "Kelas bahasa Isyarat Bisindo dan ASL/ISL"
    },
    {
        image: articlelist,
        caption: "Pelatihan kemandırian disabilitas rungu/Tuli bekerja"
    },
    ];


    return (
            ProgramList.map((e, i) => {
                
                return (<Card key={i} sx={{ maxWidth: 384 }}>
                    <div>
                        <Image
                            src={articlelist}
                            alt={"vector.png"}
                            width={263}
                            height={220}
                        ></Image>
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {e.caption}
                        </Typography>
                    </CardContent>
                </Card>
                )
            })
    )
}

export default CardContents