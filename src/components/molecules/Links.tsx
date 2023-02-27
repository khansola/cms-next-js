import Link from 'next/link'
import { LinkSharp } from '@mui/icons-material'

type Props= {
    title?: string,
    href?: string 

}

const Links = (props:Props) => {
    
    
    
    return (
        <>
            <Link href={props.href!}>{props.title}</Link>
        </>
    )
}

export default Links