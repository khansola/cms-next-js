import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import img1 from '/static/image/LOGO SEHJIRA footer.png'
import burger from '@/components/assets/image/dehaze.svg'



const PrimaryNavigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
	const [open, setOpen] = useState(false)
	const [menu, setMenu] = useState(false)

	return (
		<>
			<nav
				className="
          w-full
          py-4
          md:py-0
          px-16
          text-lg text-gray-700
          bg-white
        "
			>
				<div className="flex justify-between">
					<div>
						<Image
							className={`cursor-pointer md:hidden block`}
							src={img1}
							height={87}
							width={81}
							alt="sehijra"
						/>
					</div>
					<div
						className={`h-6 w-6 cursor-pointer md:hidden block`}
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<div className="mt-8 ">
							<Image
								className={`cursor-pointer md:hidden block`}
								src={burger}
								height={100}
								width={100}
								alt="burger"
								
							/>
						</div>
					</div>
				</div>
				<div
					className={`${isMenuOpen ? "hidden" : "block"
						} w-full md:flex md:items-center md:w-auto`}
				>
					<div
						className="
              pt-4
              md:flex
              md:justify-between
              md:items-center
              md:pt-0
              md:w-full
              pb-4
              "
					>
						<div className="md:flex md:flex-row md:gap-10">
							<p className="text-[#843C74] font-bold font-['DM Sans', sans-serif]">
								<Link href={"/"}>Beranda</Link>
							</p> 
							<p className="text-[#843C74] font-bold font-['DM Sans', sans-serif]">
								<Link href={"/"}>Tentang Kami</Link>
							</p>
						</div>
						<div className="hidden md:block ">
							<Image
								src={img1}
								height={87}
								width={81}
								alt="sehijra"
							/>
						</div>
						<div className="md:flex md:flex-row md:gap-10">
							<p className="text-[#843C74] font-bold font-['DM Sans', sans-serif]">
								<Link href={"/"}>Hubungi Kami</Link>
							</p>
							<p className="text-[#843C74] font-bold font-['DM Sans', sans-serif]">
								<Link href={"/"}>Program Kami</Link>
							</p>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};
export default PrimaryNavigation;
