import { Controller, Get, Post, Param, Body } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CustomRoomService } from "src/service/customRoom.service";

@ApiTags("사용자설정방정보")
@Controller("customroom")
export class CustomRoomController {
    constructor(private readonly customRoomService: CustomRoomService) {}

    @Get()
    async getAllRooms() {
        return this.customRoomService.getAllRooms();
    }

    @Get(":roomId")
    async getRoom(@Param("roomId") roomId: string) {
        return this.customRoomService.findRoom(roomId);
    }

    @Post()
    async createRoom(@Body() body) {
        const roomName = body.roomName;
        const roomDescription = body.roomDescription;
        const ownerId = body.ownerId;
        const openToPublic = body.openToPublic;
        const usePassword = body.usePassword;
        const password = body.password;
        const allowMic = body.allowMic;

        return this.customRoomService.createRoom({
            roomName,
            roomDescription,
            ownerId,
            openToPublic,
            usePassword,
            password,
            allowMic,
        });
    }

    // @Post(":roomNo/seat/:seatNo")
    // async checkVacancy(
    //     @Param("roomNo", ParseIntPipe) roomNo: number,
    //     @Param("seatNo", ParseIntPipe) seatNo: number
    // ) {
    //     return this.customRoomService.checkVacancy(roomNo, seatNo);
    // }
}