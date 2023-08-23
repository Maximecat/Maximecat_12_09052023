import User from "../models/User";
import Activity from "../models/Activity";
import Session from "../models/Sessions";
import Performance from "../models/Performance";

class ApiService {
    apiAdress;
    isMock;

    constructor() {
        this.isMock = false;
        if (this.isMock === false) {
            this.apiAdress = "http://localhost:3000/user/";
        } else {
            this.apiAdress = "/";
        }
    }

    async getUserInformations(userId) {
        try {
            const response = await fetch(`${this.apiAdress}${this.isMock ? "index.json" : userId}`)
            const { data } = await response.json()

            return new User(data);
        } catch (error) {
            return error
        }
    }

    async getUserActivities(userId) {
        try {
            const response = await fetch(`${this.apiAdress}${this.isMock ? "activity.json" : userId + "/activity"}`)
            const { data } = await response.json()

            return data.sessions.map((session) => new Activity(session))
        } catch (error) {
            return error
        }
    }

    async getUserAverageSessions(userId) {
        try {
            const response = await fetch(`${this.apiAdress}${this.isMock ? "average-sessions.json" : userId + "/average-sessions"}`)
            const { data } = await response.json()

            return data.sessions.map((session) => new Session(session))
        } catch (error) {
            return error
        }
    }

    async getUserPerformances(userId) {
        try {
            const response = await fetch(`${this.apiAdress}${this.isMock ? "performance.json" : userId + "/performance"}`)
            const { data } = await response.json()

            return data.data
                .map((perf) => new Performance(perf, data.kind))
                .sort((perfA, perfB) => perfA.order - perfB.order);
        } catch (error) {
            return error
        }
    }
}

export default ApiService