export default class PZN {
  constructor(page) {
    this.page = page;

    this.sec6 = this.page.locator('#base-page-text-section-6');
    this.sec3 = this.page.locator('h3').nth(1);
    this.sec4 = this.page.locator('h3').nth(2);
    this.sec5 = this.page.getByText('Base page text. Section 5');
    this.sec2 = this.page.locator('h3').nth(0);
    this.sec8 = this.page.locator('h3').nth(6);
    this.h3s = this.page.locator('h3');
    this.secLast = this.page.locator('h3').last(); 
  }
}
