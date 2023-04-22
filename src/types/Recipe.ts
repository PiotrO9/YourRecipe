type Recipe = {
    title: string,
    difficulty: number,
    prepareTime: number,
    description: string,
    ingredients: Array<Array<string>>,
    ImagePath: string
}

export default Recipe