import React, { useEffect } from 'react';

let renderCount = 0;
export default function Child() {
    useEffect(() => {
        renderCount++;
    });

    return (<div>render count: {renderCount} </div>)
}