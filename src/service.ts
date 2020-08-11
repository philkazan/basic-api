import BadRequestException from './badRequestException';
export class Service {
    getText(txt: string) {
        if(!txt || !txt.trim()) {
            throw new BadRequestException('Totally Legit Error');
        }
        return txt.trim();
    }
}