import { createAction } from '@reduxjs/toolkit';

// Define action creators
export const light = createAction('theme/light');
export const dark = createAction('theme/dark');
export const initial = createAction('theme/default');
