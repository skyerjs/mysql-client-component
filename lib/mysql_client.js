'use strict';

const MysqlClientPool = require('mysql-client-pool');

class MysqlClientComponent extends Skyer.Component {
  constructor( name, options ) {
    super(name, options);
  }

  _getConfig() {
    const mysqlConfKey = this.options.mysql || 'mysql';

    return this.skyer.config.get(mysqlConfKey);
  }

  _build() {
    super._build();

    return new MysqlClientPool(this.config);
  }
}

module.exports = MysqlClientComponent;
