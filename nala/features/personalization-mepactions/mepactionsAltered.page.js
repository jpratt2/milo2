export default class PZN {
  constructor(page) {
    this.page = page;

    this.sec6 = this.page.locator('#section-6-replacement');
    this.sec3 = this.page.locator('h3').nth(2);
    this.appendedH3 = this.page.locator('h3').nth(3);
    this.appendedH3Second = this.page.locator('h3').nth(4);
    this.prependedH3 = this.page.locator('h3').nth(5);
    this.prependedH3text = this.page.locator('#prepended-to-4 + p');
    this.sec4 = this.page.locator('h3').nth(6);
    this.sec5 = this.page.getByText('Base page text. Section 5');
    this.sec2 = this.page.locator('h3').nth(1);
    this.insertedSec2 = this.page.locator('h3').nth(0);
    this.sec8 = this.page.locator('h3').nth(10);
    this.sec8Text = this.page.locator('#replaced-basepage-fragment + p');
    this.learnMoreReplaced = this.page.locator('[daa-ll="Learn more-1--Replaced basepage fr"]');
    this.sec9 = this.page.locator('h3').nth(11);
    this.sec10 = this.page.locator('h3').nth(12);
    this.sec10link = this.page.locator('a[daa-ll="Explore the premium -2--Inserted after repla"]');
    this.h3s = this.page.locator('h3').locator('visible=true');
    this.secLast = this.page.locator('h3').last();
  }
}
