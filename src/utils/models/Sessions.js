// Model class Session
class Session {
    day;
    sessionLength;

    constructor(data) {
        this.day = data.day;
        this.sessionLength = Number(data.sessionLength);
    }

    // Date reformaté avec initials
    get formatedDay() {
        switch (this.day) {
            case 1:
                return "L"
            case 2:
            case 3:
                return "M"
            case 4:
                return "J"
            case 5:
                return "V"
            case 6:
                return "S"
            case 7:
                return "D"
            default:
                return ""
        }
    }
}

export default Session