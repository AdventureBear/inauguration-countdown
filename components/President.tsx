import Link from "next/link";
import {slugify} from "@/utils/slugify";
import { President as PresidentType } from '@/types/types';

interface Props {
    president: PresidentType;
}

const President = ({president}: Props) => {
    return (
        <Link
            key={`${president.name}-${president.terms[0].yearStart}`}
            href={`presidents/${slugify(president.name)}`}
            className="bg-blue-50 dark:bg-gray-800 dark:text-blue-400 rounded-lg p-3 shadow transition
               hover:bg-blue-100 dark:hover:bg-gray-700
               hover:shadow-md dark:hover:shadow-lg relative"
        >
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-bold">
                    {president.name}
                </h2>
                <span className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-lg text-2xl font-bold shadow-sm">
                    #{president.number}
                </span>
            </div>

            <div className="flex items-center text-blue-600 dark:text-blue-300">
                <span className="font-medium hover:text-blue-800 dark:hover:text-blue-200">
                    View Details →
                </span>
            </div>

            <div className="absolute bottom-3 right-3 flex gap-2 items-center">
                {president.terms.map((term) => (
                    <span 
                        key={term.yearStart}
                        className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                        {`${term.yearStart}-${term.yearEnd}`}
                    </span>
                ))}
                <span className="text-xs text-blue-600 dark:text-blue-300">
                    ({president.terms.length} {president.terms.length === 1 ? 'Term' : 'Terms'})
                </span>
            </div>
        </Link>
    )
}

export default President
