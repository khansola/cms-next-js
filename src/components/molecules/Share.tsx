import React from 'react'
import Image from 'next/image'
import Facebook from '@/components/assets/image/Facebook.png'
import Instagram from '@/components/assets/image/Instagram.png'
import Twitter from '@/components/assets/image/Twitter.png'
import Youtube from '@/components/assets/image/Youtube.png'
import Link from 'next/link'
import CardContents from '@/components/atoms/CardContents'


function Share() {
    return (
        <div className='full body'>
            <div>
                <ul className='w-full flex gap-1 mt-5 px-[7%]  '>
                    <li>
                        <p>Bagikan</p>
                    </li>
                    <Link className="hyperlink" href="/">
                        <Image
                            src={Facebook}
                            alt={"Facebook.png"}
                        // width={81}
                        // height={87}
                        ></Image>
                    </Link>
                    <Link className="hyperlink" href="/">
                        <Image
                            src={Instagram}
                            alt={"Intagram.png"}
                        // width={81}
                        // height={87}
                        ></Image>
                    </Link>
                    <Link className="hyperlink" href="/">
                        <Image
                            src={Twitter}
                            alt={"Twitter.png"}
                        // width={81}
                        // height={87}
                        ></Image>
                    </Link>
                    <Link className="hyperlink" href="/">
                        <Image
                            src={Youtube}
                            alt={"Youtube.png"}
                        // width={81}
                        // height={87}
                        ></Image>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Share