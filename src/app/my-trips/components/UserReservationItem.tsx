import { Prisma, TripReservation } from "@prisma/client";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import ptBR from "date-fns/locale/pt-BR";
import { format } from "date-fns";
import Button from "@/components/Button";

interface UserReservationItemProps {
    reservation: Prisma.TripReservationGetPayload<{
        include: { trip: true }
    }>
}

const UserReservationItem = ({ reservation }: UserReservationItemProps) => {
    const { trip } = reservation;
    return (
        <div>
            <div className="flex flex-col p-5 mt-5 border-grayLighter border-solid border shadow-lg rounded-lg">
                <div className="flex items-center gap-3 pb-5 border-b border-grayLighter border-solid">
                    <div className="relative h-[106px] w-[124px]">
                        <Image src={trip.coverImage} fill style={{ objectFit: "cover" }} alt={trip.name} className="rounded-lg" />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-xl text-primaryDarker font-semibold">{trip.name}</h2>
                        <div className="flex items-center gap-1">
                            <ReactCountryFlag countryCode={trip.countryCode} svg />
                            <p className="text-xs text-grayPrimary underline">{trip.location}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-5 text-sm">
                    <h3 className="font-semibold text-primaryDarker mb-3">Sobre a viagem</h3>
                    <h3>Data</h3>
                    <div className="flex items-center gap-1">
                        <p>{format(reservation.startDate, "dd 'de' MMMM", { locale: ptBR })}</p>
                        {" - "}
                        <p>{format(reservation.endDate, "dd 'de' MMMM", { locale: ptBR })}</p>
                    </div>

                    <h3 className="mt-5">Hóspedes</h3>
                    <p>{reservation.guests} hóspedes</p>

                    <h3 className="font-semibold text-primaryDarker mt-3 pt-3 border-t border-solid border-grayLighter">Informações sobre o pagamento</h3>
                    <div className="flex justify-between mt-1">
                        <p className="text-sm">Total: </p>
                        <p className="font-medium text-sm">R$ {Number(reservation.totalPaid)} </p>
                    </div>
                    <Button variant="danger" className="mt-5">Cancelar reserva</Button>

                </div>
            </div>
        </div>
    );
}

export default UserReservationItem;