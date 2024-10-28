
export function getMockNumber() {
    return fetch(`${process.env.APP_URL}/api/mock`)
}