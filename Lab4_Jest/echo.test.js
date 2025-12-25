// echo.test.js
const { exf } = require('./echo.js');

describe('Test exf()', () => {
    beforeEach(() => {
        // تجميد console.log لاختبار عدد مرات النداء فقط
        console.log = jest.fn();
    });

    test('should call console.log n times with the string', () => {
        exf('echo', 5);
        expect(console.log).toHaveBeenCalledTimes(5);
        expect(console.log).toHaveBeenCalledWith('echo');
    });

    test('should work with another string and number', () => {
        exf('JS from server', 3);
        expect(console.log).toHaveBeenCalledTimes(3);
        expect(console.log).toHaveBeenCalledWith('JS from server');
    });
});
