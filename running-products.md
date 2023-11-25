# How AdHoc launches products

Running products means displaying them in AdHoc. To run a product, all [primary systems](#systems-involved) within AdHoc work together, and we can generally break this process down into three steps: [onboarding](#onboarding), [contextualization](#contextualization), and [running](#running).

:::info
DEFINE PRODUCT
:::

## Systems involved

As discussed in [Product path to AdHoc](/docs/developer-guide/product-path), each newly developed product goes through CreatorHub to App Market before users can interact with it in AdHoc. On top of CreatorHub and App Market, the other systems involved include [Navigation Tree](#navigation-tree), [Orchestration](#orchestration) (as a system), [App Config](#app-config), and [Root App](#root-app).

### Navigation Tree

Each tenant has customizable navigation that can adapt to address specific needs. This navigation works based on the Navigation Tree system—an AdHoc module responsible for the tenant structure and hierarchy.

:::tip
See [Required AdHoc context](/docs/developer-guide/onboarding-and-launch/configure-product#required-open-os-context) to learn more about the Navigation Tree and hierarchy.
:::

![](./images/product-running/navigation-tree.png)

### Orchestration

Orchestration is a system that allows AdHoc users to organize, plan, and manage projects. In terms of running products, Orchestration uses the same context structure as Navigation Tree and aligns with its hierarchy.

![](./images/product-running/orchestration.png)

### App Config

App Config is a system responsible for preserving the tenant- and project-specific instances of your product's configuration in combination with their required AdHoc context. These instances combine input from the Navigation Tree and Orchestration.

### Root App

Root App is a system responsible for [displaying your product in AdHoc](/docs/developer-guide/concepts-and-foundations/micro-frontends) based on its configuration and context. Root App pulls the necessary product instance from the App Config service and display it to the AdHoc users.

## Stages of running products

![](./images/product-launch/adhoc-arch.svg)

### Onboarding

When onboarding products through CreatorHub, development teams have to specify two sets of data: marketing and configuration. Once the product is published, this data is stored in CreatorHub and becomes available to other services (Navigation Tree, Orchestration, and App Market) through the CreatorHub API.

It's important to note that you can publish products to all tenants or a select few. Once your product is published, Navigation Tree and Orchestration will create tenant-specific product instances to incorporate its required AdHoc context (if any).

On the other hand, App Market is tenant-agnostic, so it receives marketing data about every product onboarded through CreatorHub.

### Contextualization

At this stage, Navigation Tree and Orchestration receive lists of products available for every tenant in AdHoc. Using the product configuration metadata and the required AdHoc context, they create separate product instances in App Config.

From then on, your product is run directly from the instances stored in App Config. To change the product configuration, you need to update its details and publish it again through CreatorHub.

### Running

Root App is the primary system that runs products in AdHoc.

Root App takes the necessary product context ID from App Config when a user opens a product. Then, it uses internal APIs to run the product according to its product type (as a micro-app, an IFrame, an external link, etc.)

:::note
As all products are hosted outside of AdHoc, Root App runs them as micro-frontends. See [Micro-frontends with Single SPA](/docs/developer-guide/concepts-and-foundations/micro-frontends) to learn more.
:::
