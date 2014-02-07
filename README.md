# PBS Kids Cat In The Hat Seuss Birthday


## Tool Kit
- jQuery
- Grunt
- Node
- Bower
- Sass


## Install
Clone the git repo

1) install the node dependancies (otherwise, Grunt won't run)
`npm install`

2) Install the bower components
`bower install`

if you get a perms error, run as root
`sudo bower --allow-root install`


## build for production
grunt

## build for stage (easier debug - concat, but not compiled)
grunt stage

## just compile styles in /app folder (doesn't copy to dist)
grunt css


## Recent Issues
NPM - package name invalid - udpated and npm install works
Bower - on my system only works as root (sudo - see above)
Grunt - Found a grunt task with a bad path for bower_components

