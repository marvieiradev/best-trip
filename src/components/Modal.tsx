import React, { ReactNode } from "react";
import Button from "./Button";

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
    action: () => void;
}

export default function Modal(props: ModalType) {
    return (
        <>
            {props.isOpen && (
                <div className="z-30 modal-overlay bg-black fixed inset-0 bg-dark bg-opacity-10 backdrop-blur-sm flex justify-center items-center" onClick={props.toggle}>
                    <div onClick={(e) => e.stopPropagation()} className="modal-box">
                        <div className="h-[200px] w-[300px] lg:h-[250px] lg:w-[400px] bg-white border-grayLighter border-solid border shadow-lg rounded-lg">
                            <div className="flex flex-col items-center px-5">
                                <h1 className="mt-3 text-lg lg:mt-6 lg:text-xl text-center text-primaryDarker font-bold">Deseja realmente cancelar esta reserva?</h1>
                                <h3 className="text-sm text-center mt-3 lg:font-semibold lg:mt-10 text-red-600">(Esta operação não poderá ser desfeita!)</h3>
                                <div className="flex flex-row items-center justify-center gap-3 w-full mt-5 lg:mt-10">
                                    <Button onClick={props.action} className="w-1/2" variant="danger">Sim</Button>
                                    <Button onClick={props.toggle} className="w-1/2">Não</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}