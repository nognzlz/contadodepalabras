export class PalabraInput {
    public valor:string;
    public t1:Date;
    public t2:Date;
    public verified:boolean;

    constructor() {
        this.valor = '';
        this.t1 = null;
        this.t2 = null;
        this.verified = false;
    }
}