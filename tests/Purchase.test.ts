import { test, expect } from '@playwright/test';
import { Login } from '../pages/login.page';

const email = "mailtest@gmail.com"
const pass = "mailtest@gmail.com"

test('User can purchase product', async ({ page }) => {
  // login
  const login = new Login(page)
  await login.openAndLogin(email, pass)
  // purchase
  await page.getByRole('link', { name: 'Brands ' }).click()
  await page.getByRole('menuitem', { name: 'Nizhyn cannery' }).click()
  await page.getByRole('link', { name: 'CHERRY TOMATOES By Nizhyn' }).click()
  await page.getByRole('button', { name: 'Add to Bag' }).click()
  await page.getByRole('button', { name: 'Place Order' }).click()
  await expect(page.getByRole('heading', { name: 'Thank you for your order.' })).toBeVisible()
});

test('User can purchase 2 products', async ({ page }) => {
  //login
  const login = new Login(page)
  await login.openAndLogin(email, pass)
  //purchases
  await page.getByRole('link', { name: 'Brands ' }).click()
  await page.getByRole('menuitem', { name: 'Nizhyn cannery' }).click()
  await page.getByRole('link', { name: 'CHERRY TOMATOES By Nizhyn' }).click()
  await page.getByRole('button', { name: 'Add to Bag' }).click()
  await page.getByRole('button', { name: 'Continue Shopping' }).click()
  await page.getByRole('link', { name: 'MARINATED CUCUMBERS NEZHIN STYLE' }).click()
  await page.getByRole('button', { name: 'Add to Bag' }).click()
  await page.getByRole('button', { name: 'Place Order' }).click()
  await expect(page.getByRole('heading', { name: 'Thank you for your order.' })).toBeVisible()
});