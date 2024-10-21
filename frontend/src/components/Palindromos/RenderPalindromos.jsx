import React from 'react'

export const RenderPalindromos = (props) => {

    const textColorClass = props.condition ? 'text-green-600 animate-pulse' : 'text-red-600';
    const displayText = props.condition ? 'True' : 'False';

    return (
        <div className="mt-4 space-y-2">
            <p className="text-gray-700">
                {props.titulo}
                <span className={`font-semibold ${textColorClass}`}>
                    {displayText}
                </span>
            </p>
        </div>
    )
}
