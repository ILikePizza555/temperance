/**
 * This component displays all related information for a single job application.
 * Reasoning: Created for separation of concerns. This component handles all presentation related to displaying job app data.
 */

import React from "react"

export interface JobAppData {
    position: string
    link?: string
    status?: string
}

export interface JobAppViewProps {
    data: JobAppData
    heading: string
    titleHeadingLevel?: number
    datumHeadingLevel?: number
}

export default function JobAppView(props: JobAppViewProps) {
    const titleHeadingLevel = props.titleHeadingLevel || 2
    const datumHeadingLevel = props.datumHeadingLevel || titleHeadingLevel + 1

    // Cast to JSX.IntrinsicElements so that Typescript doesn't complain
    const TitleHeading = `h${titleHeadingLevel}` as keyof JSX.IntrinsicElements
    const DatumHeading = `h${datumHeadingLevel}` as keyof JSX.IntrinsicElements

    return <section className="JobAppView">
        <TitleHeading>{props.heading}</TitleHeading>
        <div className="row">
            <div className="datum"> 
                <DatumHeading>Position</DatumHeading>
                {props.data.position}
            </div>
            { 
                props.data.link !== undefined && 
                <div className="datum">
                    <DatumHeading>Link</DatumHeading>
                    <a href={props.data.link}>{props.data.link}</a>
                </div>
            }
            {
                props.data.status !== undefined &&
                <div className="datum">
                    <DatumHeading>Status</DatumHeading>
                    {props.data.status}
                </div>
            }
        </div>
    </section>
}