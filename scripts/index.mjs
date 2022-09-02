#!/usr/bin/env node

import boxen from 'boxen';
import chalk from 'chalk';

const boxenOptions = {
  padding: 1,
  width: 58,
  title: 'Dan Ott',
  titleAlignment: 'center',
  borderStyle: 'classic',
  borderColor: '#006699',
};

const intro = chalk.bold(
  `Hey there, I'm Dan!

  I've been developing websites since '99, and have been a full-time independent developer since 2007.

  I'm also an Org Maintainer at VirtualCoffeeIO

  `
);

const links = [
  {
    name: chalk.hex('#d9376e')('Virtual Coffee'),
    url: ' https://virtualcoffee.io',
  },
  {
    name: chalk.hex('#fff').bgHex('#0f111a')('Website'),
    url: '        https://dtott.com',
  },
  {
    name: chalk.hex('#fff').bgHex('#000')('DEV.to'),
    url: '         https://dev.to/danieltott',
  },
  {
    name: chalk.hex('#fff').bgHex('#6e5494')('GitHub'),
    url: '         https://github.com/danieltott',
  },
  {
    name: chalk.hex('#fff').bgHex('#006699')('Twitter'),
    url: '        https://twitter.com/danieltott',
  },
];

const linkList = links.map((link) => `${link.name} ${link.url}`).join('\n');

console.log(boxen(intro + linkList, boxenOptions));
