import Image from "next/image";
import Link from "next/link";
import Links from "./Links";
import img1 from '@/components/assets/image/LOGO SEHJIRA footer.png'
import img2 from '@/components/assets/image/Facebook1.png'
import img3 from '@/components/assets/image/Twitter1.png'
import img4 from '@/components/assets/image/Instagram1.png'
import img5 from '@/components/assets/image/LinkedIn1.png'
import img6 from '@/components/assets/image/YouTube1.png'

function Footer() {
  const tautanCepat = [{
    href: "/",
    title: "Visi Kami"
  },
  {
    href: "/",
    title: "Kedai Kami"
  },
  {
    href: "/",
    title: "Karir"
  },
  {
    href: "/",
    title: "Berita & Informasi"
  },
  {
    href: "/",
    title: "Produk Kami"
  },  {
    href: "/",
    title: "Cara Order"
  },  {
    href: "/",
    title: "FAQ'S"
  },
  ]

  return (
    <>
      <footer className="bg-slate-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start pb-8">
        <div className="p-5">
          <ul>
            <div className="mb-2">
            <Image
              src={img1}
              alt="sehjira"
              height={95}
              width={88}
            />
            </div>
            <p className="w-4/6 pb-4 font-['DM Sans', sans-serif] font-normal font text-[18px]">
              Konsultan, Advokasi, Pelatihan & Pendidikan Disabilitas Therapist
              Terapi Wicara untuk Disabilitas Pendengaran
            </p>
            <div className="flex gap-3 pl-[3%] flex-wrap pb-5 px-20">
              <Link href={"/"}>
                <Image
                  src={img2}
                  alt="facebook"
                  width={36}
                  height={36}
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src={img3}
                  alt="facebook"
                  width={36}
                  height={36}
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src={img4}
                  alt="instagram"
                  width={36}
                  height={36}
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src={img5}
                  alt="linkedin"
                  width={36}
                  height={36}
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src={img6}
                  alt="youtube"
                  width={36}
                  height={36}
                />
              </Link>
              {/* <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" /> */}
            </div>
          </ul>
        </div>

        <div className="flex w-full">
          <div className="p-5 flex flex-wrap w-auto">
            <ul>
              <p className="text-gray-800 text-2xl pb-8 font-['DM Sans', sans-serif] text-[#843C74] font-semibold">
                <Link href={"/"}>Tautan Cepat</Link>
              </p>
              {tautanCepat.slice(0,4).map((e, i) => {
                return <li key={i} className="pb-2 font-['DM Sans', sans-serif] text-[#1E1E1E] hover:text-blue-600 cursor-pointer">
                  <Links href={e.href} title={e.title} />
                </li>
              })}
            </ul>
          </div>

          <div className="w-1/5"></div>

          <div className="p-5 flex flex-wrap w-auto">
            <ul>
              <p className="text-gray-800 text-2xl pb-8 font-['DM Sans', sans-serif] text-[#843C74] font-semibold">
                <Link href={"/"}>Toko</Link>
              </p>
              {tautanCepat.slice(4,7).map((e, i) => {
                return <li key={i} className="pb-2 font-['DM Sans', sans-serif] text-[#1E1E1E] hover:text-blue-600 cursor-pointer">
                  <Links href={e.href} title={e.title} />
                </li>
              })}
              {/* <li className="pb-2 font-['DM Sans', sans-serif] text-[#1E1E1E] hover:text-blue-600 cursor-pointer">
                <Link href={"/"}>Produk Kami</Link>
              </li>
              <li className="pb-2 font-['DM Sans', sans-serif] text-[#1E1E1E] hover:text-blue-600 cursor-pointer">
                <Link href={"/"}>Cara Order</Link>
              </li>
              <li className="pb-2 font-['DM Sans', sans-serif] text-[#1E1E1E] hover:text-blue-600 cursor-pointer">
                <Link href={"/"}>FAQ’s</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </footer>
      <div className="flex flex-col justify-center items-center text-center p-5">
        <hr className="w-[100%] h-[1px] mx-auto bg-[black] border-0 my-8" />
        <p className="text-[#767494] font-['DM Sans', sans-serif] text-[18px]">
          © 2018 - 2023 Sehjira. Hak Cipta All Rights Reserved |{" "}
          <span className="text-[#ADABC3]">Syarat dan Ketentuan | Privasi</span>
        </p>
      </div>
    </>
  );
}

export default Footer;

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white p-6">
//       Copyright &copy; 2023 by <a href="htpps://saltacademy.id">Salt Academy</a>
//     </footer>
//   );
// };

// export default Footer;
