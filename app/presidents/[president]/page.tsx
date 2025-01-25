import React from 'react'
import {President} from '@/types/types';
import presidents from "@/data/events.json";
import {slugify} from "@/utils/slugify";
import {notFound} from "next/navigation";

interface Props {
    params: Promise<{ presidentSlug: President }>;
}

export default async function  PresidentPage({params}:Props) {
    const {presidentSlug } = await(params)
    const president = presidents.find(e => slugify(e.name) === presidentSlug);

    if (!president) return notFound();



    return (
        <div>PresidentPage</div>
    )
}

