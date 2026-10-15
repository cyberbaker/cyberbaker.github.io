---
title: "Attackers bypass authentication on Ivanti Connect Secure appliances"
description: "A critical Ivanti vulnerability allows remote attackers to bypass login security and run unauthorised commands on network access appliances."
pubDate: 2026-10-15T07:01:52.912+01:00
track: deep-dive
tags: ["ivanti", "vulnerabilities", "remote access", "network security"]
sources:
  - title: "Hackers abuse the Ivanti Connect Secure bug to gain access without accounts"
    url: "https://www.csoonline.com/article/4235129/hackers-abuse-the-ivanti-connect-secure-bug-to-gain-access-without-accounts.html"
    publisher: "Unknown"
aiAssisted: true
linkedin: "Attackers are using a flaw in Ivanti Connect Secure to enter networks without needing any valid usernames or passwords.\n\nThis vulnerability, tracked as CVE-2026-104935, allows remote actors to spoof identity signals and run unauthorised commands on the appliance. Because the attack bypasses the standard login path, existing security measures are unable to stop it. \n\nThis is a significant risk for any organisation using these appliances for remote access. Once an attacker gains a foothold on the device, they can monitor network traffic or move deeper into your internal systems.\n\n→ Check your Ivanti Connect Secure version immediately\n→ Apply the relevant patches for your software branch\n→ Monitor for unusual outbound traffic or unauthorised configuration changes\n\nRead the full breakdown here."
linkedinHashtags: ["CyberSecurity", "Ivanti", "InfoSec", "VulnerabilityManagement"]
draft: false
---
Attackers are using a vulnerability in Ivanti Connect Secure appliances to gain access to networks without needing valid user accounts. Once they bypass the login process, they can execute arbitrary commands (instructions that allow an attacker to run any code they choose) on the device itself. This flaw is particularly serious because it allows attackers to circumvent the standard security checks designed to verify a user's identity.

## The short version

*   An authentication bypass flaw in Ivanti Connect Secure allows attackers to log in without credentials.
*   Attackers can use this access to run unauthorised commands on the appliance.
*   The vulnerability, tracked as CVE-2026-104935, has been actively exploited in the wild.
*   Security teams should identify their Ivanti versions and apply the relevant patches immediately.

## How the attack works

The vulnerability, identified as CVE-2026-104935, has a CVSS rating (a standard system for measuring the severity of security flaws) of 8.6 out of 10. It affects Ivanti Connect Secure, which is a type of appliance used to provide secure remote access to organisational networks.

The attack relies on an authentication bypass, which is a way for a user to gain access to a system without providing the required credentials like a username or password. According to the security firm watchTowr, the flaw allows remote attackers to spoof the signals used to establish a user’s identity. By mimicking these signals, the attacker can trick the system into believing they are a legitimate user.

Crucially, this bypass does not use the standard login path. Because the attackers are using a separate route to enter the system, existing login protections and security measures are unable to stop them. Once the attacker has successfully bypassed the authentication, they can achieve remote code execution. This means they can run arbitrary commands on the appliance, potentially giving them a foothold to move deeper into the wider network.

Ivanti stated that they initially discovered a portion of this vulnerability through their own product security programme and issued a patch in the July release 25.1.3.0. The company said they were working to backport the fix—which means applying a software update designed for a newer version to an older version—to other supported versions when exploitation of the flaw began.

The cybersecurity firm Volexity, which is credited with discovering the flaw, has published details of its exploitation. While the specific identity of the attackers has not been disclosed, the US Cybersecurity and Infrastructure Security Agency (CISA)—the American agency that works alongside the UK's National Cyber Security Centre (NCSC)—added the flaw to its known exploited vulnerabilities (KEV) catalog on 13 October. This catalog tracks vulnerabilities that are confirmed to be actively used by attackers to target organisations.

## Who is affected

The vulnerability impacts several product branches. This includes Ivanti Connect Secure 22.8R2.4 and all earlier versions within that branch, as well as certain specified 25.1 releases. 

Ivanti has stated that versions 22.7 and earlier are not affected by this specific flaw. To determine if your organisation is at risk, you must check the exact version of the Ivanti Connect Secure software currently running on your hardware. 

Because the vulnerability has been added to the KEV catalog, it is confirmed that attackers are actively using this flaw to target organisations. While the reporting does not mention specific UK impact, the nature of the software means any organisation using these appliances for remote access could be a target. It is not yet known how many people have been affected or whether specific data has been stolen during these attacks.

## What defenders should do

Ivanti has advised security teams to identify their deployed versions, apply the necessary fixes, and investigate whether their systems have been compromised.

To address the risk, follow these steps in order of priority:

*   Identify your current software version by checking the appliance management interface.
*   Apply the appropriate patch based on your hardware and software branch. Ivanti has released fixes for versions 22.8R2.5, 25.1.1.2, 25.1.3.0, and 25.1.3.1.
*   Investigate your systems for signs of compromise.

While Ivanti noted that reliable indicators of compromise (specific patterns or pieces of data that suggest a system has been breached) were not yet available from the vendor, the firm Volexity has published details regarding how the flaw was exploited. 

Defenders should also look for signs of unauthorised command execution on edge devices (devices located at the boundary of a network). This includes monitoring for:

*   Unusual outbound traffic originating from the appliance.
*   Unexpected changes to the appliance configuration or system files.
*   The creation of unauthorised user accounts or new administrative privileges.

Longer-term, organisations should ensure they have a clear inventory of all edge devices and a tested programme for rapid patching when vulnerabilities are added to lists like the CISA KEV catalog.

## Why it matters beyond the security team

The exploitation of this flaw allows attackers to bypass the primary gatekeeper of the network. For a business, this means an attacker can enter the environment without a single stolen password or a successful phishing attempt. 

If an attacker gains control of a Connect Secure appliance, they can use it to monitor network traffic or move laterally to reach internal servers. For UK organisations, this could lead to the theft of intellectual property or the disruption of business operations. Depending on the sector, such an incident might also require reporting to the Information Commissioner's Office (ICO) if personal data is accessed. The cost of responding to a breach involving core infrastructure often exceeds the cost of maintaining a rigorous patching schedule.
