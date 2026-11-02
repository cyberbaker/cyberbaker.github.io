---
title: "Applebee's customer data exposed by password left in mobile app"
description: "A security researcher found a password hidden in the Applebee's Android app, potentially exposing names, emails, and phone numbers of millions of customers."
pubDate: 2026-11-02T07:01:24.527+00:00
track: everyday
tags: ["data breach", "mobile security", "software vulnerabilities", "customer data"]
sources:
  - title: "Applebee’s exposed customers’ personal data after leaving database password in app"
    url: "https://techcrunch.com/2026/10/30/applebees-exposed-customers-personal-data-after-leaving-database-password-in-app/"
    publisher: "Unknown"
aiAssisted: true
linkedin: "A password for an internal database was left inside the Applebee's Android mobile app.\n\nA UK-based researcher found the error by using AI to scan the app's code. This mistake could have allowed unauthorised people to access or change private information, including names, email addresses, dates of birth, and phone numbers.\n\nThis matters because stolen personal details are often used to carry out targeted scams. When criminals have your specific information, they can create very convincing fraudulent messages to trick you.\n\n→ Only share essential information with loyalty programmes\n→ Treat unexpected texts or emails asking for details with suspicion\n→ Report suspicious messages to the authorities\n\nRead the full article here:"
linkedinHashtags: ["CyberSecurity", "DataBreach", "AppSecurity", "Privacy"]
draft: false
---
Registered customers of the American restaurant chain Applebee’s had their personal details exposed because a password to an internal database was left inside the company's Android mobile app. This error meant that an attacker could have accessed, and potentially modified, private information belonging to customers.

The flaw was discovered by Robert Wiggins, a UK-based cybersecurity researcher at What Security. He used artificial intelligence to scan thousands of lines of code within the Applebee's Android app to find the hidden password. The news outlet TechCrunch confirmed the vulnerability by downloading the app, examining its source code, and using dummy data to retrieve information from the database.

Applebee's parent company, Dine Brands, confirmed on Thursday that it had taken action to fix the issue. A spokesperson for Dine Brands said, “We appreciate TechCrunch and the security researcher for bringing this matter to our attention.” The company added that its security team had launched an investigation but had not found evidence of unauthorised access. It remains unknown how long the password was visible in the app or exactly how many customers were affected.

## What happened

The vulnerability involved hardcoding credentials, which is the practice of storing a password or a private key directly inside the software code. Because the password was part of the app itself, anyone who downloaded the app could potentially extract it.

The database containing the information included customer names, email addresses, dates of birth, phone numbers, and ZIP codes. It also contained veteran status, account creation dates, how many times a customer had logged in, and IP addresses (the digital addresses used to identify devices on a network) from recent log-ins. These IP addresses can be used to find a person's approximate location.

As of last year, Applebee's had 8.5 million customers enrolled in its rewards programme. While the company has not confirmed how many people were exposed, the Android app has more than a million downloads on Google Play. Dine Brands has stated its investigation is ongoing and it will take further steps based on what it finds.

## Why it matters

The exposure of this data increases the risk of targeted scams. When criminals have a person's name, date of birth, and phone number, they can create highly convincing phishing attacks (fraudulent communications designed to trick people into revealing sensitive information) that appear to come from trusted sources.

For organisations, this incident shows how a single error in software development can lead to significant data exposure. If you use loyalty apps or digital rewards programmes, your data is often stored in central databases that rely on the security of the app on your phone. A mistake in the code can allow an unauthorised person to access the systems holding that information.

## How this kind of attack works

The researcher found the database password buried in the app's source code—the underlying instructions that tell the app how to function. Usually, an app communicates with a company's server by using a secure, private connection that only the company knows how to set up.

In this case, the developers accidentally included the "key" to the server directly within the app's instructions. By using AI to sift through the massive amount of text in the code, the researcher identified the specific string of characters that acted as the password. 

Once the researcher had this password, they could send requests to the company's remote servers. Because the server saw the correct password, it treated the researcher as an authorised user. This allowed the researcher to view or even modify the customer records stored in the database.

## What you can do

* **Limit the data you share with loyalty programmes.** Providing only the essential information required for the service reduces the amount of personal detail at risk if a breach occurs.
* **Be cautious of unexpected communications.** If you receive a text or email asking for personal details or containing unusual links, do not click them, even if they use your correct name or details.
* **Report suspicious activity.** In the UK, you can forward suspicious emails to report@phishing.gov.uk and suspicious text messages to 7726.

## The bigger picture

This incident shows the risks involved when sensitive credentials are not kept separate from the code that users download. As companies increasingly rely on mobile apps to manage customer relationships, the security of those apps becomes a primary way to protect user data.

Watch for news regarding how companies disclose these errors and whether they provide clear guidance to affected users.
