const puppeteer = require('puppeteer'); // v22.0.0 or later

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1278,
            height: 965
        })
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        startWaitingForEvents();
        await targetPage.goto('https://eoffice.ilcs.co.id/p2b/login');
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Username)'),
            targetPage.locator('form > div:nth-of-type(1) > input'),
            targetPage.locator('::-p-xpath(/html/body/div/div[2]/div/form/div[1]/input)'),
            targetPage.locator(':scope >>> form > div:nth-of-type(1) > input')
        ])
            .setTimeout(timeout)
            .click({
                offset: {
                    x: 163,
                    y: 42.3125,
                },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Username)'),
            targetPage.locator('form > div:nth-of-type(1) > input'),
            targetPage.locator('::-p-xpath(/html/body/div/div[2]/div/form/div[1]/input)'),
            targetPage.locator(':scope >>> form > div:nth-of-type(1) > input')
        ])
            .setTimeout(timeout)
            .fill('11962624');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Password)'),
            targetPage.locator("input[type='password']"),
            targetPage.locator('::-p-xpath(/html/body/div/div[2]/div/form/div[2]/div/input[1])'),
            targetPage.locator(":scope >>> input[type='password']")
        ])
            .setTimeout(timeout)
            .fill('Ilcs1234!');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Sign In)'),
            targetPage.locator('div.col-12 > button'),
            targetPage.locator('::-p-xpath(/html/body/div/div[2]/div/form/div[3]/button)'),
            targetPage.locator(':scope >>> div.col-12 > button'),
            targetPage.locator('::-p-text(Sign In)')
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click({
                offset: {
                    x: 176,
                    y: 19.3125,
                },
            });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Absen Masuk )'),
            targetPage.locator('#btnAbsenMasuk'),
            targetPage.locator('::-p-xpath(//*[@id=\\"btnAbsenMasuk\\"])'),
            targetPage.locator(':scope >>> #btnAbsenMasuk')
        ])
            .setTimeout(timeout)
            .click({
                offset: {
                    x: 63.421875,
                    y: 24.28125,
                },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#via'),
            targetPage.locator('::-p-xpath(//*[@id=\\"via\\"])'),
            targetPage.locator(':scope >>> #via')
        ])
            .setTimeout(timeout)
            .click({
                offset: {
                    x: 219.5,
                    y: 18,
                },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#via'),
            targetPage.locator('::-p-xpath(//*[@id=\\"via\\"])'),
            targetPage.locator(':scope >>> #via')
        ])
            .setTimeout(timeout)
            .fill('WFS');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Submit)'),
            targetPage.locator('#modalMasuk button.btn-primary'),
            targetPage.locator('::-p-xpath(//*[@id=\\"modalMasuk\\"]/div/div/div[3]/button[2])'),
            targetPage.locator(':scope >>> #modalMasuk button.btn-primary')
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click({
                offset: {
                    x: 26.921875,
                    y: 6,
                },
            });
        await Promise.all(promises);
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});