---
title: "Critical flaws in Langflow allow unauthenticated code execution"
description: "Two vulnerabilities in the Langflow AI tool allow remote attackers to bypass authentication and run unauthorised code on affected servers."
pubDate: 2026-11-03T07:01:45.527+00:00
track: deep-dive
tags: ["vulnerabilities", "ai security", "software patching", "open source"]
sources:
  - title: "Critical Langflow Flaws Could Let Unauthenticated Attackers Run Code on Servers"
    url: "https://thehackernews.com/2026/11/critical-langflow-flaws-could-let.html"
    publisher: "Unknown"
aiAssisted: true
linkedin: "Unauthenticated attackers can bypass security checks and run unauthorised code on servers using Langflow.\n\nIBM has identified two critical flaws in the Langflow open-source tool used for building AI agents. These vulnerabilities allow anyone with network access to skip the login process and execute commands on the host system.\n\nFor organisations integrating AI into their workflows, this presents a risk to both system integrity and business continuity. If an attacker gains control of the server, they can disrupt automated processes or move further into your network.\n\n→ Update Langflow to version 1.13.0 immediately\n→ Restrict network access to prevent public internet exposure\n→ Audit all environments for legacy versions of the software\n\nRead the full analysis here."
linkedinHashtags: ["CyberSecurity", "AI", "InfoSec", "SoftwareSecurity"]
draft: false
---
IBM reported last week that two critical flaws have been identified in Langflow, an open-source tool used for building AI agents (software designed to perform specific tasks using artificial intelligence) and workflows. These vulnerabilities are significant because they could allow a remote attacker to access the system without needing an account. Once they have bypassed authentication (the process of verifying a user's identity), they could potentially execute arbitrary code (running any command or programme of their choosing) on the servers where Langflow is hosted.

## The short version

*   Two critical vulnerabilities exist in Langflow, an open-source tool for building AI agents and workflows.
*   Unauthenticated attackers could bypass security checks to access the tool.
*   Attackers may be able to run unauthorised commands or code on affected servers.
*   All versions from 1.0.0 through 1.12.8 are vulnerable; version 1.13.0 contains the fix.

## How the attack works

The vulnerabilities affect the Langflow tool, which developers use to create complex AI-driven processes. According to IBM, the flaws allow for two distinct types of exploitation that could work in tandem to compromise a system.

The first vulnerability involves an authentication bypass. In a typical secure system, a user must provide credentials, such as a username and password, to prove they are allowed to access the software. An authentication bypass allows a remote attacker to skip this step entirely. This means anyone with access to the network where Langflow is running could potentially gain entry without ever being issued an account or providing valid credentials.

The second vulnerability allows for the execution of arbitrary code. If an attacker successfully bypasses the initial security layers via the first flaw, they can use this second flaw to send instructions to the server. Because the attacker can run arbitrary code, they are not limited to the functions intended by the Langflow developers. They could potentially use the server to launch further attacks against other parts of an organisation's network.

The technical specifics of how these two flaws interact to facilitate a full system compromise have not been fully disclosed. However, IBM stated that "two critical flaws in Langflow could let a remote attacker with no account bypass authentication or run arbitrary code". These flaws are present in every release of the software from version 1.0.0 up to and including version 1.12.8.

The attack chain likely begins with the attacker identifying an exposed Langflow instance on a network. By exploiting the authentication bypass, the attacker gains the level of access required to interact with the underlying system components. Once they have established this foothold, they can then deploy the arbitrary code execution flaw to run commands with the same privileges as the Langflow application. This could allow them to move from simply accessing the tool to controlling the server itself.

## Who is affected

The vulnerability affects any organisation or developer using Langflow releases between version 1.0.0 and 1.12.8. This includes any deployment where these specific versions of the software are currently running.

To determine if your organisation is affected, you should check the version of Langflow currently deployed in your systems. If you are running any version from 1.0.0 to 1.12.8, your deployment is vulnerable. The reporting does not mention any specific UK organisations being targeted or affected. It also remains unknown how many people or organisations are currently exposed to these flaws, and it has not been disclosed whether any data has been stolen.

## What defenders should do

The primary objective for security teams is to ensure that Langflow is running a version that does not contain these flaws.

To address the vulnerability, follow this recommendation from IBM:

*   Update Langflow to version 1.13.0 immediately. This is currently the only version containing a fix for these flaws.

Beyond patching, defenders should consider the following actions:

*   Audit all environments where Langflow is installed to identify any legacy versions that may have been missed during previous update cycles.
*   Monitor server logs for any unusual activity or unauthorised access attempts, particularly around the authentication modules of any AI-related tooling.
*   Restrict network access to Langflow instances so they are not reachable from the public internet unless strictly necessary. This can limit the ability of a remote attacker to reach the tool.
*   Review the permissions assigned to the service running Langflow. If the service is running with excessive privileges, the impact of arbitrary code execution may be increased.

## Why it matters beyond the security team

For organisations, the presence of these flaws introduces risks that extend beyond the IT department. If an attacker successfully executes code on a server, they could gain control over the environment hosting the AI workflows.

In the UK, where many sectors are increasingly integrating AI into their operational workflows, such a breach could lead to significant service disruption. If the servers hosting these AI workflows are compromised, the automated processes they support may fail or produce incorrect outputs. This could impact business continuity and necessitate costly incident response and recovery efforts. The ability for an unauthenticated user to gain access to core development tools represents a significant risk to the integrity of the automated systems an organisation relies upon.
