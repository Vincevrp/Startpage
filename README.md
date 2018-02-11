# Startpage
[![Build Status](https://travis-ci.org/Vincevrp/Startpage.svg?branch=master)](https://travis-ci.org/Vincevrp/Startpage)
[![GitHub license](https://img.shields.io/github/license/Vincevrp/Startpage.svg)](https://github.com/Vincevrp/Startpage/blob/master/LICENSE)

Inspired by and forked from [Tilde](https://www.reddit.com/r/startpages).

![Screenshot](SCREENSHOT.PNG)

## Build

You can build the startpage using `gulp`. To install use the following commands:

```shell
# Run inside of the cloned repository
npm install -D

# If not already installed:
npm install gulp-cli -g

# Build by using gulp
gulp

```

Output can be found in the build/ directory.

## Usage

To go to a site, enter the corresponding key. To view the available sites and their keys, press `?`. If your input doesn't match any of the commands, a generic Google search will be triggered. For example:

* Entering `r` would redirect you to [www.reddit.com](https://www.reddit.com).
* Entering `t` would redirect you to [twitter.com](https://twitter.com).
* Entering `cats` would search [Google for cats](https://encrypted.google.com/search?q=cats).

On mobile, you can click the clock to focus the search input.

### Searching

You can search any of the sites by typing a colon after the site's key, followed by your search query. For example:

* Entering `g:tilde` would search [GitHub for tilde](https://github.com/search?q=tilde).
* Entering `s:radiohead` would search [SoundCloud for radiohead](https://soundcloud.com/search?q=radiohead).

### Specific Locations

You can go to a specific location on a site by typing a forward slash after the site's key, followed by the location on the site you'd like to be redirected to. For example:

* Entering `r/r/startpages` would redirect you to [www.reddit.com/r/startpages](https://www.reddit.com/r/startpages).

### URL Redirects

If you enter in a full domain or URL, you will be redirected to said domain or URL. For example:

* Entering `stallman.org` would redirect you to [stallman.org](https://stallman.org/).
* Entering `https://smile.amazon.com` would redirect you to [smile.amazon.com](https://smile.amazon.com/).

## Configuration

Core configuration can be changed in `scripts/config.js`. Style is changed in the `sass/style.scss` file. Make sure to rebuild after making changes.

## License

Feel free to use this and modify it however you like.
