import React from 'react'

import ReactMarkdown from 'react-markdown'

const ChangeLog = () => {
    const importAllPosts = (r: __WebpackModuleApi.RequireContext) => r.keys().map((file: string) => ({
        filename: file,
        content: r(file).default,  // Use .default if you have ESModule exports
      }));
      const markdownFiles = importAllPosts(require.context(
        '!!raw-loader!./changeLogArchives', // Use raw-loader
        false,
        /\.md$/
    )).sort().reverse();

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <ReactMarkdown
                components={{
                    // Style the main heading
                    h1: ({...props}) => (
                        <h1 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400" {...props} />
                    ),
                    // Style section headings
                    h3: ({ ...props}) => (
                        <h3 className="text-xl font-semibold mt-4 mb-4 text-blue-500 dark:text-blue-300" {...props} />
                    ),
                    // Style unordered lists (categories)
                    ul: ({ ...props}) => (
                        <ul className="space-y-2 mb-2 ml-4" {...props} />
                    ),
                    // Style list items
                    li: ({...props}) => (
                        <li className="text-sm text-gray-600 dark:text-gray-300" {...props} />
                    ),
                    // Style ordered lists with list items
                    ol: ({...props}) => (
                        <ol className="list-decimal pl-8 space-y-2 mb-6 text-sm text-gray-600 dark:text-gray-300" {...props} />
                    ),

                }}
            >
                {markdownFiles[0].content}
            </ReactMarkdown>
        </div>
    )
}

export default ChangeLog