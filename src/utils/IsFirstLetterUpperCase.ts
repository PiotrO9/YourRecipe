abstract class IsFirstLetterUpperCase {
  static validate(text: string): boolean {
    const firstLetter = text.charAt(0);
    return firstLetter === firstLetter.toUpperCase();
  }
}

export default IsFirstLetterUpperCase;
