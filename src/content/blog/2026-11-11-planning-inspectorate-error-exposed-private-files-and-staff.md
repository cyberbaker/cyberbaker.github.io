---
title: "Planning Inspectorate error exposed private files and staff accounts"
description: "A security researcher found that a misplaced login in a public code repository could have given access to sensitive government documents and data."
pubDate: 2026-11-11T07:01:20.454+00:00
track: everyday
tags: ["data breach", "public sector", "vulnerabilities", "cyber security"]
sources:
  - title: "Security Flaws Across UK Government Sites Exposed ‘God-Tier’ Information"
    url: "https://www.wired.com/story/security-flaws-across-uk-government-sites-exposed-god-tier-information/"
    publisher: "Simon Willison (prompt injection)"
aiAssisted: true
linkedin: "A misplaced login in a public code repository gave potential access to private employee accounts and sensitive legal documents at the Planning Inspectorate.\n\nA security researcher used AI to scan public codebases and found vulnerabilities across dozens of UK public sector organisations, including the Home Office and the Department of Education. In this case, a simple technical error meant that credentials were left visible to anyone searching the platform.\n\nThis is not a sophisticated hack, but a failure in digital housekeeping. For managers and business owners, it shows how easily personal data, such as identity documents or employment history, can be exposed through accidental mistakes in how software is managed.\n\n→ Review any code or technical documents shared publicly for passwords.\n→ Use dedicated software to manage credentials instead of writing them in code.\n→ Implement a second person to check all code before it is uploaded.\n\nRead the full article here."
linkedinHashtags: ["CyberSecurity", "DataBreach", "UKGovernment", "InformationSecurity"]
draft: false
---
A security researcher discovered that the Planning Inspectorate, an agency responsible for land-use matters across England, accidentally left a login credential in a public code repository. This mistake granted wide-ranging access to SharePoint sites and private employee OneDrive accounts.

This incident shows how small technical oversights can expose highly sensitive information. For the general public, it demonstrates that even when organisations try to be transparent, mistakes in how they manage their digital tools can put personal data at risk.

## What happened

A security researcher, Chris Nesbitt-Smith, identified more than 100 serious vulnerabilities across 349 public sector codebases. He scanned 33 different organisations, finding vulnerabilities in approximately two-thirds of them. The research involved using Claude’s Opus and Sonnet AI models on a laptop to find flaws in code that the UK government makes publicly available.

The Planning Inspectorate accidentally uploaded a login to a public GitHub repository (a platform where developers store and share their code). This exposed a Microsoft Entra ID, which would have provided extensive read and write access to SharePoint sites and private employee OneDrive accounts. This access included sensitive libraries containing evidence held for legal planning inquiries and appeals.

The Planning Inspectorate's cyber monitoring tools detected the researcher's activity in August. The agency stated it was already treating the situation as a cyber incident when the researcher made contact. They fixed the vulnerability within 20 minutes of the report and verified that no data breach had occurred. The Planning Inspectorate said they have strengthened their processes to prevent this from happening again.

Other organisations affected by the findings included the Department of Health and Social Care, the Home Office, the Department of Education, and the Scottish Government. In the Department of Education, vulnerabilities were found in a teacher application service containing personal details, qualifications, and identity documents. In a Scottish Government open data portal, a flaw would have allowed visitors to read administrative account information and change site configurations.

## Why it matters

The consequences of these vulnerabilities range from the theft of personal identity documents to the risk of ransomware (malicious software that locks an organisation's files and demands payment to unlock them). In the case of the Planning Inspectorate, the researcher noted that the ability to encrypt or steal data was "abundantly there".

For people in the UK, these flaws mean that personal information—such as employment history, qualifications, or legal evidence—could be exposed through simple technical errors. While the researcher described these issues as "daft stuff" rather than highly sophisticated attacks, they represent a significant failure in digital housekeeping. For small businesses and managers, this shows that the tools used to build and share software must be managed with strict internal processes to avoid accidental leaks.

## How this kind of attack works

This type of exposure does not usually involve a complex "hack" in the traditional sense. Instead, it often stems from a mistake in how developers manage their workflow.

When developers write code, they often use public repositories to share their work or collaborate. Sometimes, a developer might accidentally include "secrets"—such as passwords, API keys, or login credentials—directly inside the code itself. If that code is then uploaded to a public repository, anyone can see those credentials.

In this instance, an AI model was used to scan large amounts of public code to find these mistakes. The AI can quickly parse through thousands of lines of code to identify patterns that look like misplaced passwords or insecure configurations. Once a researcher finds a credential, they can use it to log into the organisation's systems just as a legitimate employee would, gaining access to private files and databases without needing to break through any digital walls.

## What you can do

* **Audit your public presence.** Check any code or technical documentation your organisation shares publicly to ensure no passwords or private keys are included.
* **Implement strict code review processes.** Ensure a second person checks all code before it is uploaded to any shared or public platform to catch accidental inclusions.
* **Use secret management tools.** Instead of writing passwords in code, use dedicated software designed to store and inject credentials securely into applications.
* **Monitor your digital footprint.** Regularly use automated tools or professional services to see what information about your organisation is visible to the public.

## The bigger picture

The discovery of these flaws has sparked a debate about whether the public sector should continue publishing its source code openly. The NHS reportedly ordered technology teams to move away from open source code in May due to concerns regarding how AI models can be used to find vulnerabilities.

However, experts suggest that simply hiding code without fixing the underlying maintenance issues could be counterproductive. Closing off access might inadvertently signal to attackers that sensitive data is hidden behind a specific area. The focus should remain on improving the quality of internal digital housekeeping.
