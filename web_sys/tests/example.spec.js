// @ts-check

const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('should load the main page', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveURL('http://localhost:3000');
});



test('app bar visibility', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Create a locator for the app bar. Replace '.app-bar' with the correct selector for your AppBar.
  const appBar = page.locator('.MuiAppBar-root'); // Assuming the AppBar has the class 'MuiAppBar-root'.

  // Expect the app bar to be visible.
  await expect(appBar).toBeVisible();
});

 

test('app bar menu button', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Set viewport size if necessary for responsive design
  await page.setViewportSize({ width: 640, height: 480 }); // Example size, adjust as needed

  const appBar = page.locator('.MuiAppBar-root');
  const menuButton = appBar.locator('.MuiIconButton-root');

  // Wait for the menu button to be visible
  await menuButton.waitFor({ state: 'visible' });

  await expect(menuButton).toBeVisible();
});
 
test('app bar menu button click', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Set viewport size if necessary for responsive design
  await page.setViewportSize({ width: 640, height: 480 }); // Example size, adjust as needed

  const appBar = page.locator('.MuiAppBar-root');
  const menuButton = appBar.locator('.MuiIconButton-root');

  // Wait for the menu button to be visible
  await menuButton.waitFor({ state: 'visible' });

  await menuButton.click();

  // Expect the menu button to be visible
  await expect(menuButton).toBeVisible();
} );




test('app bar order now button', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Set viewport size if necessary for responsive design
  await page.setViewportSize({ width: 640, height: 480 }); // Example size, adjust as needed

  const appBar = page.locator('.MuiAppBar-root');
  const menuButton = appBar.locator('.MuiIconButton-root');

  // Wait for the menu button to be visible
  await menuButton.waitFor({ state: 'visible' });

  await expect(menuButton).toBeVisible();
});


test('app bar order now button click', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Set viewport size if necessary for responsive design
  await page.setViewportSize({ width: 640, height: 480 }); // Example size, adjust as needed

  const appBar = page.locator('.MuiAppBar-root');
  const menuButton = appBar.locator('.MuiIconButton-root');

  // Wait for the menu button to be visible
  await menuButton.waitFor({ state: 'visible' });

  await menuButton.click();

  // Expect the menu button to be visible
  await expect(menuButton).toBeVisible();
} );



test('app bar login button', async ({ page }) => { 
  await page.goto('http://localhost:3000');

  // Set viewport size if necessary for responsive design
  await page.setViewportSize({ width: 640, height: 480 }); // Example size, adjust as needed

  const appBar = page.locator('.MuiAppBar-root');
  const menuButton = appBar.locator('.MuiIconButton-root');

  // Wait for the menu button to be visible
  await menuButton.waitFor({ state: 'visible' });

  await expect(menuButton).toBeVisible();
} );



test('app bar Home button click', async ({ page }) => { 
  await page.goto('http://localhost:3000');

  // Set viewport size if necessary for responsive design
  await page.setViewportSize({ width: 640, height: 480 }); // Example size, adjust as needed

  const appBar = page.locator('.MuiAppBar-root');
  const menuButton = appBar.locator('.MuiIconButton-root');

  // Wait for the menu button to be visible
  await menuButton.waitFor({ state: 'visible' });

  await menuButton.click();

  // Expect the menu button to be visible
  await expect(menuButton).toBeVisible();
} );