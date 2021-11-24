

export const formDate = (data: Date):string => {
    const year = data.getFullYear();
    const month = data.getMonth() < 10 ? `0${data.getMonth() + 1 }` : data.getMonth() + 1
    const day = data.getDay() < 10 ? `0${data.getDay()}` : data.getDay()
    return `${year}.${month}.${day}`
}