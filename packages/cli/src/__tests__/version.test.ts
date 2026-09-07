import { describe, expect, test } from "vitest"

import packageJson from "../../../package.json"
import { COVALO_VERSION, formatVersion } from "../version.js"

describe("CLI version", () => {
  test("uses the package version as the single source of truth", () => {
    expect(COVALO_VERSION).toBe(packageJson.version)
    expect(formatVersion()).toBe(`covalo v${packageJson.version}`)
  })
})
