class Performance {
    value;
    kind;
    order;

    constructor(data, kind) {
        this.value = data.value;
        this.kind = this.translateKind(kind[data.kind]);
    }

    translateKind(kind) {
        switch (kind) {
            case 'intensity':
                this.order = 1
                return 'Intensité';
            case 'speed':
                this.order = 2
                return 'Vitesse';
            case 'strength':
                this.order = 3
                return 'Force';
            case 'endurance':
                this.order = 4
                return 'Endurance';
            case 'energy':
                this.order = 5
                return 'Energie';
            case 'cardio':
                this.order = 6
                return 'Cardio';
            default:
                break;
        }
    }
}

export default Performance