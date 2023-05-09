class Activity {
    day;
    kilogram;
    calories;

    constructor(data) {
        // Méthode de récupération du jour à changer //
        this.day = data.sessions.day;
        this.kilogram = data.sessions.kilogram;
        this.calories = data.sessions.calories;
    }
}

export default Activity