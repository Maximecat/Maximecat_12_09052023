class Performance {
    value;
    kind;

    constructor(data, value, kind) {
        this.value = data.map(value);
        this.kind = data.kind[kind];
        console.log(this.kind);
    }
}

export default Performance