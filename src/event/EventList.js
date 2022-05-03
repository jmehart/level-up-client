import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { getEvents } from "./EventManager.js"

export const EventList = (props) => {
    const [events, setEvents] = useState([])
    const history = useHistory()

    useEffect(() => {
        getEvents().then(data => setEvents(data))
    }, [])

    return (
        <article className="events">
            <h2>EVENTS</h2>
            {
                events.map(event => {
                    return <><section key={`event--${event.id}`} className="event">
                        <br></br>
                        <div className="event__description">{event.description}</div>
                        <div className="event__game">Game: {event.game?.title}</div>
                        <div className="event__time">Event starts at {event.time} on {event.date}</div>
                    </section>
                    <button><Link to={`/events/${event.id}/edit`}>Edit</Link></button></>
                })
            }
            <br></br><button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/events/new" })
                }}
            >Register New Event</button>
            <br></br></article>
    )
}