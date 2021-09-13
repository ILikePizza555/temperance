import { differenceInCalendarDays, addDays, formatISO, format } from "date-fns"

export interface ScaleProps {
    startingDate: Date
    tickRate: number
    ticks: number
}

export default function Scale(props: ScaleProps) {
    const ticks = Array.from({length: props.ticks}, (_, i) => {
        const tickDate = addDays(props.startingDate, i * props.tickRate)
        
        // Using the array index as the key because ticks have a strong relation with their position in the array.
        return <time
            key={i}
            style={{gridColumn: i + 1}}
            dateTime={formatISO(tickDate, { representation: "date"})}>{format(tickDate, "LLL d")}</time>
    })

    return (
        <>{ticks}</>
    );
}