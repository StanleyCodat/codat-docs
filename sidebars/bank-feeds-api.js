module.exports = [
  {
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  {
    type: "link",
    label: "Bank Feeds API",
    href: "/bank-feeds-api/overview",
    className: "header",
  },
  {
    type: "category",
    label: "Sage bank feeds",
    collapsed: true,
    items: [
      "bank-feeds-api/sage-bank-feeds/sage-bank-feeds",
      "bank-feeds-api/sage-bank-feeds/sage-bank-feeds-setup",
      "bank-feeds-api/sage-bank-feeds/sage-bank-feeds-use",
      "bank-feeds-api/sage-bank-feeds/sage-bank-feeds-authenticate-users-web-app",    
    ],
  },
  {
    type: "category",
    label: "QBO bank feeds",
    collapsed: true,
    items: [
      "bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds",
      "bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-setup",
      "bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-smb-user",
      "bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-push-bank-transactions",     
    ],
  },
  {
    type: "category",
    label: "Xero bank feeds",
    collapsed: true,
    items: [
      "bank-feeds-api/xero-bank-feeds/xero-bank-feeds",
      "bank-feeds-api/xero-bank-feeds/xero-bank-feeds-setup",
      "bank-feeds-api/xero-bank-feeds/xero-bank-feeds-smb-user",
      "bank-feeds-api/xero-bank-feeds/xero-bank-feeds-push-bank-transactions",
    ],
  },
  {
    type: "link",
    href: "/bank-feeds-api",
    label: "API reference",
  },
];
