import * as React from 'react'
import {
Jumbotron
} from 'reactstrap'
import Main from './Main'
type Props = {
    title: string;
    lead?: string;
}

export default ({
title,
lead,
}: Props) => {
    return (
        <Jumbotron fluid>
            <Main>
                <h1 className="display-4">{title}</h1>
                <p className="lead">{lead}</p>
            </Main>
        </Jumbotron>
    )
}