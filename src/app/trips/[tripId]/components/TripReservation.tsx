"use client";

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { Trip } from "@prisma/client";
import { differenceInDays } from "date-fns";
import { difference } from "next/dist/build/utils";
import { Controller, useForm } from "react-hook-form";

interface TripReservationProps {
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


const TripReservation = ({ maxGuests, tripStartDate, tripEndDate, pricePerDay }: TripReservationProps) => {
    const { register, handleSubmit, formState: { errors }, control, watch } = useForm<TripReservationForm>();
    const onSubmit = (data: any) => {
        console.log({ data })
    }

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
                    })}
                    placeholder={`Número de hóspedes (max: ${maxGuests})`}
                    className="mt-4"
                    error={!!errors?.guests}
                    errorMessage={errors?.guests?.message}
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