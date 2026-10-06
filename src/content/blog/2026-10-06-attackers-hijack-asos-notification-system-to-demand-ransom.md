---
title: "Attackers hijack ASOS notification system to demand ransom"
description: "Hackers breached ASOS cloud infrastructure and used the company's own app to send extortion messages to thousands of customers via push notifications."
pubDate: 2026-10-06T17:13:08.242+01:00
track: deep-dive
tags: ["data breach", "cloud security", "snowflake", "extortion"]
sources:
  - title: "ASOS Snowflake Cloud Breach: Cybersecurity Incident Analysis of Push Notification Extortion Attack"
    url: "https://www.rescana.com/post/asos-snowflake-cloud-breach-cybersecurity-incident-analysis-of-push-notification-extortion-attack"
    publisher: "Rescana"
aiAssisted: true
linkedin: "Attackers hijacked the ASOS notification system to send extortion messages directly to thousands of customers via mobile push notifications.\n\nBy breaching the company's cloud infrastructure and targeting the Snowflake data platform, the attackers gained enough control to use legitimate business tools for their ransom demands. They used Telegram to communicate with the company's IT and data protection teams.\n\nThis incident shows how a breach in a third-party cloud service or a secondary notification system can be used to target end users directly. If your organisation uses Snowflake or relies on push notifications, the methods used here are relevant to your security.\n\n→ Rotate all API keys and credentials immediately if you detect unusual activity.\n→ Implement multi-factor authentication on all notification systems.\n→ Apply least-privilege access controls to cloud environments.\n\nRead the full analysis here."
linkedinHashtags: ["CyberSecurity", "DataBreach", "CloudSecurity", "InfoSec"]
draft: true
---
On 6 October 2026, reports emerged that the clothing retailer ASOS experienced a significant breach of its cloud infrastructure. The attackers managed to hijack the company's notification system to send direct messages to thousands of app users. These messages, written in both English and Hebrew, claimed the attackers had achieved "full compromise" of the Snowflake data platform used by the company. The attackers used these notifications to demand that the ASOS Data Protection Officer (DPO) and IT team contact them via Telegram to prevent a data leak.

## Summary for management

*   Attackers breached ASOS cloud infrastructure, specifically targeting the Snowflake data platform and notification systems.
*   Thousands of app users received push notifications containing extortionist messages from the attackers.
*   The attackers used Telegram as a channel to demand engagement from the company's IT and data protection teams.
*   The exact volume and type of data stolen have not yet been confirmed.

## How the attack works

The incident involved a sophisticated attack chain that moved from initial access to the control of critical business communication tools. According to research from Rescana, the attackers likely gained entry through credential theft, phishing, or by exploiting weak authentication mechanisms. Once they had a foothold, they demonstrated the ability to pivot from initial access to lateral movement (the process of navigating from one part of a network to another) within the cloud environment.

The attackers appear to have abused privileged API keys (digital credentials that allow different software programmes to communicate) or compromised accounts associated with the Snowflake data platform or the notification system. Snowflake is a cloud-based data warehousing solution, a type of service used to centralise and process large amounts of business and customer data. 

By gaining access to these systems, the attackers achieved persistence (maintaining long-term access to a system) and took command over critical business systems. This allowed them to execute data manipulation (changing or using data to achieve an effect) by broadcasting a push notification directly to the mobile phones of ASOS customers. To manage the extortion, the attackers used Telegram as a command-and-control (C2) channel, which is a method attackers use to send instructions to compromised systems or communicate with victims.

The attack followed several patterns identified in the MITRE ATT&CK framework, a globally recognised knowledge base of adversary tactics. The researchers identified several specific techniques used during the breach:

*   Valid Accounts (T1078): Using legitimate, stolen credentials to gain entry.
*   Exploit Public-Facing Application (T1190): Potential exploitation of the notification system.
*   Cloud Service Dashboard (T1098.003): Using cloud management interfaces to maintain persistence.
*   Application Layer Protocol: Web Protocols (T1071.001): Using standard web traffic to hide communication.
*   Use of Third-party Services (Telegram): Using a messaging app for command and control.
*   Exfiltration Over Web Service (T1567): The potential theft of data via web-based services.
*   Data Manipulation (T1565): Using the notification system to send the extortion messages.

## Who is affected

The primary victims of the direct communication were thousands of ASOS app users, including customers in Israel. While the attackers claimed a "full compromise" of the Snowflake environment, the exact scope of the data breach remains unknown. If the claim is accurate, the exposed information could include customer records, transaction histories, and internal business analytics. 

For organisations, this incident serves as an example of how a breach in a third-party cloud service or a secondary notification system can be used to target the end customer directly. If your organisation uses Snowflake or similar cloud-based data platforms, or relies on mobile push notifications for customer engagement, the methods used here are relevant to your security posture. The reporting does not mention any specific impact on UK organisations or individuals, but the technical methods used are applicable to any firm using similar cloud architectures.

## What defenders should do

Rescana recommends several immediate and long-term actions to mitigate the risk of similar cloud-based extortion attacks.

**Immediate actions**

*   Review all Snowflake and notification system access logs to identify any anomalous activity.
*   Perform an immediate rotation of all credentials and API keys.
*   Implement enhanced monitoring for suspicious authentication attempts.

**Long-term hardening**

*   Ensure all notification systems are protected by strong authentication, such as multi-factor authentication (a security process requiring two or more proofs of identity).
*   Apply the principle of least-privilege access controls, which ensures users and software only have the minimum level of access required to perform their jobs.
*   Conduct regular security audits of cloud environments and third-party integrations.
