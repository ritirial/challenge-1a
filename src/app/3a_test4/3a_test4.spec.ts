import { data_test4 } from './3a_test4'

describe('3a_test4', () => {
    it('Should return a JSON with the next data: {plan_added:[163,765,141,...],actual_develop:[15.0,69.9,6.5,...]}', () => {
        expect(data_test4().plan_added).toContain(163);
        expect(data_test4().plan_added).toContain(765);
        expect(data_test4().plan_added).toContain(141);
        expect(data_test4().plan_added).toContain(166);
        expect(data_test4().plan_added).toContain(137);
        expect(data_test4().plan_added).toContain(355);
        expect(data_test4().plan_added).toContain(136);
        expect(data_test4().plan_added).toContain(1206);
        expect(data_test4().plan_added).toContain(433);
        expect(data_test4().plan_added).toContain(1130);

        expect(data_test4().actual_develop).toContain(15.0);
        expect(data_test4().actual_develop).toContain(69.9);
        expect(data_test4().actual_develop).toContain(6.5);
        expect(data_test4().actual_develop).toContain(22.4);
        expect(data_test4().actual_develop).toContain(28.4);
        expect(data_test4().actual_develop).toContain(65.9);
        expect(data_test4().actual_develop).toContain(19.4);
        expect(data_test4().actual_develop).toContain(198.7);
        expect(data_test4().actual_develop).toContain(38.8);
        expect(data_test4().actual_develop).toContain(138.2);
    });
});