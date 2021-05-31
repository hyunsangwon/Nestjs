import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const config: MysqlConnectionOptions = {
    type: 'mysql',
    database: 'sample-db',
    username: 'root',
    password: 'tkddnjs0823',
    entities: ['dist/src/**/entities/*.entity.js'],
    synchronize: true, //production level일 때는 false
};

export default config;
