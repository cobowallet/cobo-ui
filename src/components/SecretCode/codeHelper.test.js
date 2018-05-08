import { getNoiseWord } from './codeHelper';

describe('codeHelper', () => {
  describe('getNoiseWord', () => {
    it('should return 5 words include the answer', () => {
      const result = getNoiseWord('hello');
      expect(result.length).toBe(4);
    });

    it('should include the answer in the array', () => {
      const result = getNoiseWord('hello');
      const answerList = result.filter(each => each === 'hello');
      expect(answerList.length).toBe(0);
    });
  });
});
