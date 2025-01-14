---
title: "Get started with Sync for Payables"
sidebar_label: Get started
description: "View the core steps required to perform the initial setup for Sync for Payables"
image: "/img/banners/social/payables.png"
---

import { IntegrationsList } from "@components/global/Integrations";
import { integrationsFilterPayables } from "@components/global/Integrations/integrations";

## Journey overview

The diagram below represents the overall activity flow when using Sync for Payables. You can manage bills, suppliers, and payment methods in different ways and order. 

We will take you through each of these elements so that you can build the flow that suits you and your customers best.

```mermaid

graph TD

    A(Create company) --> B(Create connection)
    B --> C(Authorize connection)

    C --> D1(Retrieve supplier)
    C --> D2(Create supplier)
    C --> E2(Retrieve bill)

    D1 --> E1(Create bill)
    D2 --> E1

    E1 --> F(Map payment methods)
    E2 --> F

    F --> G(Pay bill)

    G --> H(Reconcile payments)
```

Once you decide to build with Sync for Payables, you need to configure Codat accordingly. Let's go through these requirements in detail.

## Enable Sync for Payables

1. Open the <a href="https://app.codat.io" target="_blank">Codat Portal</a> and sign in.
2. Click on **Settings > Organizational settings > Products**.
3. In the list of products, find _Sync for Payables_ and click **Enable**. Then, follow the on-screen prompt.

## Configure Sync for Payables

### Data types

In the <a href="https://app.codat.io" target="_blank">Codat Portal</a>, navigate to **Settings > Integrations > Data types**. Enable the [data types](/core-concepts/data-type-settings#override-the-default-sync-settings) required for Sync for Payables and set them to `fetch on first link`: 

| Data source | Accounting                                                                                                                                                                     |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Data types  | `bankAccounts`<br/> `bills`<br/> `billCreditNotes`<br/> `billPayments`<br/> `chartOfAccounts`<br/> `paymentMethods`<br/> `suppliers`<br/> `taxRates`<br/> `trackingCategories` |

Configure the solution to refresh data when you need it by [setting a synchronization frequency](/core-concepts/data-type-settings#choose-a-synchronization-frequency) on the same screen. We recommend setting it to a daily or a monthly sync.

### Manage data sources

In the <a href="https://app.codat.io" target="_blank">Codat Portal</a>, navigate to **Settings > Integrations** and click **Manage integrations**. Next, click **Manage** next to the specific integration you want to enable and set it up to serve as a data source for the product. 

You can also view detailed configuration instructions by clicking on the relevant tile:

<IntegrationsList filter={integrationsFilterPayables} />

### Authorization flow

As part of using Sync for Payables, you will need your customers to authorize your access to their data. To do so, use [Embedded Link](/auth-flow/authorize-embedded-link) - our pre-built, embeddable, conversion-optimized, and white-labeled authorization flow.

The solution lets you tailor the authorization journey to your business needs. You can:

* [Customize Link settings](/auth-flow/customize/customize-link).
* [Set up company branding](/auth-flow/customize/branding).
* [Set up redirects](/auth-flow/customize/set-up-redirects).

### Webhooks

Codat supports a range of [webhooks](/using-the-api/webhooks/core-rules-types) to help you manage your data pipelines. In the <a href="https://app.codat.io" target="_blank">Codat Portal</a>, navigate to **Settings > Webhooks > Rules** and click **Create new rule** to set up the following webhooks and get the most out of Sync for Payables:

- [New company synchronized](/using-the-api/webhooks/core-rules-types#new-company-synchronized)

  Use this webhook to track the completion of all enabled data type syncs for a newly connected company. When you receive a notification from this webhook, you can proceed to the next steps of the bill pay process. 

- [Data sync completed](/using-the-api/webhooks/core-rules-types#data-sync-completed)

  This webhook indicates that a data sync is successfully completed for a specific data type. You can use this webhook to track retrieval of suppliers, bills or bank accounts as part of the accounts payable process.

- [Dataset data changed](/using-the-api/webhooks/core-rules-types#dataset-data-changed)

  If you receive a notification from this webhook, it means data has been updated for the specified data type. This can include new, updated or deleted data. You should then refresh the data in your platform.

- [Push operation status has changed](/using-the-api/webhooks/core-rules-types#push-operation-status-has-changed)  

  Use this webhook to track the completion of the operation to pay bills in the SMB's accounting platform. When you receive a notification from this webhook, check the `status` value in the body. A `Success` status means the bill payment or the bill credit note has been successfully pushed to the accounting software.

:::tip Recap

You have enabled Sync for Payables, set up the relevant integrations, configured auth flow parameters, and noted the recommended webhook. This completes the initial setup of the product.

Next, you will create a company and its connection to build out the core infrastructure required to manage accounts payable with Codat.

:::

--- 

## Read next

* Check out our [client libraries](/get-started/libraries) to kick start your Sync for Payables build.
* [Configure customer](/payables/configure-customer) to continue building your accounts payable management process.