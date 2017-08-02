# To add / edit speakers

Read the [Content Editing](../../README.md#content-editing) section of the main README.

## Properties

Example

---
name: Firstname Lastname
id: firstname-lastname
talk_id: my-cool-talk
company: "Speaker Company"
featured: true

intro: "Intro text for speaker. Yes, I saw. You were doing well, until everyone died."
links:
    - text: "@twitterhandletest"
      url: "https://twitter.com/twitterhandletest"
    - text: "example.com"
      url: "http://example.com/"
---

Dr. Zoidberg, that doesn't make sense. But, okay! Is today's hectic lifestyle making you tense and impatient? Actually, that's still true. Good news, everyone! I've taught the toaster to feel love! And then the battle's not so bad? Bender, hurry! This fuel's expensive! Also, we're dying! Of all the friends I've had… you're the first. Who are you, my warranty?! No! The kind with looting and maybe starting a few fires!

 - `id`: unique id for the speaker.
   Will be used in the URL, so it should only contain lowercase-letters
   and dashes. Should also correspond to the filename (in the example that'd be `firstname-lastname.md`)
 - `talk_id`: the id of the talk this speaker will give. Corresponds to a filename (without `.md`-extension) in `../_talks`.
 - `name`: the name of the speaker to be displayed in the header of the site.
 - `company`: the company of the speaker, will be displayed along with the name in teaser and speaker-header.
 - `featured`: if set to any value, speaker will appear on front page
 - `intro`: the opening-paragraph for the speaker page
 - `links`: a sorted list of links to appear below the speaker description. Each link has to contain the fields `text` and `url`.
 - the content of the document (everything behind the "frontmatter"-/metadata-block – that is, after the `---`) is the content part of the speaker details page.
