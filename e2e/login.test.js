const { test, expect } = require("@playwright/test");

test("Le formulaire de connexion doit contenir email et mot de passe", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/login");

  const emailInput = page.locator('input[name="email"]');
  const passwordInput = page.locator('input[name="password"]');

  await expect(emailInput).toBeVisible();
  await expect(passwordInput).toBeVisible();
});

test("Simulation de saisie et connexion", async ({ page }) => {
  await page.goto("http://localhost:3000/login");

  await page.fill('input[name="email"]', "test@example.com");
  await page.fill('input[name="password"]', "password123");

  await page.click('button[type="submit"]');
});
