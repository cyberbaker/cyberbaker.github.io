---
title: "ASOS customers receive fake hack alerts via official mobile app"
description: "Hackers used ASOS's own notification system to send false breach alerts to customers. Learn how this happened and how to protect your personal data."
pubDate: 2026-10-07T07:01:41.849+01:00
track: everyday
tags: ["data breach", "phishing", "supply chain attack", "mobile security"]
sources:
  - title: "ASOS confirms data breach after “HACKED” in-app notifications"
    url: "https://www.bleepingcomputer.com/news/security/asos-confirms-data-breach-after-hacked-in-app-notifications/"
    publisher: "Unknown"
aiAssisted: true
linkedin: "ASOS customers received unexpected mobile app notifications claiming the retailer had been hacked.\n\nA criminal group called the Xuanye group appears to have accessed a third-party communication platform used by ASOS. This allowed them to send unauthorised push notifications directly to users' phones, making the messages look official.\n\nWhile ASOS says payment details and passwords are likely safe, some personal information like names and contact details may have been exposed. This makes users more vulnerable to targeted phishing scams and fraudulent texts.\n\n→ Do not click links in unexpected or alarming app notifications.\n→ Verify any security news by visiting the company's official website directly.\n→ Report suspicious texts to 7726.\n\nRead the full article for more details."
linkedinHashtags: ["ASOS", "DataBreach", "CyberSecurity", "Phishing"]
draft: false
---
At approximately 5:00 a.m. ET on Tuesday, customers using the ASOS mobile app received an unexpected notification on their phones. The message simply read, "ASOS HACKED."

This alert is significant because it arrived through a trusted, official channel. Instead of a standard marketing update, users were met with a direct claim from a criminal group that they had compromised the retailer's systems.

## What happened

The unauthorised notifications were sent by a threat actor calling itself the "Xuanye group". These alerts appeared on mobile devices and included a link directing the company to a Telegram channel, which is a messaging app often used for private communication.

In messages posted to that channel, the Xuanye group claimed to have "fully compromised" the company's Snowflake instance, which is a third-party cloud data platform used by many organisations. While the group initially suggested that payment information was not affected, they later released a "FINAL STATEMENT" claiming they had stolen customer information.

ASOS, the UK-based fashion retailer, has confirmed that third-party platforms used to communicate with customers were accessed without authorisation. The company stated that basic personal information, such as names and contact details, may have been exposed. However, ASOS said it does not believe account passwords or payment-card information were impacted.

The company has not yet confirmed if the group actually compromised the Snowflake environment, nor has it disclosed how many customers were affected. The group has not provided evidence to support their claims regarding the data they have stolen.

## Why it matters

The exposure of names and contact details can lead to more targeted scams. Even if banking details remain safe, criminals can use this information to craft convincing phishing (fraudulent attempts to obtain sensitive information by disguising as a trustworthy entity) emails or text messages.

This incident also shows how attackers can bypass traditional security boundaries by targeting the tools a company uses to talk to its customers. When a notification comes from an app you use every day, the natural instinct is to trust it. This makes the unauthorised use of push notifications—alerts sent directly to your phone's home screen—a method for causing confusion and alarm.

## How this kind of attack works

Large companies rarely build every single piece of technology they use. Instead, they hire third-party platforms to handle specific tasks, such as storing data in the cloud or sending notifications to mobile phones.

In this case, the attackers appear to have gained access to one of these communication platforms. Once they were inside that system, they could send messages that looked exactly like official ASOS updates. Because the message was sent through the official app, it bypassed the usual red flags that might appear in a suspicious email.

The group also claimed to have accessed a Snowflake instance. Snowflake is a cloud-based service where companies store large amounts of data. If an attacker gains access to such a service, they can potentially access vast amounts of information without ever having to break into the company's main office or primary servers.

## What you can do

* **Disregard unauthorised alerts.** If you receive an alarming or unexpected notification from a company claiming a breach, do not follow any instructions within that alert.
* **Avoid clicking external links.** Do not click on any links contained within a suspicious push notification, as these often lead to malicious websites.
* **Use official channels to verify news.** If you are concerned about your account, close the app and go directly to the company's official website by typing the address into your browser.
* **Report suspicious communications.** If you receive a scam text in the UK, you can forward it to 7726. If you receive a suspicious email, you can forward it to report@phishing.gov.uk.

## The bigger picture

The attackers appear to have targeted the supply chain, which is the network of third-party software and services that modern organisations rely on to function. By attacking a service provider, hackers can sometimes gain access to the data or communication channels of many different companies at once.

As companies continue to use more specialised cloud services, the security of those third parties becomes as important as the security of the companies themselves. Watch for updates from ASOS regarding the specific nature of the data involved.
