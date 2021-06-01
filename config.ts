import { DynamoDB, SharedIniFileCredentials } from 'aws-sdk';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const config: MysqlConnectionOptions = {
    type: 'mysql',
    database: 'sample-db',
    username: 'root',
    password: 'tkddnjs0823',
    entities: ['dist/src/**/entities/*.entity.js'],
    synchronize: true, //production level일 때는 false
};

const AWSConfig = {
    defaultServiceOptions: {
        region: 'ap-northeast-2',
        credentials: new SharedIniFileCredentials({
            profile: 'terraform',
        }),
    },
    services: [DynamoDB], //사용하는 AWS 서비스 넣으면 됨
};

export { config, AWSConfig };
