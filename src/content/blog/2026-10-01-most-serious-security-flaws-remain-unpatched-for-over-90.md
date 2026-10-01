---
title: "Most serious security flaws remain unpatched for over 90 days"
description: "New data shows that 97% of serious security flaws in Nordic countries and 92% in the UK remain unpatched for more than three months."
pubDate: 2026-10-01T09:57:30.068+01:00
track: everyday
tags: ["vulnerabilities", "cyber security", "data breach", "software patching"]
sources:
  - title: "Most open critical and high flaws are over 90 days old - Help Net Security"
    url: "https://www.helpnetsecurity.com/2026/09/30/research-unpatched-vulnerabilities-backlog/"
    publisher: "Help Net Security"
aiAssisted: true
draft: false
---
In the Nordic countries, 97% of the most serious security flaws found on internet-facing systems have remained unpatched for more than 90 days. Similar trends appear in the UK, where 92% of these vulnerabilities are over three months old, and in the US, where the figure is 86%.

These flaws are not unknown to the organisations holding them. Because the data comes from Detectify, a security company that uses payload-based testing—sending a functional attack request to see how a system responds—the identified issues are ones that have been judged exploitable. For many businesses and public services, these ageing vulnerabilities represent an open door for cybercriminals.

## What happened

Detectify analysed exposure data from 1,293 of its customers across the US, the UK, and the Nordics. The study found that many organisations struggle to resolve critical and high-severity vulnerabilities (flaws that could allow an attacker to gain control of a system or steal data) on their internet-facing systems.

The data showed significant differences between sectors. Public-sector organisations resolved the lowest percentage of these serious findings, at only 8.3%. In comparison, consumer packaged goods and brand companies resolved 46.2%, technology companies 37.4%, financial and banking companies 30.6%, and manufacturing companies 23.9%.

The report also noted a trend regarding artificial intelligence. Organisations with exposed AI tooling—such as Lovable, Base44, Open WebUI, or LibreChat—resolve critical and high-severity flaws at less than half the rate of the rest of the customer base.

Rickard Carlsson, CEO of Detectify, noted that public-sector environments face specific hurdles. He said these environments often combine legacy infrastructure, fragmented ownership, and long procurement processes. He added that "the affected system could be owned by another department, depend on an old vendor, require a procurement process, or support a service where downtime carries real consequences."

The research also found a specific pattern in the UK. While UK organisations monitor a higher percentage of their verified internet-facing domains (72.4%) than those in the Nordics (31.9%) or the US (28.9%), they closed the lowest percentage of all critical and high findings ever raised, at 18.6%.

## Why it matters

When a serious vulnerability remains unpatched for months, it creates a window of opportunity for attackers. Even if an organisation is aware of the flaw, the longer it stays open, the more likely it is to be discovered and exploited by others.

For small businesses or public services, this delay can lead to data breaches, service interruptions, or financial loss. In some cases, the delay is not due to neglect but to "risk tolerance drift," where flaws left open long enough are treated as accepted risks by default. This means a vulnerability that was once considered a minor issue can become a permanent, dangerous fixture in an organisation's digital setup.

## How this kind of attack works

To understand the risk, it helps to look at how a vulnerability is identified and left unaddressed. An internet-facing system is any part of a company's network that can be reached from the public internet, such as a website or a login portal.

A vulnerability is a mistake in the software code that creates a weakness. Detectify uses payload-based testing to find these. This involves sending a specific, functional request to a system to see if it reacts in a way that proves the weakness can be used to gain access. If the system responds as expected, the flaw is confirmed as exploitable.

Once a flaw is confirmed, the organisation must "patch" it, which means updating the software to fix the error. However, the process often stalls. A security team might find a flaw, but they may not have the authority to fix it if the system is owned by a different department. Alternatively, fixing the flaw might require taking a vital service offline, which can cause business disruption. While the organisation weighs these options, the exploitable weakness remains open for attackers to find.

## What you can do

* **Maintain an asset inventory.** Keeping a clear list of all software and hardware connected to the internet helps ensure nothing is missed during security reviews.
* **Define system ownership.** Assigning a specific person or team to be responsible for every piece of software helps prevent delays when a fix is needed.
* **Prioritise exploitable flaws.** Focusing resources on vulnerabilities that have been confirmed as exploitable helps manage limited time and budgets effectively.
* **Bring AI tools into standard processes.** Ensuring that new AI platforms are subject to the same security reviews as established systems prevents them from becoming "invisible infrastructure."

## The bigger picture

The data suggests that as organisations expand their digital presence—with US verified domains growing by 20% in a year—the complexity of managing them is increasing. This growth can lead to situations where new tools are deployed quickly by individual teams without being added to the central security registry.

Watch for how organisations begin to integrate these newer, faster-moving technologies into their formal governance processes. The ability to maintain visibility over all connected assets will be a primary factor in how effectively companies manage risk.
