const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader = require("../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    }),
    test("Contribución Open Source, Requerimiento nuevo: Crea un endpoint nuevo que regrese toda la lista de explorers filtrados por un stack", () => {
        const explorers = [
            {"name": "Wopaa1","stacks": ["reasonML","elm"]},
            {"name": "Wopaa2","stacks": ["javascript","elixir"]}];
    
        const explorersInJs = ExplorerService.filterByStack(explorers, "javascript");
        expect(explorersInJs).toStrictEqual( [{"name": "Wopaa2","stacks": ["javascript","elixir"]}]);
    });

});
