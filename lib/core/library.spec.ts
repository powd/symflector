import { Library } from './library';

describe('Library', () => {
  it('should set "Hungarian" for "hu" code', () => {
    // Given
    const library = new Library();

    // When
    const result = library.setLanguage('hu');

    // Then
    expect(result).toBe('Language "Hungarian" selected');
  });

  it('should set "Polish" for "pl" code', () => {
    // Given
    const library = new Library();

    // When
    const result = library.setLanguage('pl');

    // Then
    expect(result).toBe('Language "Polish" selected');
  });
});
