import scrollTo from "scroll-to-element"

export const scrollToPosition = (target, offset) => {
    scrollTo(target, {
        offset
    })
}