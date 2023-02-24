import Link from "next/link";
import Image from "next/image";
import img1 from '@/components/assets/image/LOGO SEHJIRA footer.png'


const PrimaryNavigation = () => {
	const userData = {
		name: "Jane Doe",
		email: "envkt@example.com",
		password: "password",
		role: "admin",
	};

	return (
		<nav className="flex items-center justify-between flex-wrap bg-[#FFFFFF] p-3 w-full px-[7%]">
			<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto  ">
				<ul className="lg:flex-grow pl-20 text-[#3eff6b] hover:text-[#413c84]">
					<Link className="hyperlink" href="/">
						Beranda
					</Link>
					<Link className="hyperlink" href="/about">
						Tentang Kami
					</Link>
				</ul>
			</div>
			<div className="flex items-center flex-shrink-0 mr-6">
				<span className="font-semibold text-xl tracking-tight">
					<Image
						src={img1}
						alt={"LOGO SEHJIRA footer.png"}
						width={81}
						height={87}
					/>
				</span>
			</div>
			<div className="w-full block flex-grow lg:w-auto lg:flex lg:items-center">
				<ul className="flex lg:flex-grow justify-end pr-16 text-[#f437cb] hover:text-[#413c84]">
					<Link className="hyperlink" href="/">
						Hubungi Kami
					</Link>
					<Link className="hyperlink" href="/about">
						Program Kami
					</Link>
				</ul>
			</div>
		</nav>
	);
};

export default PrimaryNavigation;
