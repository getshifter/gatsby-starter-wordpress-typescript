import * as React from 'react'

type Props = {
    children: React.ReactChild | React.ReactChild[],
    className?: string,
    style?: React.CSSProperties
}

export default ({children, className, style}: Props) => {
    const rowStyle = {
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
        ...style,
    }
    return (
        <div style={rowStyle} className={className}>
            {children}
        </div>
    )
}