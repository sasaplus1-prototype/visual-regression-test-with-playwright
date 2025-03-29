import { test, expect } from "@playwright/test";

test.describe("Visual Regression Test Example", () => {
  test.beforeEach(async function ({ page }) {
    await page.goto("http://127.0.0.1:3000/index.html");
  });

  test("should capture and compare a screenshot of the homepage", async ({
    page,
  }) => {
    // テスト対象のURLにアクセスします
    // await page.goto("https://playwright.dev/");

    // ページ全体のスクリーンショットを撮って比較します
    // 最初の実行時には基準画像が作成されます
    await expect(page).toHaveScreenshot("index.png");
  });

  // test("should capture and compare a screenshot of a specific element", async ({
  //   page,
  // }) => {
  //   // テスト対象のURLにアクセスします
  //   await page.goto("https://playwright.dev/");

  //   // 特定の要素のセレクタ
  //   const logoSelector = ".navbar__logo";

  //   // 特定の要素のスクリーンショットを撮って比較します
  //   await expect(page.locator(logoSelector)).toHaveScreenshot();
  // });
});
