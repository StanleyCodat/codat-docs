---
title: "Joining the Xero App Partner Program"
description: "Unlock the full value of connectivity with Xero by becoming a Xero App Partner"
---

import LocalStorageChecklist from "@components/global/LocalStorageChecklist";
import BrowserOnly from "@docusaurus/BrowserOnly";

If you want to have more than 25 Xero connections, you'll need to join the **Xero App Partner Program**.

Becoming a certified Xero App Partner brings the following benefits:

- No limit to the number of companies (SMBs) you can connect to via your Xero integration.
- The opportunity to reach millions of subscribers and advisors through the [Xero App Store](http://www.xero.com/marketplace) and [app partner program](https://developer.xero.com/app-partner).

To join the program, there are a series of requirements your integration must first satisfy. There are also some additional use case-specific requirements, as explained in [Xero App Partner guidance by use case](/integrations/accounting/xero/accounting-xero-app-partner-guidance).

We've broken down the requirements you need to action based on the [Xero Certification Checkpoints](https://developer.xero.com/documentation/xero-app-store/app-partner-guides/certification-checkpoints/#required-for-all-integrations). You can use the answers on this page to help with your App Partner Program application. [We take care of a number of checkpoints for you](/integrations/accounting/xero/xero-app-partner-program#we-take-care-of).

:::caution Use cases

There are additional checkpoints based on use cases.

:::

<details>
<summary><b>Additional resources</b></summary>

In the Xero developer documentation, see [Steps to becoming an app partner](https://developer.xero.com/documentation/xero-app-store/app-partner-guides/app-partner-steps) and the [App Partner Program FAQs](https://developer.xero.com/documentation/xero-app-store/app-partner-guides/faqs/).

For tips and advice, read our blog post on [How to get your app certified on the Xero App Store](https://www.codat.io/blog/get-your-app-certified-on-the-xero-app-store/).
</details>

## Start your partnership application

To start the Xero App Partner application process, follow these steps:

1. Log in to the [Xero Developer portal](https://developer.xero.com/) using your Xero credentials.
2. Select the **My Apps** tab and then select your app.
3. On the **App details** page, click **Become a Xero App Partner**.
4. Select the partnership option that applies to your use case.

<details>
  <summary>Remember your progress...</summary>

 Use our interactive checkpoint list to track your progress. It will be saved in your browser.

  <BrowserOnly>
    {
      () => (
        <LocalStorageChecklist prefix="xeroChecklist" items={[
          'Checkpoint 1 - App name',
          'Checkpoint 2 - Branding',
          'Checkpoint 3 - Connection',
          'Checkpoint 4 - Error handling',
          'Checkpoint 5 - Offline_access',
          'Checkpoint 6 - Rate limit hit management',
          'Checkpoint 7 - Scopes',
          'Checkpoint 8 - Sign up with Xero',
          'Checkpoint 9 - Modified after',
          'Checkpoint 10 - Paging',
          'Checkpoint 11 - Webhooks',
          'Checkpoint 12 - Account mapping',
          'Checkpoint 13 - Currency',
          'Checkpoint 14 - Rounding',
          'Checkpoint 15 - Taxes',
          'Checkpoint 16 - Payment account mapping',
          'Checkpoint 17 - Sign in with Xero',
          'Checkpoint 18 - Deep linking',
          'Checkpoint 19 - Invoice status',
          'Checkpoint 20 - Invoice URL and bank transactions URL',
          'Checkpoint 21 - Logs',
        ]}/>
      )
    }
  </BrowserOnly>
</details>

## Always required

### 1. App name

The application name must reflect the go-to-market name of your app or product and cannot include the word Xero. The name can be viewed/updated by going to My Apps.

### 2. Branding

Where possible, use the “connect” and “disconnect” buttons provided on[ Xero's branding page](https://developer.xero.com/documentation/guides/how-to-guides/branding-your-integration/). As part of Codat's Link flow, the "connect" button is already supported.

Check that you are following the [Xero app partner branding guidelines](https://developer.xero.com/static/otherfiles/xero-app-partner-brand-guidelines.pdf) and note you shouldn’t distort Xero’s logo.

### 3. Connection

Codat will handle the connection to Xero through the linking journey. You will need to implement a setup page that allows your customer to manage the settings for their Xero connection:

| Requirement | Recommendations |
| :-- | :-- |
| Display the name of the tenant that has been connected | By default Codat includes a page, post successful connection displaying the Company Name connected.<br/>Alternatively this can be retrieved from Company Info endpoint. |
| Display the current status of the connection(s). If disconnected, provide a button to connect to Xero | Status - `Connection.status` endpoint.  <br/>Link to power your button to connect - `Connection.linkURL` |
| Disconnect | To disconnect the connection use the PATCH connections endpoint. |
| Handle a disconnect from Xero's side | Codat handles the disconnection from Xero’s end - Codat unlinks the connection. |
| 1:1 or multi-org connection | Codat allows your customers to select their Xero organization using the native Xero UI. You can allow your customer to connect to multiple organizations within Xero by creating a separate Codat company per organization. |
| Disconnection process for off-boarding | Connections can be disconnected through the PATCH connections endpoint to prevent further syncs or the DELETE connections endpoint to prevent both further syncs and querying of historically synced data within Codat. |

### 4. Error handling

Codat provides detailed error messaging including status codes and the details of the error.

Your UI should communicate any errors to the SMB. Details on the types of error messages provided by Codat is available [here](/using-the-api/errors).

### 7. Scopes

By default, we request the following scopes:

```
offline_access
accounting.journals.read
accounting.reports.read
accounting.transactions
accounting.settings
accounting.contacts
accounting.attachments
```

#### Read only

Can be enabled for Xero - please contact [support@codat.io](mailto:support@codat.io) to access the Toggle from **Integrations > Xero Credentials**.

#### Bank feeds

Must be enabled from **Integrations > Xero Credentials** to be enabled.

While we request the above scopes, you will need to present on the SME’s consent screen what exactly you are requesting and why. This will be checked by Xero during the certification, additional scopes should be explained to Xero during the review.

### 8: Sign up with Xero

We require all apps seeking certification and listing in the Xero App Store to build a Sign Up with Xero flow.

Codat recommends a separate webpage built out to accommodate this.

For the steps to enable via Codat please see [Sign Up with Xero flow](/integrations/accounting/xero/xero-sign-up-flow).

---

## If posting or putting data...

### 12. Account mapping

You may utilise Codat’s Push options endpoint to show the options available to allow this building of a mapping interface. Codat recommends a configuration page in which the SME can choose where to map everything.

### 13. Currency

Our currency datatype is available across all integrations and is aware of the currencies enabled by the SME in Xero. When pushing transactional data such as a payment in another currency, you may utilise our Push options endpoint to show the currencies available to push such as those currencies that have been set up by the SME in Xero.

### 15. Taxes

Codat supports the pulling of tax rates as individual tax rates and on transactions (invoices, payments etc).

We support the pushing of transactions where a tax rate must be defined with us handling any calculations such as compound tax rates where there are multiple tax components which must be applied to calculate the effective tax rate - read more here.

We do not currently support creating new tax rates, only existing rates in a SMBs Xero account may be used. You m ay need to build out the mapping of tax rates in your configuration page (please see Checkpoint 12).

---

## If posting payments...

### 16. Payment account mapping

You can use Codat’s Push options endpoint to show the options available to allow this building of a mapping interface. Codat recommends a configuration page in which the SME can choose where to map everything.

---

## Preferred user experience

### 17. Sign in with Xero

Please refer to Xero's guidance.

### 18. Deep linking

Deep-linking enables your application to create a link that directs the user to a specific resource within a specific Xero Organization. This provides a quick and easy way for the user to jump into Xero to see or take action against the resource referenced in your product.

You can view the direct links via the Company Info endpoint specifically sourceURLs.

Codat also uses the Xero record ids, this means that it can be implemented for example a deep link to a Xero contact can be implemented by using a hyperlink with the following structure:

`https://go.xero.com/Contacts/View/{customerId from Codat}`

You can find further information about [deep linking in Xero here](https://developer.xero.com/documentation/guides/how-to-guides/deep-link-xero/).

### 19. Invoice status

Available when pushing via the Invoice endpoint

### 20. Invoice URL and bank transactions URL

**This is not currently supported.**

### 21. Logs

A log of all retrieved data and syncronizations can be retrieved from the data history endpoint, this can then be displayed back to the user so for example they can see when invoices were last fetched from their Xero instance.

The same is true for displaying a list of the records that have been created and updated, all of these operations and records can be retrieved from the push endpoint.

---

## We take care of...

#### 5. Offline_access

Our Oauth requests include the `offline_access` scope.

#### 6. Rate limit hit management

For each integration, Codat has a rate limit protocol handler - this means that we apply throttling and intelligent retries using an exponential back off, before returning a fetch error if the limits have been reached.

#### 9. Modified after (Required if getting data)

Codat handles this when retrieve data from Xero, querying Xero only for new and updated records after the initial sync (and periodically full synchronizations).

#### 10. Paging (Required if getting data)

Codat has implemented paginated fetching.

#### 11. Webhooks (Required if getting data)

Codat surfaces a select number of events from Xero based on Codat metadata (e.g. if a company within Codat has a connection status change).

#### 14. Rounding (Required if posting or putting data)

Codat handles the rounding of totals and ensuring they match what’s in Xero.
