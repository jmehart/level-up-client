import React, { useEffect, useState } from "react"
import { getEvents } from "./EventManager.js"

export const EventList = (props) => {
    const [ events, setEvents ] = useState([])

    useEffect(() => {
        getEvents().then(data => setEvents(data))
    }, [])

    return (
        <article className="events">
            <div>EVENTS</div>
            {
                events.map(event => {
                    return <section key={`event--${event.id}`} className="event">
                        <br></br>
                        <div className="event__description">{event.description}</div>
                        <div className="event__game">Game: {event.game?.title}</div>
                        <div className="event__time">Event starts at {event.time} on {event.date}</div>
                    </section>
                })
            }
        <br></br></article>
    )
}