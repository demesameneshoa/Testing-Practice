const stringLength=require('./functions');

test('Tests string length provided', () => {
    expect(stringLength('Test')).toBe(4);
});