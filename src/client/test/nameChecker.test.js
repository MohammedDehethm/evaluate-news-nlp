import {checkForName} from '../js/nameChecker'

describe('Testing URL', () => {
    it('Returns true on valid url', () => {
        expect(checkForName('www.google.com'));
    })
})