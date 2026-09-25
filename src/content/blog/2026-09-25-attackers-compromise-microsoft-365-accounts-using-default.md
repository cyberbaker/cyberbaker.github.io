---
title: "Attackers compromise Microsoft 365 accounts using default passwords"
description: "A cyber attack campaign targeted over 5,700 Microsoft 365 accounts by using simple, pre-set passwords to gain access to business data."
pubDate: 2026-09-25T07:51:02.559+01:00
track: everyday
tags: ["microsoft 365", "data breach", "password security", "cyber attack"]
sources:
  - title: "TeamFiltration Campaign Compromises Seven Microsoft 365 Accounts Using Default Passwords"
    url: "https://thehackernews.com/2026/09/teamfiltration-compromises-seven.html"
    publisher: "Unknown"
aiAssisted: true
draft: false
---
Seven Microsoft 365 accounts have been compromised as part of a cyber attack campaign. The attackers gained access to these accounts by using default passwords, which are the pre-set credentials often assigned to new accounts or systems during their initial setup.

This incident shows how a single oversight can lead to a breach. Even if an organisation uses a major platform like Microsoft 365, failing to change a basic password can give unauthorised people a way into sensitive business data.

## What happened

Researchers at Proofpoint identified an active campaign codenamed UNK_CondorFiltration. This campaign targeted over 5,700 accounts across 28 Microsoft 365 tenants (a tenant is a dedicated instance of cloud services that an organisation uses to manage its own users and data). 

The activity has primarily focused on retail and financial institutions in Chile. According to the researchers, the attackers used 1,487 unique AWS EC2 source IP addresses (addresses used by Amazon Web Services' cloud computing servers) to carry out the campaign. 

While thousands of accounts were targeted, the researchers stated, "The campaign compromised 7 accounts –" though the full extent of the damage or the specific data accessed has not been disclosed. It is not yet known who is responsible for this campaign.

## Why it matters

When attackers gain access to a Microsoft 365 account, they are not just entering a single inbox. They are entering a central hub that often holds calendars, shared documents, and internal communications. 

For the retail and financial institutions targeted, this could mean access to customer information or sensitive corporate files. Even if only seven accounts were successfully compromised in this specific instance, the scale of the attempt—targeting over 5,700 accounts—suggests a systematic effort to find the weakest link in many different organisations. A single compromised account can sometimes be used as a starting point to move deeper into a company's wider network.

## How this kind of attack works

This attack relies on a method that targets human error rather than complex software bugs. When a new user is created in a business system, an administrator might set a temporary or standard password. If that password is never changed, it remains a "default" credential.

Attackers can use automated tools to try these common, default passwords against thousands of accounts in a very short time. In this campaign, the attackers used a large number of cloud-based servers from Amazon Web Services to hide their tracks and manage the scale of the attempt. 

The process follows a simple pattern: the attacker identifies a target, uses a script to test known default passwords against that target's login page, and if the password works, they gain full access to the account. Because the credentials are technically "correct," the system does not necessarily flag the login as a hack, making it difficult to detect immediately.

## What you can do

* **Change default passwords immediately.** Replacing the initial credentials provided by a service provider ensures that common, predictable passwords cannot be guessed by automated tools.
* **Enforce strong, unique passwords.** Using long and complex passwords for every account makes it much harder for attackers to use automated guessing methods.
* **Use multi-factor authentication (MFA).** This requires a second form of identification, such as a code sent to a mobile device, which prevents access even if an attacker knows the password.
* **Audit your user accounts regularly.** Checking which accounts are active and ensuring all users have updated their security settings helps catch forgotten or poorly secured accounts.

## The bigger picture

The UNK_CondorFiltration campaign demonstrates how attackers use large-scale cloud infrastructure to test for simple security gaps across many organisations at once. While the specific group behind this has not been identified, the focus on the financial and retail sectors suggests a targeted interest in those industries.

Watch for news regarding whether any data was successfully exfiltrated (moved from a target's system to an attacker's system) from the seven compromised accounts. Ensuring that every new account is secured from the moment it is created is a practical way to reduce this risk.
