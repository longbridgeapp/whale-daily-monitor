/// 投诉主任

import puppeteer from "puppeteer";

export const getCofficerData = async (ceref: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // Navigate the page to a URL.
  await page.goto(`https://apps.sfc.hk/publicregWeb/corp/${ceref}/co`, {
    waitUntil: "networkidle2",
  });

  const cofficerData = await page.evaluate(() => {
    // 假设你要获取的全局变量名为 `globalVar`
    // @ts-ignore
    return window.cofficerData;
  });
  await browser.close();

  return cofficerData;
};
