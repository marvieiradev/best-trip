import Image from "next/image";

const Footer = () => {
    return (
        <div className="flex flex-col bg-walterWhite p-5 items-center justify-center">
            <Image src="/logo.svg" width={120} height={20} alt="Best Trip" />
            <p className="text-sm font-medium mt-1 text-primaryDarker">&copy; 2023</p>
        </div>
    );
}

export default Footer;