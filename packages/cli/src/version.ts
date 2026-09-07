import packageJson from "../../../package.json"

export const COVALO_VERSION = packageJson.version

export function formatVersion(): string {
  return `covalo v${COVALO_VERSION}`
}
