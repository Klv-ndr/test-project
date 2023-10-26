import { CSSProperties } from 'react'

export interface FontStyles {
    title: CSSProperties
    subtitle: CSSProperties
    description: CSSProperties
    comment: CSSProperties
}

export const fontStyles: FontStyles = {
    title: {
        fontWeight: 700,
        fontSize: '36px',
        lineHeight: 1.3,
        color: '#4D533C',
    },
    subtitle: {
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: 1.5,
        color: '#4D533C',
    },
    description: {
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: 1.6,
        color: '#213842',
    },
    comment: {
        fontStyle: 'italic',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: 1.6,
        color: '#4D533C',
    },
}
