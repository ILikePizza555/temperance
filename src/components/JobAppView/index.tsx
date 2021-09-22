/** This component displays data for a single job application. */

export interface JobAppViewProps {
    name: string
    position?: string
    link?: string
    status?: string
}

function JobAppView(props: JobAppViewProps) {
    return (
        <div className="JobAppView">
            <h2>{props.name}</h2>
            <div className="row">
                {
                    props.position !== undefined &&
                    <div className="datum-block">
                        <h3><i className="icon">person</i> POSITION</h3>
                        <span>{props.position}</span>
                    </div>
                }
                {
                    props.link !== undefined &&
                    <div className="datum-block">
                        <h3><i className="icon">link</i> LINK</h3>
                        <span><a href={props.link}>{props.link}</a></span>
                    </div>
                }
                {
                    props.status !== undefined &&
                    <div className="datum-block">
                        <h3><i className="icon">info</i> STATUS</h3>
                        <span>{props.status}</span>
                    </div>
                }
            </div>
        </div>
    );
}

export default JobAppView