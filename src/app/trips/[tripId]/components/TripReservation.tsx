"use client";
import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { differenceInDays } from "date-fns";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

interface TripReservationProps {
    tripId: string;
    tripStartDate: Date;
    tripEndDate: Date;
    maxGuests: number;
    pricePerDay: number;
}

interface TripReservationForm {
    guests: number;
    startDate: Date | null;
    endDate: Date | null;
}


const TripReservation = ({ tripId, maxGuests, tripStartDate, tripEndDate, pricePerDay }: TripReservationProps) => {
    const { register, handleSubmit, formState: { errors }, control, watch, setError } = useForm<TripReservationForm>();

    const router = useRouter();
    const onSubmit = async (data: any) => {
        const response = await fetch('/api/trips/check', {
            method: "POST",
            body: Buffer.from(JSON.stringify({
                startDate: data.startDate,
                endDate: data.endDate,
                tripId,
            }))
        })

        const res = await response.json();
        if (res?.error?.code === 'TRIP_ALREADY_RESERVED') {
            setError("startDate", {
                type: "manual",
                message: "Esta data já está reservada."
            });

            return setError("endDate", {
                type: "manual",
                message: "Esta data já está reservada."
            });
        }

        if (res?.error?.code === 'INVALID_START_DATE') {
            return setError("startDate", {
                type: "manual",
                message: "Data inválida.",
            });
        }

        if (res?.error?.code === 'INVALID_END_DATE') {
            return setError("endDate", {
                type: "manual",
                message: "Data inválida.",
            });
        }
        router.push(`/trips/${tripId}/confirmation?startDate=${data.startDate?.toISOString()}&endDate=${data.endDate?.toISOString()}&guests=${data.guests}`);
    };

    const startDate = watch("startDate");
    const endDate = watch("endDate");

    return (
        <div>
            <div className="flex flex-col px-5">
                <div className="flex gap-4">
                    <Controller
                        name="startDate"
                        rules={{
                            required: {
                                value: true,
                                message: "A data inicial é obrigatória."
                            }
                        }}
                        control={control}
                        render={({ field }) => (
                            <DatePicker
                                error={!!errors?.startDate}
                                errorMessage={errors?.startDate?.message}
                                onChange={field.onChange}
                                selected={field.value}
                                placeholderText="Data de Início"
                                className="w-full"
                                minDate={tripStartDate}
                            />
                        )}
                    />

                    <Controller
                        name="endDate"
                        rules={{
                            required: {
                                value: true,
                                message: "A data final é obrigatória."
                            }
                        }}
                        control={control}
                        render={({ field }) => (
                            <DatePicker
                                error={!!errors?.endDate}
                                errorMessage={errors?.endDate?.message}
                                onChange={field.onChange}
                                selected={field.value}
                                placeholderText="Data Final"
                                className="w-full"
                                minDate={startDate ?? tripStartDate}
                                maxDate={tripEndDate}
                            />
                        )}
                    />
                </div>
                <Input
                    {...register("guests", {
                        required: {
                            value: true,
                            message: "Número de hóspedes é obrigatório."
                        },
                        max: {
                            value: maxGuests,
                            message: `Número de hospedes não pode ser maior que ${maxGuests}.`,
                        }
                    })}
                    placeholder={`Número de hóspedes (max: ${maxGuests})`}
                    className="mt-4"
                    error={!!errors?.guests}
                    errorMessage={errors?.guests?.message}
                    type="number"
                />
                <div className="flex justify-between mt-3">
                    <p className="font-semibold text-md text-primaryDarker">Total:
                        {
                            startDate && endDate ?
                                ` ${differenceInDays(endDate, startDate)}` : '0'
                        } noite(s)
                    </p>
                    <p className="font-semibold text-md text-primaryDarker">
                        {
                            startDate && endDate ?
                                `R$ ${differenceInDays(endDate, startDate) * pricePerDay}` : 'R$ 0'
                        }
                    </p>
                </div>
                <div className="pb-10 border-b border-b-grayLighter w-full">
                    <Button onClick={() => handleSubmit(onSubmit)()} className="mt-3 w-full">Reservar agora</Button>
                </div>
            </div>
        </div>
    );
}

export default TripReservation;