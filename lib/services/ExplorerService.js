class ExplorerService {

    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        return explorersByMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        const explorersUsernames = explorersByMission.map((explorer) => explorer.githubUsername);
        return explorersUsernames;
    }

    static getExplorersByStack(explorers,stack){
        const explorersByStack1 = ExplorerService.filterByStack(explorers, stack);
        const explorersUserNamesByStack = explorersByStack1.map((explorer) => explorer.githubUsername);
        return explorersUserNamesByStack;
    }

    static filterByStack(explorers,stack){
        const explorersByStack0 = explorers.filter((explorer) => explorer.stacks[0] === stack);
        return explorersByStack0;
    } 

}

module.exports = ExplorerService;
