# Flow Splitters
**_The easiest way to dynamically stream tokens to your team, guild, DAO, or community._**

Flow Splitters are (onchain & offchain) enhanced [Superfluid distribution pools](https://docs.superfluid.finance/docs/concepts/overview/distributions).

They enable scalable one-to-many token distributions onchain. With distribution pools, a money stream or token transfer can be proportionally split to an arbitrary number of recipients based on the shares each holds.

Settlement is passive and gasless–-meaning payouts don’t need to be periodically processed or manually withdrawn from the pool by recipients. Once their shares are connected with a single transaction, recipients receive their distributions in real-time.

Flow Splitters make this powerful onchain primitive accessible through a no-code interface and tooling to encourage more dynamic, creative, and effective pool management.

Streams are the ultimate form of programmable money. We want more teams, guilds, DAOs, and communities to be able to tap into their power. [Give us a shout if you have feedback or ideas](https://t.me/flowstatecoop).

:::tip
Check out the [Superfluid Docs](https://docs.superfluid.finance/docs/concepts/superfluid) to learn more about [streaming money](https://docs.superfluid.finance/docs/concepts/overview/money-streaming), [Super Tokens](https://docs.superfluid.finance/docs/concepts/overview/super-tokens), [distribution pools](https://docs.superfluid.finance/docs/concepts/overview/distributions), and other protocol foundations. 
:::

## Use Cases

### Restreaming Grants/Salaries

Optimism’s Retroactive Public Goods Funding (RPGF) program streams its grant awards to recipients using Superfluid. Rather than periodically unwrapping the OPx Super Token to OP and batch processing payments, why not restream the grant in real-time?

Flow Splitters make it easy to set relative allocation splits and start/adjust/stop a single payment stream for your whole team. It saves administration time and makes your grant more impactful by getting your contributors paid faster.

### Attracting External Funding

Once your team’s allocation weights are onchain in a distribution pool, _anyone_ can start funding you with a stream. The onchain split provides funders transparency and satisfaction that their support is routed to individual contributors and initiatives in real time. Public goods funding can evolve from uncertain, lumpy support to more predictable and continuous.

Think of it like the [Protocol Guild](https://protocol-guild.readthedocs.io/en/latest/) model of attracting funding but implemented with real-time money streams.

### Streaming Programmatic Rewards

Flow Splitters make updating stream allocations at scale simple. DAOs and communities can experiment with different (offchain) point systems, regularly update the shares in their Flow Splitter, and provide responsive, continuous rewards to the people/activities that drive value in their ecosystems.

### Memeing (Str-meme-ing?)

Flow Splitter shares are ERC20 tokens. You can give them a token name & ticker. They’ll display across wallets and block explorers like other tokens… but they’re not just like other tokens. They have built-in onchain distribution superpowers.

The design space is wide open to experiment with mechanics that stream points, companion tokens, dividends, etc. to token holders. Hey, the next big memecoin meta may be _memeshares_.

## Using a Flow Splitter

### Launch

Creating a Flow Splitter requires a wallet, a little ETH, and no code. Navigate to [https://flowstate.network/flow-splitters/launch](https://flowstate.network/flow-splitters/launch) to get started.

#### Metadata
Flow Splitter Shares are ERC20 tokens (with distribution superpowers). You can give your Shares a name and token symbol to identify or brand them across wallets and block explorers. If your Flow Splitter will be used for any external purposes (e.g. attracting funding for your team), you’re highly encouraged to use these fields.

:::tip 
These Share tokens are different from those you will distribute through the Flow Splitter. Think of Shares as the “stock” of the Flow Splitter and the Super Token as the “dividend” currency.
:::

#### Core Configuration

Flow Splitters are tied to a single distribution [Super Token](https://docs.superfluid.finance/docs/concepts/overview/super-tokens) at deployment (future enhancements may unlock multiple token support).

You can select one of several popular Super Token options on your chain of choice or \`Custom\` and then paste [any valid Super Token](https://explorer.superfluid.finance/base-mainnet/supertokens) contract address into the field.

You must also determine whether you want your Flow Splitter shares transferable. Admins will maintain the ability to edit the share registry regardless of transferability. Transferability may open interesting opportunities for your Flow Splitter (making shares akin to tradable equity) or be inappropriate for your use case.

#### Contract Admin

The Flow Splitter system includes a single-level access control list smart contract module. Future versions will offer finer-grained control levels. For now, add one or more addresses (your connected wallet is added by default) that should have full control of the Flow Splitter. Multisig addresses (e.g. Safes) are supported.

Admins can remove/add other admins and alter the share registry.

You can set your Flow Splitter to \`No Admin\` anytime, but once Admin control is renounced there’s no going back.

#### Share Register

The Share Register represents the current [allocation weights](https://docs.superfluid.finance/docs/protocol/distributions/guides/pools#about-member-units) of your Flow Splitter.

Every distribution (streaming or instant) sent to the Splitter is allocated based on the number of shares each address owns. When a share update is processed, active streaming distributions will automatically adjust their ongoing allocation.

Shares can only be whole numbers. If you want decimal percentage precision in your split, just enter the digits without decimals (a 99.99%/.01% split can be entered as 9999 & 1 shares).

The CSV upload features make mass updates simple. Make sure you’ve provided valid Ethereum addresses (no ENSs yet) and whole share values in each line of your spreadsheet. If you have an invalid input, you won’t be able to launch the Flow Splitter until you fix it.

### Edit

As long as you have an Admin on the Flow Splitter, you can edit your Share Registry and Admins anytime.

Immutable Flow Splitters have their place, but we’re most excited about teams (which inherently evolve) earning/allocating streaming revenue and dynamic allocation use cases. Stay tuned for tools to help you easily manage your Flow Splitters programmatically.

You can navigate to [https://flowstate.network/flow-splitters](https://flowstate.network/flow-splitters) to see all the Flow Splitters you’re a part of—Admin or not.

### Distribute & Visualize

Each Flow Splitter launched on Flow State has its own publicly accessible “home page.”

More features will be coming to this page soon (see Roadmap), but for now, it’s good for visualizing your Flow Splitter money flows and opening new ones.

You can navigate to any Flow Splitters you’re part of [https://flowstate.network/flow-splitters](https://flowstate.network/flow-splitters).

The \`Open Flow\` button provides a guided checkout process for opening a streaming distribution to the Flow Splitter. Set the rate you want to stream, (optionally) wrap an ERC20 token into the Super Token format for streaming, and submit.

We’ve included a simple line graph at checkout to demonstrate the impact of your transactions on your Super Token balance.

:::tip 
Bookmark and share your unique Flow Splitter link with your team and community. We’ll explore public discovery and other ways to help attract funding to your Flow Splitter (if you want it). 
:::

### Receiving & Managing Funds

There are two tokens relevant to each Flow Splitter:

1. Shares - Flow Splitter-specific tokens that are used to allocate distributions proportionally.
2. Distribution Token - The _Super Token_ streamed & distributed through the Flow Splitter.

#### Shares

Each Flow Splitter is based on its own ERC20 token. Like other ERC20 tokens, they can have a name and a token symbol. You can add them to display in your wallet from the Flow Splitter homepage or copy/paste the contract address into your wallet’s add token tool.

But, these tokens can be thought of more like onchain stock than a currency.

Holding these tokens earns you a proportional allocation of all future cash flows through the corresponding Splitter (Gary is gone, but to be clear, this is a conceptual framing–not an endorsement of Flow Splitter shares as investment contracts).

These shares may or may not be transferable depending on how your Flow Splitter admin set them up. It’s also important to note that any admins on your Flow Splitter can edit the Share Registry anytime.

#### Connecting Shares

Recipients added to a Flow Splitter must complete a one-time transaction to begin seeing corresponding distributions reflected in their real-time token balance. If distributions are made before the recipient completes this transaction, the funds are safe and will be made available upon connection.

If you’re signed in with a recipient wallet, we’ll remind you to complete this transaction when you visit a Flow Splitter page. You can also check your [Flow Splitter list](https://flowstate.network/flow-splitters) for disconnected shares.

:::tip 
Why do I need to connect my shares?

Superfluid may seem like magic, but it’s really just clever use of math onchain.

A core innovation of Superfluid is that a token balance need not be represented by just a static number (e.g. 12). This is what the ERC20 standard implements. A token balance could also include parameters like a flow rate and time (e.g. 12 + 2\*t where t = _current time - previous transaction time_). This is what Superfluid Super Tokens do to extend the ERC20 standard and enables value transfer to happen gaslessly (as much as you might want to slow down time it keeps moving forward).

So while the example above is simplified protocol implementation, it's fair to think of the transaction to connect your shares (and other streaming transactions) as updating your token balance formula.

Yay, programmable money! 
:::

#### Super Tokens

[Super Tokens](https://docs.superfluid.finance/docs/concepts/overview/super-tokens) are Superfluid’s extension of the ERC20 token standard. Every Flow Splitter is associated with just one of these tokens. They are the _currency_ that is distributed through the Flow Splitter.

Super Tokens are often a wrapped version of an existing token (but there are “pure” deployments too–see the link above for details). They can be identified by an “x” at the end of a familiar ticker (e.g. ETHx is the Super Token version of ETH like wETH is an ERC20-wrapped version of ETH).

Once you’ve connected your Flow Splitter shares, you’ll be paid onchain with the Super Token in real time. Your tokens are available immediately to spend with each instant distribution and/or as time passes with an open streaming distribution (i.e. your onchain Super Token balance will update without further action).

Rest assured, you don’t _need_ to unwrap your Super Token to access your funds. You can transfer, stream, or use them as-is in other exciting applications on Flow State and in the [Superfluid ecosystem](https://www.superfluid.finance/ecosystem). You can unwrap them 1:1 with the underlying token [from the Superfluid App](https://app.superfluid.finance/wrap?downgrade) anytime.

We recommend adding your Flow Splitter’s distribution token to your wallet and/or check out the [Superfluid App](https://app.superfluid.finance/) to see and manage your balance.

:::tip 
A full list of deployed Super Tokens across networks is available on the Superfluid [Explorer](https://explorer.superfluid.finance/base-mainnet/supertokens).

You can also permissionlessly [launch your own “pure” Supertoken](https://docs.superfluid.finance/docs/protocol/super-tokens/guides/deploy-super-token/deploy-pure-super-token) or [deploy a “wrapper” for your favorite token to become Superfluid-enabled](https://docs.superfluid.finance/docs/protocol/super-tokens/guides/deploy-super-token/deploy-wrapped-super-token). 
:::

## Roadmap

Flow Splitters is a new product. You can expect many changes and new features. Below are a few on the roadmap:

- Instant distributions
  - Checkout flow for one-time distributions
- Activity log
  - A feed of onchain Flow Splitter actions (creation distributions, & share updates/transfers)
  - Project wall posts (discussion, feedback, context for actions)
- API
  - Add a Web 2.0 endpoint to your Flow Splitter for automated onchain updates
- Scheduling
  - Setup automated closures to streams you open
- Multi-level permissioning
  - Enhanced access control list functionality
- Multi-token Flow Splitters
  - Enable multi-currency distributions based on the same Share Registry

[Get in touch if you have ideas or use cases you’d like us to explore](https://t.me/flowstatecoop).
