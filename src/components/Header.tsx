'use client';
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai"
import { CiLogout } from "react-icons/ci"

const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = React.useState(false);
    const { status, data } = useSession();
    const handleLoginClick = () => signIn();
    const handleLogoutClick = () => {
        setMenuIsOpen(false);
        signOut();
    }
    const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);
    return (
        <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center">
            <div className="relative h-[32px] w-[132px]">
                <Link href={"/"}>
                    <Image src="/logo.svg" alt="best trip" fill />
                </Link>
            </div>

            {status === 'unauthenticated' && (
                <button className="text-primary text-sm font-semibold" onClick={handleLoginClick}>
                    Login
                </button>
            )}

            {status === 'authenticated' && data.user && (
                <div className="flex items-center gap-3 border-grayLighter border border-solid rounded-full p-2 px-3 relative">
                    <AiOutlineMenu size={16} onClick={handleMenuClick} className="cursor-pointer" />
                    <Image height={32} width={32} src={data.user.image!} alt={data.user.name!} className="rounded-full shadow-md" />

                    {menuIsOpen && (
                        <div className="absolute top-14 left-0 w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
                            <button className="text-primary text-sm font-semibold" onClick={handleLogoutClick}>
                                <div className="flex flex-row items-center gap-2">
                                    <CiLogout size={16} className="text-primary" />
                                    Logout
                                </div>

                            </button>
                        </div>
                    )}
                </div>
            )}


        </div>
    );
}

export default Header;