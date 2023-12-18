import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({ /* ... */ })
  });
  const forms = defineCollection({
    type: 'content',
    schema: z.object({ /* ... */ })
  });
  const tests = defineCollection({
    type: 'content',
    schema: z.object({ /* ... */ })
  });
  
  export const collections = {
    'blog': blog,
    'forms': forms,
    'tests': tests,
  };