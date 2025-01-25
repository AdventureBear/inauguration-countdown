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
               hover:shadow-md dark:hover:shadow-lg"
        >
            <h2 className="font-bold mb-2">
                {president.number}. {president.name}
            </h2>
            <div className="text-sm text-blue-600 dark:text-blue-300">
                <p>{`Served ${president.terms.length} ${president.terms.length === 1 ? 'Term' : 'Terms'} `}</p>

                {president.terms.map((term) => (
                    <p key={term.yearStart}>{`${term.yearStart} through ${term.yearEnd}`}</p>
                ))}

            </div>
        </Link>
    )
}
export default President
