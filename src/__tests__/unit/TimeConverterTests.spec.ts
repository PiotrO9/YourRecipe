import TimeConverter from '../../utils/TimeConverter';

test('Convert time which is less than 60, should return response without hours', () => {
    const timeConverter = new TimeConverter()
    
    expect(timeConverter.convert(55)).toBe("55 min")
});

