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

    let topRightX = props.x + props.width
    let bottomRightY = props.y + props.height
    let bottomLeftX = props.x
    let topLeftY = props.y

    let topLeftArc = ""
    let topRightArc = ""
    let bottomRightArc = ""
    let bottomLeftArc = ""

    if (props.topLeftRadius) {
        startPoint[0] += props.topLeftRadius.rx
        topLeftY += props.topLeftRadius.ry

        topLeftArc = `Q${props.x} ${props.y} ${startPoint[0]} ${startPoint[1]}`
    }

    if (props.topRightRadius) {
        topRightX -= props.topRightRadius.rx

        topRightArc = `Q${props.x + props.width} ${props.y} ${props.x + props.width} ${props.y + props.topRightRadius.ry}`
    }

    if (props.bottomRightRadius) {
        bottomRightY -= props.bottomRightRadius.ry

        bottomRightArc = `Q${props.x + props.width} ${props.y + props.height} ${props.x + props.width - props.bottomRightRadius.rx} ${props.y + props.height}`
    }

    if (props.bottomLeftRadius) {
        bottomLeftX += props.bottomLeftRadius.rx
        
        bottomLeftArc = `Q${props.x} ${props.y + props.height} ${props.x} ${props.y + props.height - props.bottomLeftRadius.ry}`
    }

    const pathString = `M${startPoint[0]} ${startPoint[1]}
        H${topRightX}
        ${topRightArc}
        V${bottomRightY}
        ${bottomRightArc}
        H${bottomLeftX}
        ${bottomLeftArc}
        V${topLeftY}
        ${topLeftArc}`

    return (
        <path d={pathString}/>
    );
}