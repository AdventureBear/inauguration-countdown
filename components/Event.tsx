import React from 'react'
import Link from "next/link";
import {slugify} from "@/utils/slugify";

interface EventProps {
    event: {
        id: string,
        title: string,
        date: string
    }
}

const Event = ({event}:EventProps) => {
    return (
        <Link
            key={event.id}
            href={`/events/${slugify(event.title)}`}
            className="bg-blue-50 dark:bg-gray-800 dark:text-blue-400 rounded-lg p-3 shadow transition
               hover:bg-blue-100 dark:hover:bg-gray-700
               hover:shadow-md dark:hover:shadow-lg"
        >
            <h3 className="font-bold mb-2">{event.title}</h3>
            <p className="text-sm text-blue-600 dark:text-blue-300">{event.date}</p>
        </Link>

    )
}

export default Event;
