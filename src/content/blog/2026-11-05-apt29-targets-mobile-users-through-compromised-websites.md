---
title: "APT29 targets mobile users through compromised websites"
description: "Russian threat group APT29 used watering hole attacks and known vulnerabilities to steal data from iOS and Android users visiting specific websites."
pubDate: 2026-11-05T07:01:34.517+00:00
track: deep-dive
tags: ["apt29", "mobile security", "vulnerabilities", "data theft"]
sources:
  - title: "Hackers use n-day exploits in zero-click attacks on iOS, Android devices"
    url: "https://www.bleepingcomputer.com/news/security/hackers-use-n-day-exploits-in-zero-click-attacks-on-ios-android-devices/"
    publisher: "Unknown"
aiAssisted: true
linkedin: "Visiting a compromised website was enough to trigger an exploit on some mobile devices without any user interaction.\n\nResearchers at Sekoia have linked a large-scale campaign to the Russian group APT29. The attackers used a watering hole strategy, compromising legitimate sites and using fake lookalike domains to target iOS and Android users. By exploiting known vulnerabilities, they could harvest sensitive data including WhatsApp databases, location history, and browser credentials.\n\nWhile the malicious activity stops when a device is rebooted, the risk returns if the user visits a compromised site again. This makes keeping software up to date the most effective way to prevent these specific exploits from working.\n\n→ Update all iOS and Android devices with the latest security patches\n→ Ensure Chrome on Android is running the most recent version\n→ Restart devices if you suspect you have visited a suspicious site\n\nRead the full report here."
linkedinHashtags: ["CyberSecurity", "MobileSecurity", "APT29", "InfoSec"]
draft: false
---
Researchers at Sekoia have identified a large-scale mobile attack campaign attributed with moderate-to-high confidence to APT29 (also known as Midnight Blizzard), a Russian threat group. The attackers used a watering hole strategy, which involves compromising legitimate websites that target specific groups to infect the visitors. By infecting these sites, the group could target iOS and Android users without requiring them to click on suspicious links or download files manually.

## The short version

*   APT29 used compromised websites and fake "lookalike" domains to target mobile users.
*   The attackers used n-day exploits (known vulnerabilities that have already been identified but remain unpatched on some devices) to access sensitive data.
*   The attack could occur without user interaction, meaning simply visiting a compromised site was enough to trigger the exploit.
*   The malicious activity does not persist; a device reboot stops the attack until the user visits a compromised site again.

## How the attack works

The campaign functioned through a multi-stage process designed to profile victims and deliver specific payloads. In the first stage, the attackers used compromised or lookalike websites to determine the visitor's browser version. This allowed them to deploy "platform-specific n-day exploit chains without user interaction," according to Sekoia.

One method involved compromising the Ukrainian web analytics service Plerdy. The attackers modified its SEO tracker (a small piece of code used by websites to monitor search engine performance), which was loaded by thousands of websites between 27 August and 3 September. Other sites were compromised directly, including a Ukrainian gas producer, a Bulgarian military-related site, and a US chemical industry trade association.

The group also used an adversary-in-the-middle attack model to create lookalike domains. These domains impersonated legitimate sites, such as the America250 website and Raffles London at The OWO hotel, by relaying real content through the attacker's controlled infrastructure to deceive users. This model allows the attacker to sit between the user and the real website, making the fake site appear legitimate by mirroring the original content.

Once the browser was identified, the attackers deployed specific exploits:

*   For iOS users (specifically targeting iOS 18.5), the attackers used a chain of vulnerabilities including CVE-2025-43529, CVE-2026-20700, CVE-2025-14174, CVE-2025-43510, and CVE-2025-43520. CVE-2025-43529 is linked to the "DarkSword" exploit kit, which was first documented in March and has been used by multiple threat groups since at least November 2025. These exploits allowed the payload to harvest WhatsApp and Telegram databases, Keychain credentials (a secure storage system for passwords and sensitive data), location data, and photos.
*   For Android users, the attackers targeted Chrome for Android versions 139 to 145 (excluding 143) using CVE-2026-3910 and CVE-2025-27038. These vulnerabilities allowed the use of AndroSnitch to collect Chrome cookies, login data, browsing history, and saved WiFi credentials.

Sekoia notes that while researchers identified four other vulnerabilities in unreachable code or alternate exploit paths, those were not used in the analysed attack chains.

## Who is affected

The campaign targeted any iOS or Android user who visited a compromised website or a fraudulent lookalike domain. This includes the thousands of websites that loaded the modified Plerdy SEO tracker during the window of 27 August to 3 September.

While the reporting identifies specific compromised organisations in Ukraine, the US, Bulgaria, and the Czech Republic, it does not specify the exact number of individuals whose data was stolen. The impact is determined by the type of data the payload is designed to harvest, such as private messages, credentials, and location history. The reporting does not mention any specific impact on UK organisations or individuals.

## What defenders should do

The primary defence against this campaign is ensuring all mobile devices are running the most recent software. Apple and Google have patched all the vulnerabilities used in these attacks, with some fixes even reaching older iOS releases.

Sekoia recommends the following:

*   Apply the latest available security updates for all iOS and Android devices immediately.
*   Ensure web browsers, particularly Chrome on Android, are updated to the latest versions to mitigate the risk of known vulnerabilities.

Because the payloads used by APT29 did not establish persistence (a method used by malware to remain on a device even after a restart), a device reboot will stop the malicious activity. However, the user remains at risk if they visit a compromised site again after the reboot.
