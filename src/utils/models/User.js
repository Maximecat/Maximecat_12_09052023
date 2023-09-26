// Model class User
class User {
    firstName;
    todayScore;
    score;
    calorieCount;
    proteinCount;
    carbohydrateCount;
    lipidCount;

    constructor(data) {
        this.firstName = data.userInfos.firstName;
        this.todayScore = data.todayScore * 100;
        this.score = data.score * 100;
        this.calorieCount = data.keyData.calorieCount;
        this.proteinCount = data.keyData.proteinCount;
        this.carbohydrateCount = data.keyData.carbohydrateCount;
        this.lipidCount = data.keyData.lipidCount;
    }

    // Récupération du score, 2 clefs différentes pour y accéder : this.todayScore et this.score
    get scoreOftheDay() {
        return [
            {
                todayScore: this.todayScore || this.score
            },
            {
                todayScore: 100 - this.todayScore || 100 - this.score
            },
        ]
    }
}

export default User