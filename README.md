# skyer-mysql-client-component

[![npm version](https://badge.fury.io/js/skyer-mysql-client-component.svg)](https://badge.fury.io/js/skyer-mysql-client-component)

> Skyer mysql client component.

## Install

[![NPM](https://nodei.co/npm/skyer-mysql-client-component.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/skyer-mysql-client-component/)

```bash
$ npm i --save skyer-mysql-client-component
```

## Register

/app/components/mysql_client.component.js

```js
module.exports = require('skyer-mysql-client-component');
```

## Usage

```js
const mysqlClient = skyer.componentManager.getComponent('mysqlClient');

const sql = 'SELECT * FROM users WHERE is_vip=1 limit 0,20;';
const results = yield mysqlClient.query(sql);
const users = results[0];
```

## Options

See `mysql` connection options (https://www.npmjs.com/package/mysql#connection-options)

## Licences

[MIT](LICENSE)