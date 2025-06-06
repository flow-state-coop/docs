---
slug: /flow-councils/recipients
description: Applying to and receiving funding through a Flow Council
---

# Funding Recipients
Each Flow Council has a fully-integrated, unique application form provided by the round operator. Applications include project name, description (markdown supported), branding, social profiles, links, and anything else reviewers and voters need to evaluate the project. Currently, we leverage the Gitcoin Allo Project Registry to streamline project applications, but with protocol maintenance recently ceasing, we'll likely migrate to a new solution in the future.

Round operators can review applications on a rolling basis. Approved projects are added directly to the onchain Flow Council distribution pool. Round operators may also choose to remove recipients from the pool due to inactivity or planned refreshes.

Flow Councils pay out in real time—-there's no end-of-round lump-sum payout. Recipients start earning the moment they earn their first vote.

The rate at which a recipient earns funding is proportional to the number of votes they've collected: 

`payout_rate = (recipient votes / total votes) × funding stream`

When a new vote is cast (i.e., a change to the denominator), the funding rate for all recipients be atomically updated. When a vote is recast (i.e., a change a numerator), one or more recipients will see their funding updated in real-time.

## Connecting to the Flow Council
Recipients must complete a one-time transaction to connect to the Flow Council. This transaction enables their streaming token balance to update in real-time via the [Superfluid protocol](https://docs.superfluid.finance/docs/concepts/superfluid). Don't worry—-funds are still safely allocated to the recipient before this transaction is completed. 

We trigger a pop-up to complete this transaction when a recipient that hasn't connected visits the Flow Council UI.

The [Superfluid App](https://app.superfluid.finance/) offers recipients additional tools to manage their [Super Token](https://docs.superfluid.finance/docs/concepts/overview/super-tokens) balances and connect to the Flow Council distribution pool.