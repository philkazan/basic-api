export default class BadRequestException extends Error {
    _status: number;
    constructor(msg: string) {
        super(msg);
        this.status = 400;
    }

    get status(): number {
        return this._status;
    }

    set status(newStatus: number) {
        this._status = newStatus;
    }
}