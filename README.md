# Walkies

[![Build Status](https://travis-ci.org/UniversityOfNottingham/walkies.svg?branch=master)](https://travis-ci.org/UniversityOfNottingham/walkies)

This is a tiny electron app that displays full screen and then quits after a timeout.

We use it at UoN to randomise the route for our afternoon walk.

We run it at 3pm via a cron job on a Raspberry Pi connected to a big TV on the wall. <3

## Why do I care?

You may find it useful for randomly running a full screen electron app with a timeout.

## Why is it ugly?

We thought it would be funny.

# Running it

It's electron, so you can run it as follows:

- Download a built release for your OS from **Releases**
- Build or run from source:
    1. Have [npm 5+](https://nodejs.org)
    1. Clone the repo
    1. Choose a way to build or run:
        - Build a release for your OS
            - We use `electron-builder` to build releases, so you can too!
            - It's a local dev dependency, so `npm install`
            - [electron-builder](https://github.com/electron-userland/electron-builder)
        - Run it from a global electron install
            - `electron ./src`
        - Run it with development dependencies:
            1. `npm install`
            1. `npm start`

## Run on a schedule

Use your favourite scheduled task runner.

On Linux we do the following:

- `crontab -e`
- add cron task e.g.
    - `00 15 * * * export DISPLAY=:0 && /opt/walkies/walkies`

# Testing it

1. Have [npm 5+](https://nodejs.org)
1. Clone the repo
1. `npm install`
1. `npm test`

# Licensing

All source code herein is licensed under the MIT license, as per `LICENSE`.

## comic.ttf

- [Comic Sans Neue Bold](http://www.comicneue.com)
- This font is licensed under an [SIL Open Font License](http://scripts.sil.org/OFL)
- The following files are included with this distribution as required by the license:
    - See `SIL-License.txt` for details
    - See `OFL-FAQ.txt` for Frequently Asked Questions
    - See `FONTLOG.txt` for detailed information on the Comic Neue Font Software