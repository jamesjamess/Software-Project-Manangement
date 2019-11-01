const converter = require('./converter.js')

    test('0฿ = 0$', () => {
        expect(converter(0)).toEqual('$0.00')
    });

    test('5฿ = 0.16$', () => {
        expect(converter(5)).toEqual('$0.16')
    });

    test('50฿ = 1.60$', () => {
        expect(converter(50)).toEqual('$1.65')
    });

    test('500฿ = 16$', () => {
        expect(converter(500)).toEqual('$16.50')
    });

    test('5000฿ = 160$', () => {
        expect(converter(5000)).toEqual('$165.00')
    });
    
    test('Your input is String', () => {
        expect(converter("String")).toEqual("error")
    });

