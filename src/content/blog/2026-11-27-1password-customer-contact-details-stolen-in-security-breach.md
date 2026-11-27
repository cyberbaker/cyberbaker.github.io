---
title: "1Password customer contact details stolen in security breach"
description: "Attackers accessed 1Password's source code to steal customer names and email addresses, increasing the risk of targeted phishing scams."
pubDate: 2026-11-27T07:01:12.782+00:00
track: everyday
tags: ["1password", "data breach", "phishing", "cyber security"]
sources:
  - title: "1Password breach leaked customer names and emails, but not passwords"
    url: "https://www.theverge.com/tech/1042409/1password-data-breach-leak"
    publisher: "Unknown"
aiAssisted: true
linkedin: "Hackers have stolen customer names and email addresses from 1Password following a breach of an employee's GitHub account.\n\nWhile your stored passwords remain secure, the stolen information allows scammers to create highly convincing phishing attacks. Because attackers have access to specific account identifiers, they can send messages that look like legitimate responses to your recent account activity or recovery attempts.\n\nThis means you may receive unexpected emails or texts that appear to be from 1Password, designed to trick you into revealing your master password.\n\n→ Only enter passwords or Secret Keys into the official 1Password app or website.\n→ Treat any unexpected recovery requests or invitations with suspicion.\n→ If you receive a suspicious message, do not click any links.\n\nRead the full article for more details."
linkedinHashtags: ["CyberSecurity", "DataBreach", "Phishing", "1Password"]
draft: false
---
If you use 1Password to manage your digital life, you may soon receive unexpected emails, texts, or phone calls. While the company has confirmed that your stored passwords remain secure, your personal contact details have been stolen.

This means that while your actual passwords are safe for now, you are at a higher risk of being targeted by scammers. They may use the information they stole to try and trick you into giving up your master password or other sensitive credentials.

## What happened

1Password began investigating a security incident on 19 November. An attacker gained access to a corporate GitHub account belonging to one of the company's employees. GitHub is a platform where developers store and manage their software code.

Once inside the employee's account, the hacker accessed 1Password's source code. They then pushed malicious code—instructions designed to perform unauthorised actions—to the company's backend services to download customer data. This allowed the attacker to steal customer names, email addresses, public keys, and various account and user identifiers.

The stolen data also included tokens from certain emailed invitation or account recovery links. A token is a unique digital string used to verify a specific action or session. 1Password stated that attackers cannot use these tokens alone to access an account, as they would still need to pair them with a single-sign-on method or a six-digit numeric code sent to a user's email. 

To increase security, 1Password has changed the codes it sends to users. These are now 10 alphanumeric characters long, making them harder for an attacker to guess. The company has since disabled the compromised GitHub account, rotated the internal credentials that were exposed, and implemented a new detection system to catch similar attacks. It remains unknown how many customers were affected or who was responsible for the breach.

## Why it matters

The primary risk of this breach is not the immediate loss of your passwords, but the increased likelihood of highly convincing scams. Because the attackers know your name, your email address, and potentially whether you have recently requested an account recovery, they can craft messages that look legitimate.

If an attacker uses this information to target you, they are performing a phishing attack. Phishing is a technique where scammers impersonate a trusted organisation to trick people into revealing private information. 

Because the attackers have access to specific details like your email and account identifiers, they do not have to rely on generic, obvious scams. Instead, they can send messages that appear to be a direct response to your actual account activity. This level of detail makes the scam much harder to spot, as the message may reference real events, such as an invitation you were expecting or a recovery attempt you recently made.

## How this kind of attack works

This type of incident involves a sequence of steps that move from the company's infrastructure to your personal device. First, the attacker targets a single point of entry: an employee's account. By compromising a GitHub account, the attacker moves from the individual employee into the company's internal environment.

Once they have access to the source code, the attacker can modify the software's backend services. They do this by inserting malicious code that instructs the system to export and send customer data to the attacker. This is how they obtained names, emails, and tokens without needing to break into individual user vaults.

The final stage of the attack is directed at the user. The attacker uses the stolen data to create a sense of legitimacy. If they have stolen an account recovery token, they might send a message claiming that your recovery process was successful or requires one more step. They use this information to lead you to a fraudulent website. If you enter your credentials into that fake site, the attacker can then use those details to gain actual access to your real account.

## What you can do

* **Verify the source of communications.** Only enter your account password or Secret Key into the official 1Password app or the legitimate 1Password website.
* **Treat unexpected requests with suspicion.** Be wary of any email, text, or phone call that references 1Password invitations or account recovery attempts that you did not personally initiate.
* **Use official channels for recovery.** If you receive a suspicious message about your account, do not click any links; instead, open your 1Password app directly or type the official web address into your browser.
* **Report suspicious activity.** If you receive a phishing email, you can forward it to report@phishing.gov.uk.

## The bigger picture

This incident demonstrates that even when the primary data—your passwords—is not stolen, the theft of metadata can still create significant risks. Attackers are increasingly using small pieces of information to build trust before launching a larger attack.

The company has stated it will never ask customers for their account password or Secret Key. You should expect that any request for this information via email or text is a scam. Watch for any communications that seem unusually urgent or ask you to perform an action related to your account security.
