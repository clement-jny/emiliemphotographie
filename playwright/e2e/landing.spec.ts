import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('has title', async ({ page }) => {
  // const heading = page.getByRole('heading', { name: 'EmilieM Photographie' });
  const heading = page.getByTestId('title');
  await expect(heading).toHaveText('EmilieM Photographie');
});
