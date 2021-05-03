const expect = require('chai').expect;
const navigate = require ('../src/navigate.js')

describe('navigate.js tests', () => {
    describe('navigate.move() Test', () => {
        it('move(1,1) - Should equal 2', () => {
            const result = navigate.move(1, 1);
            expect(result).to.equal(2);
        });
    });
    describe('navigate.move() Test', () => {
        it('move(0,0) - Should equal 0', () => {
            const result = navigate.move(0,0);
            expect(result).to.equal(0);
        });
    });
})