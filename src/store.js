import { writable } from 'svelte/store'

// default value is passed as first arg to writable()
export const fullScreen = writable(false)
export const isMobile = writable(false)
export const isCinema = writable(false)
export const hasEntered = writable(false)
export const chatOpen = writable(false)