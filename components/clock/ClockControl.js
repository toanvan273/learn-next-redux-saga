import React from 'react'
const n = n => (n < 10 ? '0' + n : n)
const format = t => {
    const hours = t.getUTCHours()
    const mins = t.getUTCMinutes()
    const seconds = t.getUTCSeconds()
    return `${n(hours)}:${n(mins)}:${n(seconds)}`
}
function ClockControl({ lastUpdate, light }) {
   console.log('ClockControl', lastUpdate, light);
   
    return (
        <div className={light ? 'light' : ''}>
            {format(new Date(lastUpdate))}
            <style jsx>
                {`
                div {
                    padding: 15px;
                    display: inline-block;
                    color: #82fa58;
                    font: 50px menlo, monaco, monospace;
                    background-color: #000;
                    }
                    .light {
                    background-color: #999;
                    }
                `}
            </style>
        </div>
    )
}
export default ClockControl