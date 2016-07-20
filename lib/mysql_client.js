'use strict';

class MysqlClientComponent extends Skyer.Component {
  constructor( name, options ) {
    super(name, options);
  }

  _defaultOptions() {
    return {
      config_key: 'mysql',
      connection: {
        name: 'skyer:mysql',
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'skyer',
        charset: 'utf8',

        debug: ['OkPacket', 'ComQueryPacket'],
        log: true
      }
    };
  }

  _getConfig() {
    const confKey = this.options.config_key;
    const connection = this.skyer.config.get(confKey) || {};

    return Skyer._.extend(this.options.connection, connection);
  }

  _build() {
    super._build();

    const MysqlClientPool = require('mysql-client-pool');

    return new MysqlClientPool(this.config);
  }
}

module.exports = MysqlClientComponent;
