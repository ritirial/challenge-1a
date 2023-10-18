import { dev_hours } from './1a_dev_hours'

describe('1a_dev_hours', () => {
    it('Should return a JSON with the next data: 15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2', () => {
       expect(dev_hours()).toContain(15.0);
       expect(dev_hours()).toContain(69.9);
       expect(dev_hours()).toContain(6.5);
       expect(dev_hours()).toContain(22.4);
       expect(dev_hours()).toContain(28.4);
       expect(dev_hours()).toContain(65.9);
       expect(dev_hours()).toContain(19.4);
       expect(dev_hours()).toContain(198.7);
       expect(dev_hours()).toContain(38.8);
       expect(dev_hours()).toContain(138.2);
    });
});
