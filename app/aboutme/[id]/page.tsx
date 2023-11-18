'use client'

import { useParams } from "next/navigation"
export default function Contact() {
    const params = useParams()
    const id = params.id

    return (
        <div>
            <h3>{id}</h3>
        </div>
    )
}
