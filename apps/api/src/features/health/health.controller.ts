import { Controller, Get } from "@nestjs/common";

type HealthResponse = {
  status: "ok";
  service: "api";
};

@Controller("health")
export class HealthController {
  @Get()
  getHealth(): HealthResponse {
    return {
      service: "api",
      status: "ok",
    };
  }
}
