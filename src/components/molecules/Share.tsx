import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



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
                            src='/static/image/Facebook.png'
                            alt={"Facebook.png"}
                        width={81}
                        height={87}
                        ></Image>
                    </Link>
                    <Link className="hyperlink" href="/">
                        <Image
                            src='/static/image/Instagram.png'
                            alt={"Intagram.png"}
                        width={81}
                        height={87}
                        ></Image>
                    </Link>
                    <Link className="hyperlink" href="/">
                        <Image
                            src='/static/image/Twitter.png'
                            alt={"Twitter.png"}
                        width={81}
                        height={87}
                        ></Image>
                    </Link>
                    <Link className="hyperlink" href="/">
                        <Image
                            src='/static/image/Youtube.png'
                            alt={"Youtube.png"}
                        width={81}
                        height={87}
                        ></Image>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Share