import { Service } from "./service";

export class Controller {
    getText(txt: string) {
        const service = new Service();
        return service.getText(txt);
    }
}