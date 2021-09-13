import "./SegmentedBar.css"

export interface Segment {
    key: any
    size: number
}

export interface SegmentedBarProps {
    segments: Segment[]
}

export default function SegmentedBar(props: SegmentedBarProps) {
    const segmentsList = props.segments.map((v, i, a) => {
        return <span
            key={v.key}
            className={`segment`}
            style={{width: `${v.size}%`}}></span>
    })
    
    return (
        <div className="SegmentedBar">
            {segmentsList}
        </div>
    );
}