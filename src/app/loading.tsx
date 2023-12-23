import Image from "next/image";

const Loading = () => {
    return (
        <div className="flex h-[100vh] flex-col items-center justify-center gap-2 p-5 mt-[-15%]">
            <h2 className="font-bold text-primaryDarker">Aguarde...</h2>
            <Image src={"/icon.svg"} width={40} height={40} alt="loading" className="anim" />
        </div>

    );
}

export default Loading;