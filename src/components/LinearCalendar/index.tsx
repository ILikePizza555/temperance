import Rect from "./Rect";

export default function LinearCalendar() {
    return (
        <svg width={500} height={500}>
            <Rect 
                x={20}
                y={0}
                width={300}
                height={50}
                topLeftRadius={{rx: 10, ry: 10}}/>

            <Rect 
                x={80}
                y={60}
                width={300}
                height={50}
                topLeftRadius={{rx: 10, ry: 10}}
                topRightRadius={{rx: 15, ry: 15}}/>
            
            <Rect 
                x={140}
                y={120}
                width={300}
                height={50}
                topLeftRadius={{rx: 10, ry: 10}}
                topRightRadius={{rx: 15, ry: 15}}
                bottomRightRadius={{rx:20, ry: 20}}/>
            
            <Rect 
                x={200}
                y={180}
                width={300}
                height={50}
                topLeftRadius={{rx: 10, ry: 10}}
                topRightRadius={{rx: 15, ry: 15}}
                bottomRightRadius={{rx:20, ry: 20}}
                bottomLeftRadius={{rx:30, ry: 30}}/>
        </svg>

        
    );
}