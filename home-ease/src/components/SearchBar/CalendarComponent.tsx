import React from 'react'

import { Calendar } from "@/components/ui/calendar"

export default function CalendarComponent(props: { index: Number }) {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <div className={`absolute left-${props.index} z-1 mt-3 border shadow-md `}>
            <Calendar
                numberOfMonths={2}
                mode="single"
                selected={date}
                onSelect={setDate}
                className=""
            />
        </div>
    )
}
