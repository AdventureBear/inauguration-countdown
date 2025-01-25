export function slugify(textInput: string) {
    const textOutput =
        textInput.trim().
            toLowerCase().
            replaceAll(" ","-").
            replaceAll(".", "-").
            replaceAll("/","-").
            replaceAll("\\", "-")

    return textOutput
}