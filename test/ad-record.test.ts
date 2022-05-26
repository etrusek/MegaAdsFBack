import {AdRecord} from "../records/ad.record";
import {ValidationError} from "../utils/errors";


const defaultObj = {
    name: 'Test',
    description: 'Testowy opis',
    lat: 9,
    lon: 9,
    price: 0,
    url: "https://megak.pl",
}
test('Can build AdRecord', () => {
    const ad = new AdRecord(defaultObj)
    expect(ad.name).toBe('Test');
    expect(ad.description).toBe('Testowy opis');

})

test('Validates invalid price', () => {
    expect(() => new AdRecord({...defaultObj, price: -1})).toThrow(new ValidationError('Cena ogłoszenia nie może być ujemna ani większa niż 9 999 999zł.'));
})
