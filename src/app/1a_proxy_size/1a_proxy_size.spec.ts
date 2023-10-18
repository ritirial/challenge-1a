import { proxy_size } from './1a_proxy_size'

describe('1a_proxy_size', () => {
    it('Should return a JSON with the next data: 160,591,114,229,230,270,128,1657,624,1503', () => {
        expect(proxy_size()).toContain(160);
        expect(proxy_size()).toContain(591);
        expect(proxy_size()).toContain(114);
        expect(proxy_size()).toContain(229);
        expect(proxy_size()).toContain(230);
        expect(proxy_size()).toContain(270);
        expect(proxy_size()).toContain(128);
        expect(proxy_size()).toContain(1657);
        expect(proxy_size()).toContain(624);
        expect(proxy_size()).toContain(1503);
    });
});
