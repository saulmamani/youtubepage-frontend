import {globalStore} from "@/store/globalStore";

export class GlobalService {
    private static instance: GlobalService;
    public static getInstance(): GlobalService {
        return (!this.instance) ? new GlobalService() : this.instance;
    }

    private globalStore = globalStore();

    public checkLogin() {
        this.globalStore.isLogin = this.globalStore.token !== null;
    }
}