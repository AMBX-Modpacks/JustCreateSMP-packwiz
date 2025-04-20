function withChance(item, chance, count) {
    if (count == undefined) {
        count = 1;
    }
    return {
        id: item,
        count: count,
        chance: chance,
    }
}

ServerEvents.recipes(event => {
    event.replaceInput({id:'create:crafting/kinetics/item_vault'}, 'create:iron_sheet', 'create:sturdy_sheet');
    event.replaceInput({id:'create:crafting/kinetics/metal_girder'}, 'create:iron_sheet', 'create:sturdy_sheet');

    event.remove({id:'create:crafting/logistics/packager'});
    event.shaped('create:packager', [
        ' S ',
        'ICI',
        'RSR'
    ], {
        I: 'create:iron_sheet',
        S: 'create:sturdy_sheet',
        C: 'create:cardboard_block',
        R: 'minecraft:redstone'
    }).id('kubejs:crafting/logistics/packager');

    event.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of(`minecraft:crying_obsidian`)
        ],
        results: [
            Item.of(`create:powdered_obsidian`),
            withChance(`minecraft:crying_obsidian`, 0.75),
            withChance('create:experience_nugget', 0.75, 2)
        ],
        processing_time: 750
    }).id('kubejs:crushing/crying_obsidian');
});