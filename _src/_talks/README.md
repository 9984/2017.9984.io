# To add / edit talks

Read the [Content Editing](../../README.md#content-editing) section of the main README.

- talks only appear on a speaker page and won't have URLs
- a talk can be connected to any speaker with the `talk_id`

## Properties

Example

```
---
talk_id: building-the-future-from-our-heads-not-our-hands
type: keynote
title: Building the future from our heads, not our hands
time: tba
---

The early days of the commercial Internet were chaotic. The people who were most successful at creating value from the turmoil, both technologists and businesspeople alike, were those who had clear visions of making a future from the crude building blocks available to them, like a child dumping a box of Legos on the floor and building a dinosaur. Domain names and web sites were those blocks. What are they today?
```

 - `talk_id`: the id of the talk. Used to reference the talk with a speaker.
 - `type`: the type of talk, e.g. *keynote*. Will be output above the talk on speakers page.
 - `title`: the full title of the talk.
 - `time`: the scheduled time of the talk.
 - the content of the document (everything behind the "frontmatter"-/metadata-block – that is, after the `---`) is the content part of the talk.
