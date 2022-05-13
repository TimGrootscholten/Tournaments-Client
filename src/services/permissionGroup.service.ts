import {  PermissionGroupV1Client, PermissionGroupDto,  } from "../api/tournamentapiclient";

export interface IPermissionGroupService {
    deletePermissionGroup(id: string): Promise<boolean>;
    getPermissionGroups(): Promise<PermissionGroupDto[]>;
    createPermissionGroup(Permossions: PermissionGroupDto): Promise<PermissionGroupDto>;
    updatePermissionGroup(Permossion: PermissionGroupDto):  Promise<PermissionGroupDto>;

}

export class PermissionGroupService implements IPermissionGroupService {
    private permissionGroupV1Client: PermissionGroupV1Client;

    constructor() {
        this.permissionGroupV1Client = new PermissionGroupV1Client('https://localhost:7174');
    }

    deletePermissionGroup(id: string){
        return this.permissionGroupV1Client.deletePermissionGroup(id);
    }
    
    getPermissionGroups(){
        return this.permissionGroupV1Client.getPermissionGroups();
        
    }
    
    createPermissionGroup(permossions: PermissionGroupDto){
        return this.permissionGroupV1Client.createPermissionGroup(permossions);
        
    }
    
    updatePermissionGroup(permossion: PermissionGroupDto){
        return this.permissionGroupV1Client.updatePermissionGroup(permossion);

    }

}