class User {
    firstName;
    todayScore;
    calorieCount;
    proteinCount;
    carbohydrateCount;
    lipidCount;

    constructor(data) {
        this.firstName = data.userInfos.firstName;
        this.todayScore = data.todayScore;
        this.calorieCount = data.keyData.calorieCount;
        this.proteinCount = data.keyData.proteinCount;
        this.carbohydrateCount = data.keyData.carbohydrateCount;
        this.lipidCount = data.keyData.lipidCount;
    }
}

export default User