import iife from './index';

test('return 0', () => {
  const res = iife(() => 0);
  expect(res).toBe(0);
});

test('return "hoge"', () => {
  const res = iife(() => 'hoge');
  expect(res).toBe('hoge');
});

test('async return 0', async () => {
  const res = await iife(async () => 0);
  expect(res).toBe(0);
});

test('async return "hoge"', async () => {
  const res = await iife(async () => 'hoge');
  expect(res).toBe('hoge');
});
