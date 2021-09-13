import Scale, {ScaleProps} from "./Scale"
import { differenceInCalendarDays, Interval, toDate } from "date-fns";
import "./LinearCalendar.css"
import SegmentedBar from "./SegmentedBar";

export interface LinearCalendarProps {
    scaleInterval: Interval,
    scaleTickRate?: number
}

export default function LinearCalendar(props: LinearCalendarProps) {
    const scaleTickRate = props.scaleTickRate || 7
    const totalTickCount = Math.ceil(differenceInCalendarDays(props.scaleInterval.end, props.scaleInterval.start) / scaleTickRate)
    
    return (
        <div className="LinearCalendar">
            <Scale  startingDate={toDate(props.scaleInterval.start)} 
                    tickRate={scaleTickRate} 
                    ticks={totalTickCount}/>
        </div>
    );
}