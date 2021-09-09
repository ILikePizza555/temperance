export interface Radius {
    rx: number
    ry: number
}

export interface RectProps {
    x: number
    y: number
    width: number
    height: number
    topLeftRadius?: Radius
    topRightRadius?: Radius
    bottomLeftRadius?: Radius
    bottomRightRadius?: Radius
}

export default function Rect(props: RectProps) {
    let startPoint = [props.x, props.y]

    let topRightBorderPoint = [props.x + props.width, props.y]
    let bottomRightBorderPoint = [props.x + props.width, props.y + props.height]
    let bottomLeftBorderPoint = [props.x, props.y + props.height]
    let topLeftBorderPointEnd = [props.x, props.y]

    let topLeftArc = ""
    let topRightArc = ""
    let bottomRightArc = ""
    let bottomLeftArc = ""

    if (props.topLeftRadius) {
        startPoint[0] += props.topLeftRadius.rx
        topLeftBorderPointEnd[1] += props.topLeftRadius.ry

        topLeftArc = `Q${props.x} ${props.y} ${startPoint[0]} ${startPoint[1]}`
    }

    if (props.topRightRadius) {
        topRightBorderPoint[0] -= props.topRightRadius.rx

        topRightArc = `Q${props.x + props.width} ${props.y} ${props.x + props.width} ${props.y + props.topRightRadius.ry}`
    }

    if (props.bottomRightRadius) {
        bottomRightBorderPoint[1] -= props.bottomRightRadius.ry

        bottomRightArc = `Q${props.x + props.width} ${props.y + props.height} ${props.x + props.width - props.bottomRightRadius.rx} ${props.y + props.height}`
    }

    if (props.bottomLeftRadius) {
        bottomLeftBorderPoint[0] += props.bottomLeftRadius.rx
        
        bottomLeftArc = `Q${props.x} ${props.y + props.height} ${props.x} ${props.y + props.height - props.bottomLeftRadius.ry}`
    }

    const pathString = `M${startPoint[0]} ${startPoint[1]}
        L${topRightBorderPoint[0]} ${topRightBorderPoint[1]}
        ${topRightArc}
        L${bottomRightBorderPoint[0]} ${bottomRightBorderPoint[1]}
        ${bottomRightArc}
        L${bottomLeftBorderPoint[0]} ${bottomLeftBorderPoint[1]}
        ${bottomLeftArc}
        L${topLeftBorderPointEnd[0]} ${topLeftBorderPointEnd[1]}
        ${topLeftArc}`

    return (
        <path d={pathString}/>
    );
}