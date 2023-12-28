'use client';
import Button from "@/components/Button";
import TripItem from "@/components/TripItens";
import { Trip } from "@prisma/client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useEffect } from "react";

const Trips = async () => {
    const [trips, setTrips] = React.useState<Trip[]>([]);
    const searchParams = useSearchParams();
    useEffect(() => {
        const fetchTrips = async () => {
            const response = await fetch(`/api/trips/search?text=${searchParams.get("text") ?? ""}&startDate=${searchParams.get("startDate")}&budget=${searchParams.get("budget")}`)
            const data = await response.json();
            setTrips(data);
        };
        fetchTrips()
    }, []);

    return (
        <div className="container mx-auto flex flex-col items-center p-5 lg:items-start">
            <h1 className="text-primaryDarker font-semibold text-xl lg:text-[2.5rem] lg:w-full lg:text-left">Viagens Encontradas</h1>
            <h2 className="text-grayPrimary font-medium mb-5 lg:mt-6 lg:w-full lg:text-left">{trips.length > 0 ? "Listamos as melhores hospedagens pra você!" : "Não encontramos nada nos seus parâmetros."}</h2>
            {trips.length <= 0 && (
                <Link href={"/"} className="w-full">
                    <Button variant="outlined" className="w-full">Voltar ao início</Button>
                </Link>
            )}
            <div className="flex flex-col gap-4 lg:grid lg:grid-cols-4 lg:gap-10 lg:mt-6 lg:pb-16">
                {trips?.map(trip => (
                    <TripItem key={trip.id} trip={trip} />
                ))}
            </div>
        </div>
    );
}

export default Trips;