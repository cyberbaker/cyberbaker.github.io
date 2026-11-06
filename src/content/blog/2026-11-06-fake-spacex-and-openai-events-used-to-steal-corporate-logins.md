---
title: "Fake SpaceX and OpenAI events used to steal corporate logins"
description: "Attackers are using fake event registrations for SpaceX and OpenAI to bypass multi-factor authentication and access company data."
pubDate: 2026-11-06T07:01:17.773+00:00
track: everyday
tags: ["phishing", "cyber security", "identity theft", "data protection"]
sources:
  - title: "Fake OpenAI, SpaceX events used to steal Microsoft, Google accounts"
    url: "https://www.bleepingcomputer.com/news/security/fake-openai-spacex-events-used-to-steal-microsoft-google-accounts/"
    publisher: "Unknown"
aiAssisted: true
linkedin: "Attackers are using fake SpaceX and OpenAI event invites to steal corporate Microsoft and Google credentials.\n\nSecurity researchers found that scammers are creating professional-looking registration pages to trick employees. These sites offer rewards like premium AI access to encourage people to sign in with their work accounts.\n\nThis is a serious risk because the method allows criminals to bypass multi-factor authentication. Once they hijack a session, they can access sensitive tools like Slack, Salesforce, and Microsoft 365.\n\n→ Verify event details through official company websites before signing up.\n→ Never enter device codes on unfamiliar websites.\n→ Use physical security keys to protect your accounts.\n\nRead the full article for more details."
linkedinHashtags: ["CyberSecurity", "Phishing", "DataProtection", "TechNews"]
draft: false
---
An invitation to a private SpaceX event promised registrants three months of Grok Heavy or even a "SpaceX share". For many, such an offer would be difficult to ignore.

This is part of a sophisticated campaign designed to trick employees into handing over their professional digital identities. Instead of receiving an invite to a high-profile tech event, victims are actually providing the keys to their organisations' most sensitive data.

## What happened

Security researchers at Push Security detected and blocked visits to malicious event registration pages in late October 2026. The attackers are using convincing websites that impersonate events hosted by OpenAI, SpaceX, and Anthropic. These pages often offer rewards, such as premium access to artificial intelligence services, to entice people to sign in using their corporate accounts.

One specific phishing page promoted a private SpaceX event scheduled for 12 November. Another page impersonated an Anthropic event at the AWS re:Invent 2026 conference, though that page had already been taken down by the time it was identified.

The attackers use several methods to reach their targets. They have used legitimate Zoom event pages, GoTo Webinar's email systems, and URL shorteners from trusted services like Google and Zapier to redirect people to the fake sites. While the researchers believe the same group is operating the custom phishing kits used in these attacks, it remains unknown who is responsible for the campaign or how many people have been affected.

## Why it matters

The goal of these attacks is to steal credentials and authentication sessions (the digital "proof" that a user is logged in) for Microsoft and Google accounts. If an attacker successfully steals a Microsoft authentication token, they can gain access to a wide range of connected applications. This includes professional tools such as Microsoft 365, Salesforce, Slack, Dropbox, Adobe, and SAP.

For employees and organisations in the UK, the impact of such a breach can be significant. Once an attacker has bypassed multifactor authentication (a security process that requires two or more proofs of identity), they can move through an organisation's systems, accessing private documents, client data, and internal communications. Because the attackers can hijack an already active session, they can often bypass standard security warnings that would normally stop a password theft.

## How this kind of attack works

The attack relies on making a fake website look as legitimate as possible. When a user arrives at the fake registration page, they are often first met with a Cloudflare CAPTCHA—a test used to confirm a user is not a robot—which makes the site feel professional and secure.

The user is then presented with two choices: "Continue with Microsoft" or "Continue with Google".

If the user chooses Microsoft, the site uses a technique called device code phishing. The website provides a code and instructs the user to enter it on a legitimate Microsoft login page. When the user enters the code and authenticates, they are actually granting the attacker's platform permission to access their account.

If the user chooses Google, the attackers use an "adversary-in-the-middle" (AiTM) approach. This means the fake website acts as a middleman between the user and the real Google login page. As the user types their details and completes their security checks, the attacker's platform intercepts the credentials and the session cookies in real time. This allows the attacker to step into the user's digital identity without ever needing to know their password in a traditional way.

## What you can do

* **Verify event details through official channels.** Always check the official website or social media accounts of a company like OpenAI or SpaceX to confirm an event is real before clicking any links.
* **Be wary of "sign-in" requests for rewards.** Exercise extreme caution if a website asks you to sign in with your corporate Microsoft or Google account to claim a prize or register for a free service.
* **Never enter device codes on unfamiliar sites.** Do not copy and paste authentication codes into websites unless you are certain they are part of a trusted, expected workflow.
* **Use phishing-resistant hardware.** Where possible, organisations should use FIDO2 security keys, which are physical devices that are much harder for attackers to intercept than text messages or app notifications.
* **Limit unnecessary authentication methods.** Organisations can reduce their risk by restricting the use of device code authentication to only those employees who strictly require it for their roles.

## The bigger picture

This campaign shows a shift in how attackers operate, moving away from simple password theft and towards methods that bypass multifactor authentication. By using "phishing-as-a-service" platforms—tools that allow criminals to rent ready-made attack infrastructure—they can create highly professional-looking scams that exploit interest in AI and space technology. Look out for future invitations that use trending topics to request corporate logins.
