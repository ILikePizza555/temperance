import SegmentedBar from "./SegmentedBar";

export default function LinearCalendar() {
    const TestSegments = [
        {key: 1, size: 30},
        {key: 2, size: 25},
        {key: 3, size: 5},
        {key: 4, size: 15},
        {key: 5, size: 25}
    ]
    
    return (
        <SegmentedBar segments={TestSegments} />
    );
}