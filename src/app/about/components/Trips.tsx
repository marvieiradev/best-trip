import { prisma } from "@/lib/prisma"

const getTrips = async () => {
    const trips = await prisma.trip.findMany({});
    return trips
};

const Trips = async () => {
    const data = await getTrips();
    return <div>Trips</div>
    console.log({ data })
};

export default Trips;