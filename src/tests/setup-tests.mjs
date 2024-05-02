// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vitest" />
import '@testing-library/jest-dom/vitest'
import '@testing-library/jest-dom'
import matchers from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'
import { expect, vi } from 'vitest'

expect.extend(matchers)
vi.extend(matchers)

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})
