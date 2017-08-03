# ![9984 >> 2017.9984.io](https://github.com/9984/design/blob/master/repobanner-2017.9984.io.png)

> The 9984 >> SUMMIT 2017 site
>
> Blockchain Futures for Developers, Enterprises &amp; Society<br>
> October 5 - 6, 2017<br>
> https://2017.9984.io

[![Build Status](https://travis-ci.org/9984/2017.9984.io.svg?branch=master)](https://travis-ci.org/9984/2017.9984.io)
[![css bigchaindb](https://img.shields.io/badge/css-bigchaindb-39BA91.svg)](https://github.com/bigchaindb/stylelint-config-bigchaindb)
[![Greenkeeper badge](https://badges.greenkeeper.io/9984/2017.9984.io.svg)](https://greenkeeper.io/)

---

**[Live](http://2017.9984.io) | [Beta](http://beta.2017.9984.io)**

---

**Table of Contents**
- [Content editing](#content-editing)
  - [Pages](#pages)
  - [Special pages](#special-pages)
    - [Front page](#front-page)
  - [Speakers & Talks](#speakers--talks)
    - [Adding / editing speakers & talks](#adding--editing-speakers--talks)
    - [Add new content through GitHub](#add-new-content-through-github)
- [Development](#development)
  - [Install dependencies](#install-dependencies)
  - [Development build](#development-build)
- [Continuous deployment: always be shipping](#continuous-deployment-always-be-shipping)
- [Manual deployment](#manual-deployment)
  - [Prerequisite: authentication](#prerequisite-authentication)
  - [Staging build & beta deployment](#staging-build--beta-deployment)
  - [Production build & live deployment](#production-build--live-deployment)
- [Coding conventions](#coding-conventions)
  - [(S)CSS](#scss)
- [Authors](#authors)
- [License](#license)

# Content editing

![unknown](https://user-images.githubusercontent.com/90316/28792395-c1b74594-762f-11e7-8ff6-b49586f39360.jpeg)

Most content on the site can be edited on GitHub without messing with HTML markup.

The site's source and structure is in the [`_src/`](_src) folder. Ignore everything with an underscore in its name.

When viewing a file on GitHub you will see a small pencil icon in the top right. Click that to edit the file.

## Pages

All pages are simple Markdown files. Markdown is a way of telling the site how an element should be marked up, like headings & bold text:

```markdown
I'm a simple paragraph. No fancy symbols needed.

# I'm a heading 1
## I'm a heading 2

You can make text **bold like so**
```

Have a look at [Code of Conduct](_src/code-of-conduct.md) or the [Imprint](_src/imprint.md) to see how Markdown is used.

## Special pages

Some pages like front page & speakers page source their content dynamically during site build. This is so we have a single source of truth for content used in multiple places on the site.

### Front page

Content for all sections on front page is coming from a data file:
- [`_src/_data/content-front.yml`](_src/_data/content-front.yml)

## Speakers & Talks

All speakers data is coming from individual speaker files in [`_src/_speakers`](_src/_speakers)

### Adding / editing speakers & talks

Each content item is represented as a Markdown file with YAML at the top. The data should look something like this:

```
---
property: "value"
other_property:
    - "list"
    - "of"
    - "values"
---
```

### Add new content through GitHub

1. Click into the appropriate directory ([/_src/_speakers](_src/_speakers), [/_src/_talks](_src/_talks)
1. Copy the data from an existing `.md` file
1. In the parent folder, click `Create new file`
1. Paste the data into GitHub and edit
1. Edit to your heart’s content!
 - The filename you choose may determine the content page URL
 - The `id` property should be the same as the filename
1. When finished, fill in a commit description and select `Create a new branch for this commit and start a pull request`.
1. Wait to see if the created pull request passes the build. If it does, click merge and your changes will be live

# Development

![200](https://user-images.githubusercontent.com/90316/28792559-56cbe02c-7630-11e7-851f-40192e0ce50a.gif)

You need to have the following tools installed on your development machine before moving on:

- [node.js](http://nodejs.org/) & [npm](https://npmjs.org/)
- (optional) use [Yarn](https://yarnpkg.com) instead of npm for faster dependency installations
- [Ruby](https://www.ruby-lang.org) (for sanity, install with [rvm](https://rvm.io/))
- [Bundler](http://bundler.io/)

## Install dependencies

Run the following command from the repository's root folder to install all dependencies.

```bash
npm i && bundle install
```

or

```bash
yarn && bundle install
```

## Development build

Spin up local dev server and livereloading watch task, reachable under [https://localhost:1337](https://localhost:1337):

```bash
gulp
```

# Continuous deployment: always be shipping

![shipping](https://cloud.githubusercontent.com/assets/90316/26559768/e21e9724-44b1-11e7-90cf-6ef6ebb06d09.gif)

The site gets built & deployed automatically via Travis. This is the preferred way of deployment, it makes sure the site is always deployed with fresh dependencies and only after a successful build.

Build & deployment happens under the following conditions on Travis:

- every push builds the site
- **live deployment**: every push to the master branch initiates a live deployment
- **beta deployment**: every new pull request and every subsequent push to it initiates a beta deployment

# Manual deployment

For emergency live deployments or beta & gamma deployments, the manual method can be used. The site is hosted in an S3 bucket and gets deployed via a gulp task.

## Prerequisite: authentication

To deploy the site, you must authenticate yourself against the AWS API with your AWS credentials. Get your AWS access key and secret and add them to `~/.aws/credentials`:

```
[default]
aws_access_key_id = <YOUR_ACCESS_KEY_ID>
aws_secret_access_key = <YOUR_SECRET_ACCESS_KEY>
```

This is all that is needed to authenticate with AWS if you've setup your credentials as the default profile.

If you've set them up as another profile, say `[9984]` you can grab those credentials by using the `AWS_PROFILE` variable like so:

```bash
AWS_PROFILE=9984 gulp deploy --live
```

In case that you get authentication errors or need an alternative way to authenticate with AWS, check out the [AWS documentation](http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html).

## Staging build & beta deployment

The staging build is a full production build but prevents search engine indexing & Google Analytics tracking.

```bash
# make sure your local npm packages & gems are up to date
npm update && bundle update

# make staging build in /_dist
# build preventing search engine indexing & Google Analytics tracking
gulp build --staging

# deploy contents of /_dist to beta
gulp deploy --beta
```

## Production build & live deployment

```bash
# make sure your local npm packages & gems are up to date
npm update && bundle update

# make production build in /_dist
gulp build --production

# deploy contents of /_dist to live
gulp deploy --live
```

# Coding conventions

## (S)CSS

Follows [stylelint-config-bigchaindb](https://github.com/bigchaindb/stylelint-config-bigchaindb) which itself extends [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard).

Lint with [stylelint](https://stylelint.io) in your editor or run:

```bash
npm test
```

# Authors

- Matthias Kretschmann ([@kremalicious](https://github.com/kremalicious)) - [BigchainDB](https://www.bigchaindb.com)

# License

For all code in this repository the Apache License, Version 2.0 is applied.

```
Copyright 9984 SUMMIT & 9984 HACK courtesy of IPDB and BigchainDB, 2017. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
