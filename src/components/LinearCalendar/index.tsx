import { addDays, differenceInCalendarDays, format, formatISO, Interval, toDate } from "date-fns";
import "./LinearCalendar.css"
import SegmentedBar from "./SegmentedBar";

export interface LinearCalendarProps {
    scaleInterval: Interval,
    scaleTickRate?: number
}

function createTickDates(startDate: Date, endDate: Date, tickRate: number) {
    const tickCount = Math.ceil(differenceInCalendarDays(startDate, endDate) / tickRate)
    return Array.from({length: tickCount}, (_, i) => addDays(startDate, i * tickRate))
}


export default function LinearCalendar(props: LinearCalendarProps) {
    const scaleTickRate = props.scaleTickRate || 7
    const tickDates = createTickDates(toDate(props.scaleInterval.start), toDate(props.scaleInterval.end), scaleTickRate)
    
    return (
        <div className="LinearCalendar">
            {tickDates.map((v, i) => <time 
                key={i} 
                style={{gridColumn: i + 1}} 
                dateTime={formatISO(v, { representation: "date"})}>{format(v, "LLL d")}</time>)}
        </div>
    );
}