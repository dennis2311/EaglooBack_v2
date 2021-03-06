import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { SocketIoAdapter } from "./adapter";
import { AppModule } from "./module/app.module";
import { setCustomRoom } from "./beforeInit";

async function bootstrap() {
    await setCustomRoom();
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.enableCors({
        credentials: true,
    });
    app.setGlobalPrefix("/api");
    // 소켓 어댑터 등록
    app.useWebSocketAdapter(new SocketIoAdapter(app, true));
    app.enableCors({
        credentials: true,
    });

    await app.listen(process.env.PORT || 5000);
}

bootstrap();
