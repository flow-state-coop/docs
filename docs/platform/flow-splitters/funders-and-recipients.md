---
description: How to interact with deployed Flow Splitters.
---

# Funders & Recipients

## Distribute & Visualize

Each Flow Splitter launched on Flow State has its own publicly accessible “home page.”

More features will be coming to this page soon (see Roadmap), but for now, it’s good for visualizing your Flow Splitter money flows and opening new ones.

You can navigate to any Flow Splitters you’re part of [https://flowstate.network/flow-splitters](https://flowstate.network/flow-splitters).

The \`Open Flow\` button provides a guided checkout process for opening a streaming distribution to the Flow Splitter. Set the rate you want to stream, (optionally) wrap an ERC20 token into the Super Token format for streaming, and submit.

We’ve included a simple line graph at checkout to demonstrate the impact of your transactions on your Super Token balance.

:::tip[Share your Flow Splitter] 
Bookmark and share your unique Flow Splitter link with your team and community. We’ll explore public discovery and other ways to help attract funding to your Flow Splitter (if you want it). 
:::

## Receiving & Managing Funds

There are two tokens relevant to each Flow Splitter:

1. Shares - Flow Splitter-specific tokens that are used to allocate distributions proportionally.
2. Distribution Token - The _Super Token_ streamed & distributed through the Flow Splitter.

### Shares

Each Flow Splitter is based on its own ERC20 token. Like other ERC20 tokens, they can have a name and a token symbol. You can add them to display in your wallet from the Flow Splitter homepage or copy/paste the contract address into your wallet’s add token tool.

But, these tokens can be thought of more like onchain stock than a currency.

Holding these tokens earns you a proportional allocation of all future cash flows through the corresponding Splitter (Gary is gone, but to be clear, this is a conceptual framing–not an endorsement of Flow Splitter shares as investment contracts).

These shares may or may not be transferable depending on how your Flow Splitter admin set them up. It’s also important to note that any admins on your Flow Splitter can edit the Share Registry anytime.

### Connecting Shares

Recipients added to a Flow Splitter must complete a one-time transaction to begin seeing corresponding distributions reflected in their real-time token balance. If distributions are made before the recipient completes this transaction, the funds are safe and will be made available upon connection.

If you’re signed in with a recipient wallet, we’ll remind you to complete this transaction when you visit a Flow Splitter page. You can also check your [Flow Splitter list](https://flowstate.network/flow-splitters) for disconnected shares.

:::info[Why do I need to connect my shares?]
Superfluid may seem like magic, but it’s really just clever use of math onchain.

A core innovation of Superfluid is that a token balance need not be represented by just a static number (e.g. 12). This is what the ERC20 standard implements. A token balance could also include parameters like a flow rate and time (e.g. 12 + 2\*t where t = _current time - previous transaction time_). This is what Superfluid Super Tokens do to extend the ERC20 standard. This approach enables gasless value transfer (because as much as you might want to stop it, time keeps moving forward).

So while the example above is simplified from the actual protocol implementation, it's fair to think of the transaction to connect your shares (and other streaming transactions) as updating your token balance formula.

Yay, programmable money! 
:::

### Super Tokens

[Super Tokens](https://docs.superfluid.finance/docs/concepts/overview/super-tokens) are Superfluid’s extension of the ERC20 token standard. Every Flow Splitter is associated with just one of these tokens. They are the _currency_ that is distributed through the Flow Splitter.

Super Tokens are often a wrapped version of an existing token (but there are “pure” deployments too–see the link above for details). They can be identified by an “x” at the end of a familiar ticker (e.g. ETHx is the Super Token version of ETH like wETH is an ERC20-wrapped version of ETH).

Once you’ve connected your Flow Splitter shares, you’ll be paid onchain with the Super Token in real time. Your tokens are available immediately to spend with each instant distribution and/or as time passes with an open streaming distribution (i.e. your onchain Super Token balance will update without further action).

Rest assured, you don’t _need_ to unwrap your Super Token to access your funds. You can transfer, stream, or use them as-is in other exciting applications on Flow State and in the [Superfluid ecosystem](https://www.superfluid.finance/ecosystem). You can unwrap them 1:1 with the underlying token [from the Superfluid App](https://app.superfluid.finance/wrap?downgrade) anytime.

We recommend adding your Flow Splitter’s distribution token to your wallet and/or check out the [Superfluid App](https://app.superfluid.finance/) to see and manage your balance.

:::tip[Finding & Creating Super Tokens] 
A full list of deployed Super Tokens across networks is available on the [Superfluid Explorer](https://explorer.superfluid.finance/base-mainnet/supertokens).

You can also permissionlessly [launch your own “pure” Supertoken](https://docs.superfluid.finance/docs/protocol/super-tokens/guides/deploy-super-token/deploy-pure-super-token) or [deploy a “wrapper” for your favorite token to become Superfluid-enabled](https://docs.superfluid.finance/docs/protocol/super-tokens/guides/deploy-super-token/deploy-wrapped-super-token). 
:::