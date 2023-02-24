import { Box } from "@mui/system";

const Footer = () => {
	return (
		
		<footer className="bg-white text-black p-6 flex items-center flex-col px-[7%] "> 
		<Box sx={{borderBottom: 1,borderColor: 'divider', width: '100%'}} />
			© 2018 - 2023 Sehjira. Hak Cipta All Rights Reserved | Syarat dan Ketentuan | Privasi
		</footer>
	);
};

export default Footer;
