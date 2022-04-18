import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ConfigurationService } from "./configuration.service";

@Module({
    exports: [ConfigurationService],
    imports: [ConfigModule.forRoot({
        envFilePath: ['.env.development.local']
    })],
    providers: [ConfigurationService]
})
export class ConfigurationModule {}