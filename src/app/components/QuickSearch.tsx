import Image from "next/image";
import Link from "next/link";

const QuickSearch = () => {
    return (
        <div className="container mx-auto p-5">
            <div className="flex items-center">
                <div className="w-full h-[1px] bg-grayLighter"></div>
                <h2 className="px-5 font-medium text-grayPrimary whitespace-nowrap lg:text-md">Tente pesquisar por</h2>
                <div className="w-full h-[1px] bg-grayLighter"></div>
            </div>
            <div className="flex w-full justify-between mt-5 px-5 lg:mt-10 lg:justify-center lg:gap-24 xl:gap-36">
                <Link href={`/trips/search?text=hotel`}>
                    <div className="flex flex-col items-center gap-1">
                        <Image width={35} height={35} src="/hotel-icon.svg" alt="Hoteis" />
                        <p className="text-sm lg:text-base text-grayPrimary">Hotel</p>
                    </div>
                </Link>

                <Link href={`/trips/search?text=fazenda&rural`}>
                    <div className="flex flex-col items-center gap-1">
                        <Image width={35} height={35} src="/farm-icon.svg" alt="Fazendas" />
                        <p className="text-sm lg:text-base text-grayPrimary">Fazenda</p>
                    </div>
                </Link>

                <Link href={`/trips/search?text=chalé&chale`}>
                    <div className="flex flex-col items-center gap-1">
                        <Image width={35} height={35} src="/cottage-icon.svg" alt="Chalés" />
                        <p className="text-sm lg:text-base text-grayPrimary">Chalé</p>
                    </div>
                </Link>

                <Link href={`/trips/search?text=pousada&pousadas`}>
                    <div className="flex flex-col items-center gap-1">
                        <Image width={35} height={35} src="/inn-icon.svg" alt="Pousadas" />
                        <p className="text-sm lg:text-base text-grayPrimary">Pousada</p>
                    </div>
                </Link>

                <Link href={`/trips/search?text=mar&praia&resort`} className="hidden lg:flex">
                    <div className="flex flex-col items-center gap-1">
                        <Image width={35} height={35} src="/resort-icon.svg" alt="Resorts" />
                        <p className="text-sm lg:text-base text-grayPrimary">Resorts</p>
                    </div>
                </Link>

                <Link href={`/trips/search?text=museus&historia`} className="hidden lg:flex">
                    <div className="flex flex-col items-center gap-1">
                        <Image width={35} height={35} src="/tourist-spot-icon.svg" alt="Pontos turísticos" />
                        <p className="text-sm lg:text-base text-grayPrimary">Pontos turísticos</p>
                    </div>
                </Link>
            </div >
        </div >
    );
}

export default QuickSearch;