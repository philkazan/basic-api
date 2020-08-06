import BadRequestException from './badRequestException';
export class Service {
    getText(txt: string) {
        if(!txt || !txt.trim()) {
            const error = new BadRequestException('Totally Legit Error');
            throw error;
        }
        return txt.trim();
    }
}