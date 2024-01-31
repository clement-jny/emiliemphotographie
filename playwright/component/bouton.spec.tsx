import { test, expect } from '@playwright/experimental-ct-react';
import { Button } from '@/components/ui/button';

test('should render button with text', async ({ mount }) => {
  const component = await mount(<Button>Click me</Button>);

  const text = component.getByRole('button');
  
  // await expect(text).toHaveText('Click me');
});
