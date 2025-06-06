---
slug: /flow-councils/launch
description: How to configure and deploy Flow Councils
---

# Launch
Flow Councils are available for deployment on Arbitrum One, Base, Celo, and OP Mainnet networks. 

Each Flow Council is configured to distribute a single [Superfluid Super Token](https://docs.superfluid.org/docs/concepts/overview/super-tokens). Flow State natively supports many popular Super Tokens, but allows also allows deployers to set any [valid Super Token contract address](https://explorer.superfluid.org/arbitrum-one/supertokens) as the distribution currency. Once deployed, this token selection cannot be changed.

[Starting the funding flow is not an admin function](005-grow-the-pie.md) and is done only once recipients are accepted to the Flow Council. It follows that the funding flow rate can also be updated anytime as (hopefully) more funding becomes available or circumstance change.

By default, Flow Councils are open-ended (i.e., there is no "round end date"). It is recommended that operators communicate the expectations the funding amount and duration when a public round is launched.

## Permissions

The deploying address is set as the Flow Council Super Admin by default. The deployer can add and update **Super Admins**, **Council Member Review Admins**, & **Recipient Review Admins**.

Once a voting policy has been set and recipients have been added to the Flow Council, a Super Admin could remove themselves and all other admins to make their configuration immutable.