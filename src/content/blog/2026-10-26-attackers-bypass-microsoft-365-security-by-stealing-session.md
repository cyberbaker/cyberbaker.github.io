---
title: "Attackers bypass Microsoft 365 security by stealing session tokens"
description: "Cybersecurity researchers found a global campaign using stolen digital keys to bypass multi-factor authentication and access Microsoft 365 accounts."
pubDate: 2026-10-26T07:02:08.195+00:00
track: everyday
tags: ["microsoft 365", "cyber security", "phishing", "identity theft"]
sources:
  - title: "Widespread Token-Spraying Attacks Target Microsoft 365 Accounts For Email Compromise"
    url: "https://www.infosecurity-magazine.com/news/tokenspraying-attacks-target/"
    publisher: "Unknown"
aiAssisted: true
linkedin: "Attackers successfully accessed nearly 500 Microsoft 365 accounts by stealing digital session tokens instead of cracking passwords.\n\nUsing a technique called adversary-in-the-middle, criminals intercepted login information and multi-factor authentication codes in real time. This allowed them to impersonate legitimate users and bypass standard security layers.\n\nOnce inside, the attackers modified account settings to maintain access and used compromised mailboxes to send fraudulent payroll emails. This puts businesses at risk of financial fraud and identity theft.\n\n→ Revoke all active sessions and reset user passwords immediately.\n→ Check account settings for unauthorised devices or new mobile numbers.\n→ Review inbox rules to ensure attackers haven't hidden incoming emails.\n\nRead the full article for more details."
linkedinHashtags: ["Microsoft365", "CyberSecurity", "BusinessSecurity", "Phishing"]
draft: false
---
Attackers successfully accessed 497 Microsoft 365 accounts by using stolen digital keys rather than cracking passwords. This allowed them to bypass multi-factor authentication (MFA), the security layer that usually requires a code from a mobile phone to prove your identity.

Even if you use strong passwords and an authenticator app, your account can still be taken over. For business owners and employees, this represents a shift in how professional accounts are targeted.

## What happened

Researchers at the cybersecurity firm Huntress identified a global campaign targeting Microsoft 365 environments between July and September 2026. The attackers used a technique known as adversary-in-the-middle (AiTM) attacks to intercept login information. 

The campaign involved hundreds of thousands of attempts to access corporate networks around the world. Researchers observed at least 200,000 login attempts, which resulted in 497 successful sign-ins. In many cases, the attackers were inside the compromised environments just minutes after stealing the tokens.

Once they gained access, the attackers worked to stay inside the systems by modifying controls to make future access easier. They wiped the MFA settings of victims and added their own mobile phones to the accounts to maintain access. They also modified Entra settings—the system Microsoft uses to manage identities—to add their own devices as legitimately registered on the network. This allowed them to request additional tokens in the future.

The attackers were also observed using compromised mailboxes to send fraudulent payroll-related phishing emails. This is often a precursor to business email compromise (BEC), a type of scam where criminals impersonate company officials or legitimate suppliers to trick an organisation into making unauthorised payments. In one observed instance, the attackers appeared to be attempting a BEC scam but did not receive the intended payment.

The identity of the group responsible for these attacks has not been disclosed.

## Why it matters

The success of these attacks means that traditional security measures, such as requiring a password and a one-time code, are not a complete defence. If an attacker steals a "session token," they can impersonate a user who has already successfully logged in.

For organisations, the consequences include the loss of sensitive communications and the potential for financial fraud through hijacked email threads. Attackers can also implement hidden email rules in victim inboxes to move messages from specific contacts out of sight, meaning a user might never see a warning from a colleague or a bank.

For employees, this can lead to identity theft or the use of their professional reputation to scam colleagues. While the reporting does not specifically mention impact on UK organisations, the campaign was described as global. Any business using Microsoft 365 for corporate email is potentially at risk from this method of entry.

## How this kind of attack works

To understand this, think of a session token like a digital boarding pass. When you log in to a service and pass your MFA check, the system gives your browser a token. This token tells the service that you have already proven who you are, so it does not ask for a password or a code again for the rest of that session.

In an AiTM attack, the attacker sits between you and the real login page. When you enter your credentials and your MFA code into a fake page, the attacker captures them in real time. They use this information to log in to the real service themselves. 

Crucially, they then steal the session token that the real service issues. Once the attacker has this token, they can "replay" it from their own machine. The Microsoft 365 service sees the valid token and grants the attacker access, believing they are the legitimate user who has already completed the security checks. This is why researchers described these as "token-spraying" attacks.

## What you can do

If you suspect your organisation has been affected by a token-theft attack, Huntress recommends the following actions:

* **Revoke active sessions and reset passwords.** This invalidates any stolen tokens that an attacker might currently be using to stay logged in.
* **Audit Entra devices and MFA methods.** You should check if any unauthorised devices or new phone numbers have been added to user accounts.
* **Review inbox rules.** Attackers often create hidden rules to move incoming emails from specific contacts or banks into the bin so the user does not see security alerts or payment notifications.
* **Implement Conditional Access Policies (CAP).** Huntress suggests that businesses should set up these policies to require MFA for all users, all cloud apps, and all client app types, unconditionally.

## The bigger picture

This campaign demonstrates that attackers are moving away from trying to guess passwords and are instead focusing on stealing the "proof" of a successful login. This makes the bypass of multi-factor authentication a practical reality rather than a theoretical risk. 

Watch for more instances of "token-spraying," where attackers use stolen credentials to probe many different accounts at once. Organisations should consider moving toward security models that look at the context of a login, such as the device being used or the location of the user, rather than relying on a single token.
