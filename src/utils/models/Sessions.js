class Sessions {
    day;
    sessionLength;

    constructor(data) {
        // Méthode de récupération du jour à changer //
        this.day = data.sessions.day;
        this.kilogram = data.sessions.sessionLength;
    }
}

export default Sessions