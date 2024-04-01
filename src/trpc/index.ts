import { createAdmin } from './routes/adminLogin';
import { router } from './trpc';

export const appRouter = router({
  createAdmin: createAdmin,
});

export type AppRouter = typeof appRouter;