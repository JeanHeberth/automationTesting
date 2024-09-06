import {Browser, Page, chromium} from "@playwright/test";

export class BrowserConfig {

    private browser: Browser;
    private page: Page;

    async start() {
        this.browser = await chromium.launch();
        this.page = await this.browser.newPage();
        return this;
    }

    async stop() {
        await this.browser.close();
    }
}
