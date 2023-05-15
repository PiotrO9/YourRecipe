class TimeConverter {
    convert(timeSpan: number): string {
        const hours = (timeSpan >= 60) ? (Math.floor(timeSpan / 60)) : 0
        const minutes = (hours > 0) ? (timeSpan - (hours * 60)) : timeSpan

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

export default TimeConverter