import { Injectable } from '@nestjs/common';
import { DynamoDB } from 'aws-sdk';
import { QueryInput, ScanInput } from 'aws-sdk/clients/dynamodb';
import { InjectAwsService } from 'nest-aws-sdk';
@Injectable()
export class DeviceService {
    constructor(@InjectAwsService(DynamoDB) private readonly dynamoDB: DynamoDB) {}

    async getOneTemperatureLogs(deviceId: string) {
        const param: QueryInput = {
            TableName: 'temperature_device',
            ProjectionExpression: 'device_id, received_at, temperature',
            KeyConditionExpression: 'device_id = :deviceId',
            ExpressionAttributeValues: {
                ':deviceId': { S: deviceId },
            },
        };
        return this.dynamoDB.query(param).promise();
    }

    async getAllTemperatureLogs() {
        const param: ScanInput = {
            TableName: 'temperature_device',
            ProjectionExpression: 'device_id, received_at, temperature',
        };
        return this.dynamoDB.scan(param).promise();
    }
}
