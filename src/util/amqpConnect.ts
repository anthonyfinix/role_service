import amqplib, { Channel, Connection, ConsumeMessage, Message } from 'amqplib';
import createUser from '../consumers/createUser';

export enum amqplibQueues {
    ROLE = "ROLE"
}
export enum userActions {
    ROLE_CREATION = "ROLE_CREATION"
}

export interface IAmqpLibConnect {
    url: string;
    channel: Channel;
    connection: Connection;
}
export class AmqpLibConnect implements IAmqpLibConnect {
    declare url: string;
    declare channel: Channel;
    declare connection: Connection;
    declare userChannel: any;
    async connect(url: string) { this.connection = await amqplib.connect(url) }
    async createChannel() { this.channel = await this.connection.createChannel() }
    async createUserQueue() { this.userChannel = await this.channel.assertQueue(amqplibQueues.ROLE) }
}
let amqplibInstance = new AmqpLibConnect();

export default amqplibInstance;

export const consumerInit = () => {
    amqplibInstance.channel.consume(amqplibQueues.ROLE, createUser)
}