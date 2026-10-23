---
title: "eMudhra exits certificate market after weak security key error"
description: "A technical error at eMudhra resulted in digital security keys as simple as the number four, forcing the company to withdraw from the certificate business."
pubDate: 2026-10-23T07:01:49.047+01:00
track: everyday
tags: ["cyber security", "digital certificates", "software supply chain", "data protection"]
sources:
  - title: "Indian tech company eMudhra announces withdrawal from certificate business after security incident"
    url: "https://therecord.media/indian-tech-company-announces-withdrawal-certificate-business-incident"
    publisher: "GitHub Security Blog"
  - title: "eMudhra kills its certificate business after researchers cracked its private keys in under a second"
    url: "https://cyberscoop.com/emudhra-shuts-down-certificate-business-weak-private-keys/"
    publisher: "Unknown"
aiAssisted: true
linkedin: "One of the private keys used to secure digital identities at eMudhra was simply the number four.\n\nA technical error during a key generation ceremony meant that instead of complex, unpredictable numbers, the company issued incredibly weak keys. This mistake went undetected for 18 months and survived two independent audits before a researcher found the flaw.\n\nThis matters because these keys are used to verify the authenticity of websites and software. If exploited, an attacker could impersonate legitimate websites to steal login details or financial information. The error affected many products, including web browsers and programming tools.\n\n→ Keep all your software and web browsers updated to the latest versions.\n→ Ensure developers update all libraries and dependencies like Python or Node.js.\n→ Use security providers with long histories of transparent audits.\n\nRead the full article here:"
linkedinHashtags: ["CyberSecurity", "TechNews", "DataSecurity", "SoftwareUpdate"]
draft: false
---
One of the private keys used to secure digital identities at the Indian technology company eMudhra was simply the number four. Instead of a complex, massive number that would take a computer lifetimes to guess, the key was so small it could be identified in less than a second.

This error has led the company to announce it is withdrawing from the global SSL/TLS certificate business (the technology that provides the "padlock" icon in a web browser and secures connections). While the mistake was a human error in a technical process, it has caused significant disruption to the digital systems that verify who is who online.

## What happened

The issue came to light last week after cybersecurity researcher Scott Helme notified major technology companies, including Apple, Google, Microsoft, and Mozilla, that eight of eMudhra’s intermediate certificates had weak private keys. These keys, which are used to verify the authenticity of websites and software, were generated with almost no randomness during a ceremony in April 2025.

While a typical secret key for this type of cryptography should be roughly 77 or 78 digits long, the eight keys found by Helme were all numbers below 256. One was the number 4, another was 56, and another was 115. The company stated that the problem was "a flaw in one step of the ceremony procedure," which resulted in a weak set of keys being published to browser trust lists instead of the intended, secure ones.

The flaw remained undetected for 18 months and survived two independent audits. Following the discovery, eMudhra revoked the affected certificates within 14 hours. On Thursday, the company announced it would stop issuing these certificates entirely. The company's shares fell 40% in the two days after the vulnerability was disclosed.

## Why it matters

The weakness in these keys created a "software supply chain" problem. This means the error was not just in one website, but was embedded in the trust lists used by dozens of different products, including web browsers, operating systems, and programming tools like Python and Node.js.

If an attacker had exploited these keys, they could have issued fraudulent certificates to impersonate legitimate websites. This would allow them to intercept or modify the data sent between a user and a website, potentially stealing login details or financial information. It could also have allowed malicious software to appear as if it were officially signed by a trusted publisher.

For organisations, the challenge is now finding and updating every piece of software that carries these old, trusted certificates. While major browsers have already taken action to block them, older or forgotten systems may still trust the compromised certificates until they are manually updated.

## How this kind of attack works

Digital certificates act as a way for a computer to prove its identity. To make sure no one can impersonate a website, the certificate relies on a "private key"—a secret number used to sign the digital identity. To be secure, this number must be incredibly complex, so that even the world's fastest computer couldn't try every possible combination in a billion years.

In a "key generation ceremony," specialists follow strict steps to create these complex keys using mathematical randomness. This ensures the number that forms the key is massive and unpredictable.

In this case, the process failed. Instead of creating a massive, unpredictable number, the error produced a key that was incredibly simple. Because the mathematics behind these certificates are public, an attacker can look at the certificate and quickly test every possible simple number. Because the number was as small as "four," an attacker could find the "password" to the lock almost instantly. Once they have that key, they can create their own fake certificates that look exactly like the real ones, tricking computers into thinking a fraudulent website is legitimate.

## What you can do

* **Keep all software updated.** Most major providers like Google, Apple, and Microsoft have already released updates to block these specific certificates.
* **Monitor your web browser.** Ensure you are using the latest version of Chrome, Firefox, or Safari, as these browsers manage the lists of which certificates to trust.
* **Check your software supply chain.** If you run a small business with custom servers or automated tools, ensure that your developers are updating all libraries and dependencies, such as Python or Node.js.
* **Use reputable security services.** When choosing providers for digital signatures or website security, look for those with a long history of successful, transparent audits.

## The bigger picture

The incident shows how a single mistake in a high-level technical procedure can have a ripple effect across the internet. While eMudhra noted that the certificate business only accounted for 1% of its revenue, the reputational impact and the cost of compliance have led to its withdrawal.

The primary task for IT professionals now is ensuring that no "forgotten" devices or older software versions continue to rely on these weak keys. Watch for updates from your software vendors to ensure your systems are using the most recent, secure certificate lists.
