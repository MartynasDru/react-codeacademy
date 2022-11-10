import { sum } from './utils';

describe('utils', () => {
    describe('sum', () => {
        test('should add numbers correctly', () => {
            expect(sum(5, 10)).toBe(15);
        });
    });
});