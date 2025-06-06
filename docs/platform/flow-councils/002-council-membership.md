---
slug: /flow-councils/council-membership
description: Setting Council membership and a voting policy
---

# Council Membership
A **Council** is the set of wallet addresses that may cast votes in a Flow Council round. The round administrator define a **voting policy** when a round is created:

1. **Who can vote** – a member list of Ethereum addresses 
2. **Vote budgets** – the maximum number of votes each member can cast—-set individually or globally 
3. **Max Vote Spread** – an optional rule that caps how many distinct recipients a voter may support--encouraging more focused allocations

Council admins can update the voting policy manually from the Flow Council launchpad UI anytime. 

Flow State also offers flexible infrastructure to support automated voting policies based on onchain or offchain conditions (with some light development). For example, “any address that holds a *Community NFT* is automatically added to the Council with 100 votes.”