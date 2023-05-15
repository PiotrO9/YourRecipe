export default class TimeConverter {
    convert(timeSpan: number): string {
        const hours = timeSpan / 60
        const minutes = timeSpan - (hours * 60)

        if(hours === 0) {
            return `${minutes} min`
        }
        else if (minutes === 0) {
            return `${hours} h`
        }
        else {
            return `${hours} h ${minutes} min`
        }
    }
}