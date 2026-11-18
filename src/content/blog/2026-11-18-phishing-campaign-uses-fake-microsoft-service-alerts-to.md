---
title: "Phishing campaign uses fake Microsoft service alerts to steal logins"
description: "Attackers are sending urgent emails claiming Microsoft 365 outages to trick users into entering their passwords on fake websites."
pubDate: 2026-11-18T07:01:22.016+00:00
track: everyday
tags: ["phishing", "microsoft 365", "cyber security", "email security"]
sources:
  - title: "High volume phishing campaign uses Microsoft 365 outage lures to target multiple industry sectors"
    url: "https://www.microsoft.com/en-us/security/blog/2026/11/16/high-volume-phishing-campaign-uses-microsoft-365-outage-lures-target-multiple-industry-sectors-2/"
    publisher: "Unknown"
aiAssisted: true
linkedin: "Attackers are sending fake Microsoft 365 service alerts claiming important emails will be deleted within 24 hours.\n\nThis campaign uses urgent, technical-sounding language to trick people into clicking links that lead to fake login pages. The goal is to steal usernames and passwords by mimicking official Microsoft outage notifications.\n\nIf an attacker gains access to your account, they can read private conversations, steal sensitive data from OneDrive, or send fraudulent invoices to your clients. This can happen to any business using Microsoft services.\n\n→ Check the Microsoft 365 admin centre directly to verify any service issues.\n→ Use multifactor authentication to protect your accounts.\n→ Report any suspicious emails using your organisation's reporting tools.\n\nRead the full article for more details."
linkedinHashtags: ["Phishing", "Microsoft365", "CyberSecurity", "BusinessSecurity"]
draft: false
---
On 13 November 2026, Microsoft Threat Intelligence identified a large-scale phishing campaign that used fake service alerts to target organisations across many different industries. The attackers sent emails claiming that a technical outage had caused important messages to be held and warned that these messages would be deleted within 24 hours if the recipient did not act immediately.

This campaign targets the natural stress felt when professional tools fail. If you receive an urgent notice about lost emails while working, your instinct may be to fix the problem quickly, which is exactly what the attackers intend.

## What happened

Microsoft observed a coordinated campaign of phishing emails designed to look like official Microsoft 365 service-health notifications. The attackers used subject lines such as "Outage – [random characters]" and names that mimicked professional organisations, such as "MSF Outage Notification".

The emails claimed that an incident involving Exchange Online (the service that manages business email) had occurred on 12 November 2026. They told recipients that a certain number of messages, such as four, had been held and required urgent attention. To create a sense of panic, the messages stated that these held emails would be permanently deleted within 24 hours.

The campaign used several sender domains, including moments-notice[.]com, planetmaison[.]com, and newbooker[.]com. When a recipient clicked buttons like "RESTORE MESSAGES" or "TAKE ACTION", they were routed via a tracking URL to a non-Microsoft website, such as reallifeaccounting[.]com.

Microsoft assesses that the goal of this campaign was likely credential phishing, which is an attempt to steal usernames and passwords. While researchers observed the delivery of these links, they have not yet confirmed if any users actually entered their details or if any malware (malicious software) was successfully delivered. Microsoft has not attributed the campaign to a named threat actor.

## Why it matters

If an attacker successfully steals a password, they can gain access to a person's entire digital workspace. This creates several risks for an organisation.

An attacker could engage in business email compromise, where they read private conversations or send fraudulent invoices to clients. They may also gain access to sensitive data stored in SharePoint or OneDrive, or manipulate inbox rules to secretly forward incoming mail to themselves.

While this specific campaign was observed globally, the methods used are effective against any organisation using Microsoft services. The reporting does not mention specific UK organisations being targeted, but the nature of the attack means any business using these tools is a potential target.

## How this kind of attack works

This attack relies on social engineering, which is the psychological manipulation of people into performing actions or divulging confidential information. 

First, the attacker sends a high volume of emails that look official. They use technical terms like "Exchange Online" or "Teams" to build credibility. They also hide a fake email conversation within the message to try and bypass automated mail filtering, which is the process used by software to identify and block spam.

Second, they create a deadline. By claiming that messages will be deleted in 24 hours, they discourage the recipient from taking the time to double-check if the email is real.

Third, the link acts as a trap. When you click the "restore" button, the link does not take you to a Microsoft login page. Instead, it routes you through a tracking URL to a fake website that looks like a login screen. If you enter your username and password there, you are handing your credentials directly to the attacker.

## What you can do

* **Verify service status independently.** Instead of clicking links in an email, log in to your Microsoft 365 admin centre directly to check for actual service health notifications.
* **Use multifactor authentication (MFA).** Ensure your accounts require a second form of identification, such as a code from an app, to make stolen passwords much harder to use.
* **Prioritise phishing-resistant methods.** Where possible, use passkeys or physical security keys, which are significantly more difficult for attackers to intercept than traditional passwords.
* **Report suspicious emails.** Use your organisation's established Outlook reporting workflow to alert your security team and Microsoft to the message.
* **Identify and reset compromised accounts.** If you think you may have clicked a suspicious link, change your password immediately and revoke any active sign-in sessions through your account settings.

## The bigger picture

This campaign follows a pattern where attackers look for notable global events or service disruptions to exploit in their social engineering lures. By mimicking a service outage, they attempt to make their messages appear relevant and urgent.

As attackers continue to refine how they impersonate official communications, watch for any unsolicited email that demands immediate action to prevent data loss. Always validate service issues through official administrative portals rather than through unexpected email links.
