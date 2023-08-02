class Activity {
    date;
    kilogram;
    calories;

    constructor(data) {
        this.date = new Date(data.day);
        this.kilogram = Number(data.kilogram);
        this.calories = Number(data.calories);
    }

    get day() {
        return this.date.getDate()
    }
}

export default Activity