/// 牌照详情

import puppeteer from "puppeteer";

export const getDetail = async (ceref: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // Navigate the page to a URL.
  await page.goto(`https://apps.sfc.hk/publicregWeb/corp/${ceref}/details`, {
    waitUntil: "networkidle2",
  });

  const raDetailData = await page.evaluate(() => {
    // 假设你要获取的全局变量名为 `globalVar`
    // @ts-ignore
    return window.raDetailData;
  });
  await browser.close();

  return raDetailData;
};