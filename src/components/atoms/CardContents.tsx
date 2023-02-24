import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import articlelist from '@/components/assets/image/Articlelist.png'
import Image from 'next/image'

export default function CardContents() {
    return (
        <Card sx={{ maxWidth: 384 }}>
            <div>
                <Image
                    src={articlelist}
                    alt={"vector.png"}
                // width={18}
                // height={20.75}
                ></Image>
            </div>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.
                </Typography>
            </CardContent>
            <div>
                <p>31 January 2030</p>
            </div>
        </Card>
    );
}