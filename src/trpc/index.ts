import { adminLogin, createAdmin } from './routes/adminLogin';
import { router } from './trpc';

export const appRouter = router({
  createAdmin: createAdmin,
  adminLogin: adminLogin
});

export type AppRouter = typeof appRouter;