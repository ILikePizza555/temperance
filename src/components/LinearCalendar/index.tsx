import { addDays, differenceInCalendarDays, format, formatISO, Interval, toDate } from "date-fns";
import "./LinearCalendar.css"
import SegmentedBar from "./SegmentedBar";

export interface LinearCalendarProps {
    scaleInterval: Interval,
    scaleTickCount?: number
}

function createTickDates(startDate: Date, tickCount: number, tickRate: number) {
    return Array.from({length: tickCount}, (_, i) => addDays(startDate, i * tickRate))
}

function createTicks(dates: Date[]) {
    return dates.map((v, i) => {
        const elementStyle = {
            gridColumn: i + 1
        }

        return <time key={i}
                     style={elementStyle}
                     dateTime={formatISO(v, { representation: "date"})}>{format(v, "LLL d")}</time>
    })
}

export default function LinearCalendar(props: LinearCalendarProps) {
    const tickCount = props.scaleTickCount || 14
    const tickRate = Math.ceil(differenceInCalendarDays(props.scaleInterval.end, props.scaleInterval.start) / tickCount)
    const tickDates = createTickDates(toDate(props.scaleInterval.start), tickCount, tickRate)
    
    const gridStyle: React.CSSProperties = {
        gridTemplateColumns: `repeat(${tickCount}, 1fr)`
    }

    return (
        <div className="LinearCalendar"
             style={gridStyle}>
            {createTicks(tickDates)}
        </div>
    );
}