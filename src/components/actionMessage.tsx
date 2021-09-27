import React, { useEffect, useState, useRef } from 'react'

interface Props {
    message?: string | null
    messageTimestamp?: number | null
}

export const ActionMessage: React.FC<Props> = ({ message, messageTimestamp }) => {
    const [showMessage, setShowMessage] = useState(false)
    const messageTimeout = useRef<any>()

    useEffect(() => {
        if (message) {
            setShowMessage(true)
            clearTimeout(messageTimeout.current)
            messageTimeout.current = setTimeout(() => {
                setShowMessage(false)
            }, 1000)
        }
    }, [message, messageTimestamp])

    const messageStyle = {
        opacity: showMessage ? 1 : 0,
        transition: showMessage ? '' : 'all 1s ease-in',
    }
    return <div style={messageStyle}>{message}</div>
}
