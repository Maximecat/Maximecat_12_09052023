import User from "../models/User";
import Activity from "../models/Activity";
import Session from "../models/Sessions";
import Performance from "../models/Performance";

class ApiService {
    apiAdress;

    constructor() {
        this.apiAdress = "http://localhost:3000/user/";
    }

    async getUserInformations(userId) {
        try {
            const response = await fetch(`${this.apiAdress}${userId}`)
            const { data } = await response.json()

            return new User(data);
        } catch (error) {
            return error
        }
    }

    async getUserActivities(userId) {
        try {
            const response = await fetch(`${this.apiAdress}${userId}/activity`)
            const { data } = await response.json()

            return data.sessions.map((session) => new Activity(session))
        } catch (error) {
            return error
        }
    }

    async getUserAverageSessions(userId) {
        try {
            const response = await fetch(`${this.apiAdress}${userId}/average-sessions`)
            const { data } = await response.json()

            return data.sessions.map((session) => new Session(session))
        } catch (error) {
            return error
        }
    }

    async getUserPerformances(userId) {
        try {
            const response = await fetch(`${this.apiAdress}${userId}/performance`)
            const { data } = await response.json()

            return data.data.map((perf) => new Performance(perf, data.kind));
        } catch (error) {
            return error
        }
    }
}

export default ApiService