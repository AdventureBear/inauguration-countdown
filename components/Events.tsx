import React from 'react'
import events from "@/data/events.json";
import Event from '../components/Event'

const filteredEvents = events.events
    .filter((event) => event.date) // Exclude events without a date
    .filter((event) => !isNaN(new Date(event.date).getTime())) // Exclude invalid dates
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()); // Sort by ascending date


const Events = () => {
   
    return (
        <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Key Events Leading Up To the Next US Presidential Election</h2>
            <div className="flex flex-col gap-4">
                {filteredEvents.map((event) => (
                    <Event key={event.title} event={event}/>
                ))}
            </div>
        </section>

    )
}
export default Events
