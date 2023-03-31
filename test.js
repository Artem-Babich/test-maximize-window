import {Selector} from 'testcafe';

fixture`Test fixture`
    .page('./index.html');


for (let i = 0; i < 5; i++) {
    test(`Test ${i}`, async t => {
        await t.click('button').wait(3000).expect(Selector('#result').innerText).eql('OK')
    })
}
