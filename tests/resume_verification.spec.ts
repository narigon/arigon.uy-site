import { test, expect } from '@playwright/test';

test('verify resume content', async ({ page }) => {
  // Go to the local dev server
  await page.goto('http://localhost:5173');

  // Verify Name
  await expect(page.locator('nav')).toContainText('Nicolas Arigon');
  await expect(page.locator('section').first()).toContainText('Nicolas Arigon');

  // Verify Hero Headline
  await expect(page.locator('h1')).toContainText('Engineering Leader');
  await expect(page.locator('h1')).toContainText('Technical Architect');

  // Verify About content
  const aboutSection = page.locator('#about');
  await expect(aboutSection).toContainText('15+ years of experience');
  await expect(aboutSection).toContainText('cloud architecture');

  // Verify Work projects
  const workSection = page.locator('#work');
  await expect(workSection).toContainText('Compliance ETL Platform');
  await expect(workSection).toContainText('AR Visualization App');
  await expect(workSection).toContainText('IoT Ecosystem Platform');

  // Verify Services
  const servicesSection = page.locator('#services');
  await expect(servicesSection).toContainText('Engineering Leadership');
  await expect(servicesSection).toContainText('Cloud & DevOps');
  await expect(servicesSection).toContainText('AI & ML Experimentation');

  // Verify Contact
  const contactSection = page.locator('#contact');
  await expect(contactSection).toContainText('narigon7@gmail.com');
  await expect(contactSection).toContainText('Uruguay');

  // Take a screenshot for visual verification
  await page.screenshot({ path: 'verification/resume_update.png', fullPage: true });
});
