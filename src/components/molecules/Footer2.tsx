import React from 'react'
import Image from 'next/image'
import img1 from '@/components/assets/image/LOGO SEHJIRA footer.png'
import Link from 'next/link'
import Facebook from '@/components/assets/image/Facebook1.png'
import Instagram from '@/components/assets/image/Instagram1.png'
import Twitter from '@/components/assets/image/Twitter1.png'
import Linkedin1 from '@/components/assets/image/Linkedin1.png'
import Youtube from '@/components/assets/image/Youtube1.png'

const Footer2 = () => {
  return (
    <div className=' flex items-center justify-center mt-10 gap-[7rem] px-[7%]'>
      <div className='flex flex-wrap flex-col'>
        <Image
          src={img1}
          alt={"LOGO SEHJIRA footer.png"}
          width={81}
          height={87}
        ></Image>
        <p className=' container h-30 mt-5'>
          Konsultan, Advokasi, Pelatihan & Pendidikan Disabilitas Therapist
          Terapi Wicara untuk Disabilitas Pendengaran
        </p>
        <div>
          <ul className='w-full flex gap-1 mt-5 justify-start   '>
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
                src={Linkedin1}
                alt={"LinkedIn.png"}
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
      <div className='flex w-full gap-25 mr-24 '>
        <div className='w-full '>
          <div className='pb-5 '>
            <Link className="hyperlink" href="/">
              <p>
                Tautan Cepat
              </p>
            </Link>
          </div>
          <div>
            <ul>
              <li className='pb-2'>
                <Link className="hyperlink" href="/">
                  <p>
                    Visi Kami
                  </p>
                </Link>
              </li>
              <li className='pb-2'>
                <Link className="hyperlink" href="/">
                  <p>
                    Kedai
                  </p>
                </Link>
              </li>
              <li className='pb-2'>
                <Link className="hyperlink" href="/">
                  <p>
                    Karir
                  </p>
                </Link>
              </li>
              <li className='pb-2'>
                <Link className="hyperlink" href="/">
                  <p>
                    Berita & Informasi
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='w-full pl-9 '>
          <div className='pb-5 '>
            <Link className="hyperlink" href="/">
              <p>
                Toko
              </p>
            </Link>
          </div>
          <div>
            <ul >
              <li className='pb-2'>
                <Link className="hyperlink" href="/">
                  <p>
                    Produk Kami
                  </p>
                </Link>
              </li>
              <li className='pb-2'>
                <Link className="hyperlink" href="/">
                  <p>
                    Cara Order
                  </p>
                </Link>
              </li>
              <li className='pb-2'>
                <Link className="hyperlink" href="/">
                  <p>
                    FAQ's
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer2