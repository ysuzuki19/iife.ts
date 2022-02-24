# iife library for TypeScript

```bash
$ npm i @ysuzuki19/iife.ts
```

# How to use

## Sync

### After

```typescript
import iife from '@ysuzuki19/iife.ts';

const num = iife(() => {
  return 0;
}); // num = 0;

const str = iife(() => {
  return 'str';
}); // str = 'str'
```

### Before

```typescript
const num = (() => {
  return 0;
})();

const str = (() => {
  return 'str';
})();
```

## Async

### Before

```typescript
const iife from '@ysuzuki19/iife.ts';

const num = iife(async () => {
  return 0;
}); // num = Promise{0, ...}

const str = iife(async () => {
  return 'str';
}); // str = Promise{'str', ...}
```
