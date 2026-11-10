---
title: "OpenSSH authentication bypass flaw allows unauthorised root access"
description: "A high-severity vulnerability in OpenSSH affects Linux systems using musl libc. Update to version 10.6p2 to prevent unauthorised access."
pubDate: 2026-11-10T07:01:20.199+00:00
track: deep-dive
tags: ["openssh", "vulnerabilities", "linux", "cyber security"]
sources:
  - title: "Hackers Exploiting ‘SSHole’ Authentication Bypass in OpenSSH"
    url: "https://www.securityweek.com/hackers-exploiting-sshole-authentication-bypass-in-openssh/"
    publisher: "Unknown"
aiAssisted: true
linkedin: "Attackers can bypass OpenSSH authentication to gain root access on specific Linux systems by providing a password longer than 256 characters.\n\nThis flaw, tracked as CVE-2026-123158, affects distributions like Alpine, OpenWrt, and Yocto when they use the musl libc implementation with PAM disabled. Automated botnets and crypto miners are already using this exploit to target systems.\n\nIf your organisation uses lightweight Linux for containers, IoT, or embedded devices, you may be at risk of unauthorised access or resource theft. \n\n→ Update OpenSSH to version 10.6p2 immediately\n→ Disable password authentication where possible\n→ Review system logs for suspicious login attempts\n\nRead the full analysis here."
linkedinHashtags: ["OpenSSH", "LinuxSecurity", "Vulnerability", "InfoSec"]
draft: true
---
Threat actors are currently exploiting a high-severity authentication bypass vulnerability in OpenSSH, a widely used tool for secure remote access to computers. Known as 'SSHole' and tracked as CVE-2026-123158, this flaw allows attackers to bypass standard login procedures and gain unauthorised access to systems. This is particularly dangerous because it can grant access to highly privileged accounts, such as 'root', which typically does not allow password-based logins.

## The short version

*   A high-severity flaw in OpenSSH (CVE-2026-123158) allows attackers to bypass authentication on specific Linux systems.
*   The vulnerability is being actively exploited by automated botnets (networks of infected computers) and crypto miners.
*   Systems using the musl libc implementation with Pluggable Authentication Module (PAM) disabled are at risk.
*   Administrators should update to OpenSSH version 10.6p2 immediately.

## How the attack works

The vulnerability, identified as CVE-2026-123158, stems from how the OpenSSH server (sshd) interprets whether a string of characters is a password or a password hash (a mathematical representation of a password used for secure storage). 

In a standard login attempt, sshd takes the password a user provides, hashes it, and compares it to the hash stored on the system. On certain Linux distributions, if an account has no password hash—such as the root account on Alpine Linux, where the field is marked with an asterisk (*)—sshd attempts to process the login by borrowing a salt (a random string of data added to a password before hashing to increase security) from another account's hash.

The flaw specifically involves the musl libc, which is a standard library of functions used by many Linux systems to perform basic tasks. The vulnerability occurs when the server checks a supplied password by hashing it against a stored hash. When a user provides a password longer than 256 bytes, the musl crypt() function—the specific part of the library responsible for processing passwords—fails. Instead of returning a NULL value (an empty or non-existent result), the function returns an asterisk (*). 

Because this asterisk matches the asterisk stored in the system for accounts without a password, sshd incorrectly concludes that the password provided by the attacker is correct. Researchers have found that attackers can achieve this bypass by supplying any password between 257 and 1024 characters.

The exploitation of this flaw allows for a complete bypass of the intended security logic. By using a character string that triggers this error, an attacker can gain access to an account without ever knowing the actual credentials. This is particularly effective against accounts that are configured to be "passwordless" for security, as the system's attempt to handle the absence of a hash creates the very opening the attacker needs.

## Who is affected

The vulnerability affects specific Linux distributions that use the musl libc implementation while having the Pluggable Authentication Module (PAM)—a system that allows different authentication methods to be used—disabled. 

Affected distributions include:
*   Alpine
*   Buildroot
*   OpenWrt
*   Yocto

In Alpine Linux specifically, the following accounts are vulnerable:
*   The root account.
*   Any key-only user created via the adduser command without a password.
*   The 'Alpine' user found in official tiny-cloud images.
*   Any user authenticated via a directory service through musl-nscd.

The reporting does not mention any impact on UK-specific organisations, but any UK-based business running these specific Linux configurations is potentially exposed. If your organisation uses lightweight Linux distributions for containerisation, IoT (Internet of Things) devices, or embedded systems, these are the areas most likely to be running the affected software.

## What defenders should do

Administrators should prioritise the following actions to secure their environments.

Immediate mitigation and patching:
*   Update OpenSSH to version 10.6p2 as soon as possible.
*   Disable password authentication, which is often enabled by default in OpenSSH.
*   If SSH is not required for business operations, disable the SSH service entirely.
*   In Alpine Linux, users are urged to apply patches and restart the sshd service immediately.

Detection and hunting:
*   Review system logs for unusual or suspicious requests to identify potential exploitation attempts.

Previdian reported observing 20 exploitation attempts using 13 unique attacker IP addresses across nine different countries between 6 November 2026 and 8 November 2026. The company noted that the first observed attempt occurred on 6 November and the last on 8 November.

While the specific identity of the threat actors remains unknown, WatchTowr reported that only botnets and crypto miners have picked up the exploit so far. This suggests that the current activity is driven by automated scripts looking for easy targets to install mining software or expand a network of compromised devices, rather than targeted human attacks.

## Why it matters beyond the security team

Gaining access to a 'root' account provides an attacker with total control over a system. For a business, this translates to several direct risks. If an attacker installs crypto miners, they consume expensive computing resources and increase electricity or cloud hosting costs. If they deploy ransomware (malicious software that locks an organisation's files and demands payment to unlock them), they can halt all business operations.

For UK organisations, such a breach can lead to significant operational disruption and potential regulatory scrutiny regarding how systems are maintained. While the current exploitation appears to be aimed at automated tasks like mining, the ability to bypass authentication represents a fundamental failure of a primary security barrier. This could lead to the theft of sensitive data or the use of company infrastructure to launch further attacks.
