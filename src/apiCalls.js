export const getHolidays = () => {
    return fetch("https://date.nager.at/api/v3/publicholidays/2023/US")
    .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`)
        }
          return response.json()
    })
}