class Performance {
    value;
    kind;

    constructor(data, kind) {
        this.value = data.value;
        this.kind = kind[data.kind];
    }
}

export default Performance