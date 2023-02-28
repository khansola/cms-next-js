import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Image from 'next/image'

 const Section3 = () =>  {
    const ProgramList = [{
        image: "/static/image/Container1.png",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.",
    },
    {
        image: "/static/image/Container2.png",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.",
    },
    {
        image: "/static/image/Container3.png",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.",
    },
    ];


    return (
            ProgramList.map((e, i) => {
                return (
                <div className='flex flex-row justify-center'>
                <Card key={i} sx={{ maxWidth: 420, height: 450 }}>
                    <div className='w-[100%]'>
                        <Image
                            src={e.image}
                            alt={"vector.png"}
                            width={400}
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
    )
}

export default Section3