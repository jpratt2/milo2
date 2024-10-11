// to run tests:
// npm run nala stage tag=mepact mode=headed
// npm run nala stage tag=mepact1 mode=headed

import { expect, test } from '@playwright/test';
import { features } from './mepactions.spec.js';
import PZNLocatorsAlt from './mepactionsAltered.page.js';
import PZNLocatorsOrig from './mepactionsOrig.page.js';

const miloLibs = process.env.MILO_LIBS || '';

// test the default page
test(`${features[0].name},${features[0].tags}`, async ({ page, baseURL }) => {
  const pznLoc = new PZNLocatorsOrig(page);
  const URL = `${baseURL}${features[0].path}${miloLibs}`;
  console.info(`[Test Page]: ${URL}`);
  const { data } = features[0];

  await page.goto(URL);
  await expect(pznLoc.sec6).toHaveText(data.sec6);
  await expect(pznLoc.sec3).toHaveText(data.sec3);
  await expect(pznLoc.sec4).toHaveText(data.sec4);
  await expect(pznLoc.sec5).toBeVisible();
  await expect(pznLoc.sec2).toHaveText(data.sec2);
  await expect(pznLoc.sec8).toHaveText(data.sec8);
  await expect(pznLoc.h3s).toHaveCount(data.headerCount);
  await expect(pznLoc.secLast).toHaveText(data.secLast);
});

// test the altered page
test(`${features[1].name},${features[1].tags}`, async ({ page, baseURL }) => {
  const pznLoc = new PZNLocatorsAlt(page);
  const URL = `${baseURL}${features[1].path}${miloLibs}`;
  console.info(`[Test Page]: ${URL}`);
  const { data } = features[1];

  await page.goto(URL);
  await page.waitForTimeout(2500);
  await expect(pznLoc.sec6).toHaveText(data.sec6);

  await expect(pznLoc.sec3).toHaveText(data.sec3);
  await expect(pznLoc.appendedH3).toHaveText(data.appendedH3);
  await expect(pznLoc.appendedH3Second).toHaveText(data.appendedH3Second);

  await expect(pznLoc.prependedH3).toHaveText(data.prependedH3);
  await expect(pznLoc.prependedH3text).toHaveText(data.prependedH3text);
  await expect(pznLoc.sec4).toHaveText(data.sec4);

  await expect(pznLoc.sec5).toBeHidden();

  await expect(pznLoc.sec2).toHaveText(data.sec2);
  await expect(pznLoc.insertedSec2).toHaveText(data.insertedSec2);

  await expect(pznLoc.sec8).toHaveText(data.sec8);
  await expect(pznLoc.sec8Text).toHaveText(data.sec8Text);
  await pznLoc.learnMoreReplaced.hover(); // this is a test to see if the learn more button exists
  await expect(pznLoc.sec9).toHaveText(data.sec9);
  await expect(pznLoc.sec10).toHaveText(data.sec10);
  await expect(pznLoc.sec10link).toHaveText(data.sec10link);

  await expect(pznLoc.h3s).toHaveCount(data.headerCount);
  await expect(pznLoc.secLast).toHaveText(data.secLast);
});
