import User from "../models/User";
import Activity from "../models/Activity";
import Session from "../models/Sessions";
import Performance from "../models/Performance";

// Class de récuparation des datas
class ApiService {
    apiAdress;
    isMock;

    // Mock datas
    constructor() {
        this.isMock = false;
        if (this.isMock === false) {
            this.apiAdress = "http://localhost:3000/user/";
        } else {
            this.apiAdress = "/";
        }
    }

    // Récupération informations utilisateurs
    async getUserInformations(userId) {
        const response = await fetch(`${this.apiAdress}${this.isMock ? "index.json" : userId}`)
        const { data } = await response.json()

        return new User(data);
    }

    // Récupération des informations sur les activités des utilisateurs
    async getUserActivities(userId) {
        const response = await fetch(`${this.apiAdress}${this.isMock ? "activity.json" : userId + "/activity"}`)
        const { data } = await response.json()

        return data.sessions.map((session) => new Activity(session))
    }

    // Récupération des informations sur les sessions moyennes des utilisateurs
    async getUserAverageSessions(userId) {
        const response = await fetch(`${this.apiAdress}${this.isMock ? "average-sessions.json" : userId + "/average-sessions"}`)
        const { data } = await response.json()

        return data.sessions.map((session) => new Session(session))
    }

    // Récupération des informations sur les performances des utilisateurs
    async getUserPerformances(userId) {
        const response = await fetch(`${this.apiAdress}${this.isMock ? "performance.json" : userId + "/performance"}`)
        const { data } = await response.json()

        return data.data
            .map((perf) => new Performance(perf, data.kind))
            .sort((perfA, perfB) => perfA.order - perfB.order);
    }
}

export default ApiService