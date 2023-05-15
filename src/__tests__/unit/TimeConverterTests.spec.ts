import TimeConverter from '../../utils/TimeConverter';
const timeConverter = new TimeConverter()

test("Convert time which is less than 60, should return response without hours", () => {
    expect(timeConverter.convert(55)).toBe("55 min")
});

test("Convert time which is equal to multiply of 60, return only hours", () => {
    expect(timeConverter.convert(120)).toBe("2 h")
})

test("Convert time which contains value with hours and minutes after convertion", () => {
    expect(timeConverter.convert(110)).toBe("1 h 50 min")
})