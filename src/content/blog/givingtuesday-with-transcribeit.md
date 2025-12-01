---
title: 'GivingTuesday with TranscribeIt'
pubDate: 2025-12-02T00:00:00Z
description: "Giving back to the invisible majority and needs with TranscribeIt"
author: 'Keerthana Rajesh Kumar'
image: "/blog/cover/givingtuesday-with-transcribeit.png"
tags: ['announcement', 'project']
---

It was not long ago when I left my internship at Ente to work full-time on accessibility, since someone has to. That was around when I started experiencing a visual disturbance until it became too much to bear, seeping through every nook and cranny of my life until I went to an eye examination, only to find something more deeper could be happening. The unknown always scares us, and yes it did scare me.

# The last straw that broke the camel's back

Adapting to the new reality of using screen readers, only to deal with mixed code language, inaccessible multimedia content such as images and missed sarcasm was an hassle. The final straw that broke the camel's back was when I was participating in the November 2025 edition of Microsoft Innovation Challenge, being eager to participate to build something that solves societal needs, only to encounter a live stream with no transcriptions. That was a death sentence for me since voice is overwhelming and video causes eyestrain.

My instant move was to generate captions for it and use Orca to read it out aloud for me to ensure the voice is uniform. I pinged Matthew Calder from Microsoft, the organizer of the Innovation Challenge hackathon. That's when he discussed about developing something similar for the community. I liked that idea.

# When accessibility took a hit

While I was building [CivicSphere](https://github.com/grittypuffy/civicsphere), our hackathon project for the November edition focused on making local political information and discourse accessible and simpler, I was thinking how easy it is to integrate support for multimedia content only to have that take a hit on accessibility in terms of alternative description, WCAG compliance and internationalization.

These two factors along with my recent attendance at Mentoring Summit 2025 by [Mentor Together](https://mentortogether.org/) and the accessibility concerns with livestreams made me ideate on something that can make Mounam and other accessibility projects that we are working on in FOSSIA truly inclusive and accessible.

That's where I met Priyanka Dutt, the Chief Advisor of [GivingTuesday](https://www.givingtuesday.org/), who explained about the importance of generosity and a quick talk with her made me think deeply about GivingTuesday and wanting to do an initiative for the same to give back to the community.

Deep inside, there was also a selfish intention to develop something for my uses as an engineer. But I guess selfishness is a good thing, since it means you care deeply and work intentionally.

# The birth of TranscribeIt

So, that's how TranscribeIt, the free software service for online video and livestream transcription was born.

Currently, the project is in infancy and is living in our [GitHub](https://github.com/fossiaorg/transcribeit) and supports:
- Downloading from online video sources that [yt-dlp](https://pypi.org/project/yt-dlp) supports.
- Faster mutli-lingual transcriptions using [faster-whisper](https://pypi.org/project/faster-whisper) with support for multiple language in same file.
- Transcription from audio file inputs for local usage.
- Containerized deployment using Docker Compose for personal needs.

We aim to implement:
- Downloading transcriptions in different formats.
- Speaker diarization with customization support
- Adding support for dialects and enhancing support for Indian languages
- Improving performance with asynchronous operations
- Provide integration support for Mounam and CivicSphere

# Seeking your support

We seek your help in terms of:
- Supporting deployment of the project to make it available to the community by end of the year for quick testing by users
- Reporting issues
- Documentation of project for users and developers
- Upstream contributions to ensure sustainability
- Code contribution for fixes and new features
- Funding the project for long term sustainability

Let GivingTuesday and end of the year start something beautiful and inclusive for the community.