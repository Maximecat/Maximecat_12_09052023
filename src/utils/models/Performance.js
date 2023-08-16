class Performance {
    value;
    kind;

    constructor(data, kind) {
        this.value = data.value;
        this.kind = this.translateKind(kind[data.kind]);
    }

    translateKind(kind) {
        switch (kind) {
            case 'intensity':

                return 'Intensité';

            case 'speed':

                return 'Vitesse';

            case 'strength':

                return 'Force';

            case 'endurance':

                return 'Endurance';

            case 'energy':

                return 'Energie';

            case 'cardio':

                return 'Cardio';

            default:
                break;
        }
    }
}

export default Performance