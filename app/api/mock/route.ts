export async function GET() {

    // Add some delay to test caching, loading and etc
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: "Successfully delayed" })
        }, 5000)
    })

    return Response.json({
        number: Math.floor(Math.random() * 10) + 1,
    })
}