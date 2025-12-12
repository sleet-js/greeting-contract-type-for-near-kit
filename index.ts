import type { Contract } from "near-kit"

// Define contract interface using Contract<> helper
export type greetContractType = Contract<{
  view: {
    get_greeting: () => Promise<string>
  }
  call: {
    set_greeting: (args: { greeting: string }) => Promise<void>
  }
}>