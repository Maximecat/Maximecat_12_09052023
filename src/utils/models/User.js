// Model class User
class User {
    firstName;
    score;
    calorieCount;
    proteinCount;
    carbohydrateCount;
    lipidCount;

    constructor(data) {
        this.firstName = data.userInfos.firstName;
        this.score = data.score * 100 || data.todayScore * 100;
        this.calorieCount = data.keyData.calorieCount;
        this.proteinCount = data.keyData.proteinCount;
        this.carbohydrateCount = data.keyData.carbohydrateCount;
        this.lipidCount = data.keyData.lipidCount;
    }

    // Récupération du score
    get scoreOftheDay() {
        return [
            {
                score: this.score
            },
            {
                score: 100 - this.score
            },
        ]
    }
}

export default User