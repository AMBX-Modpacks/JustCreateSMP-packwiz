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
    // List of metals to process
    const metals = [
        { name: 'iron', mod: 'minecraft', smelting_exp: 0.7, fan_washed_specials: withChance('minecraft:redstone', 0.75) },
        { name: 'gold', mod: 'minecraft', smelting_exp: 1.0, fan_washed_specials: withChance('minecraft:quartz', 0.5) },
        { name: 'copper', mod: 'minecraft', smelting_exp: 0.7, fan_washed_specials: withChance('minecraft:clay_ball', 0.5) },
        { name: 'zinc', mod: 'create', smelting_exp: 0.7, fan_washed_specials: withChance('minecraft:gunpowder', 0.25) }
    ];

    // Remove original recipes and create new ones
    metals.forEach(metal => {
        const { name, mod, smelting_exp } = metal;
        const nuggetModPrefix = (name === 'copper' || name === 'zinc') ? 'create' : 'minecraft';

        // Remove existing furnace/blast furnace recipes
        event.remove({ input: `${mod}:${name}_ore`, type: 'minecraft:smelting' });
        event.remove({ input: `${mod}:deepslate_${name}_ore`, type: 'minecraft:smelting' });
        event.remove({ input: `${mod}:raw_${name}`, type: 'minecraft:smelting' });
        event.remove({ input: `create:crushed_raw_${name}`, type: 'minecraft:smelting' });
        
        event.remove({ input: `${mod}:${name}_ore`, type: 'minecraft:blasting' });
        event.remove({ input: `${mod}:deepslate_${name}_ore`, type: 'minecraft:blasting' });
        event.remove({ input: `${mod}:raw_${name}`, type: 'minecraft:blasting' });
        event.remove({ input: `create:crushed_raw_${name}`, type: 'minecraft:blasting' });

        // Add new smelting recipes
        event.smelting(`${nuggetModPrefix}:${name}_nugget`, `${mod}:${name}_ore`).xp(smelting_exp)
            .id(`kubejs:smelting/${name}_ore_to_nugget`);
        event.smelting(`${nuggetModPrefix}:${name}_nugget`, `${mod}:deepslate_${name}_ore`).xp(smelting_exp)
            .id(`kubejs:smelting/deepslate_${name}_ore_to_nugget`);
        event.smelting(`${nuggetModPrefix}:${name}_nugget`, `${mod}:raw_${name}`).xp(smelting_exp)
            .id(`kubejs:smelting/raw_${name}_to_nugget`);
        event.smelting(`${nuggetModPrefix}:${name}_nugget`, `create:crushed_raw_${name}`).xp(smelting_exp)
            .id(`kubejs:smelting/crushed_raw_${name}_to_nugget`);

        // Add blasting versions
        event.blasting(`${nuggetModPrefix}:${name}_nugget`, `${mod}:${name}_ore`).xp(smelting_exp)
            .id(`kubejs:blasting/${name}_ore_to_nugget`);
        event.blasting(`${nuggetModPrefix}:${name}_nugget`, `${mod}:deepslate_${name}_ore`).xp(smelting_exp)
            .id(`kubejs:blasting/deepslate_${name}_ore_to_nugget`);
        event.blasting(`${nuggetModPrefix}:${name}_nugget`, `${mod}:raw_${name}`).xp(smelting_exp)
            .id(`kubejs:blasting/raw_${name}_to_nugget`);
        event.blasting(`${nuggetModPrefix}:${name}_nugget`, `create:crushed_raw_${name}`).xp(smelting_exp)
            .id(`kubejs:blasting/crushed_raw_${name}_to_nugget`);

        // Raw Metal Block processing
        event.blasting(`${mod}:${name}_ingot`, `${mod}:raw_${name}_block`).xp(smelting_exp * 2)
            .id(`kubejs:blasting/raw_${name}_block_to_ingot`);

        if (name === 'gold') {
            // Special case for Nether Gold Ore
            event.remove({ input: `${mod}:nether_${name}_ore`, type: 'minecraft:smelting' });
            event.remove({ input: `${mod}:nether_${name}_ore`, type: 'minecraft:blasting' });
            event.smelting(`2x ${nuggetModPrefix}:${name}_nugget`, `${mod}:nether_${name}_ore`).xp(smelting_exp * 2)
                .id(`kubejs:smelting/nether_${name}_ore_to_nugget`);
            event.blasting(`2x ${nuggetModPrefix}:${name}_nugget`, `${mod}:nether_${name}_ore`).xp(smelting_exp * 2)
                .id(`kubejs:blasting/nether_${name}_ore_to_nugget`);
        }

        // Crushing Recipes
        event.remove({ input: `${mod}:raw_${name}`, type: 'create:crushing' });

        event.custom({
            type: 'create:crushing',
            ingredients: [
                Ingredient.of(`${mod}:raw_${name}`)
            ],
            results: [
                Item.of(`create:crushed_raw_${name}`),
                withChance(`create:crushed_raw_${name}`, 0.75),
                withChance('create:experience_nugget', 0.75)
            ],
            processing_time: 400
        }).id(`kubejs:crushing/raw_${name}_to_nugget`);

        // Fan Washing Recipes
        event.remove({ id: `create:splashing/crushed_raw_${name}`, type: 'create:splashing' });

        event.custom({
            type: 'create:splashing',
            ingredients: [
                Ingredient.of(`${mod}:crushed_raw_${name}`)
            ],
            results: [
                withChance(`${nuggetModPrefix}:${name}_nugget`, 0.5),
                metal.fan_washed_specials
            ],
            processing_time: 400
        }).id(`kubejs:splashing/crushed_raw_${name}_to_nugget`);
    });
    
    // Special fix for Crushing Ore with incorrect amounts
    const crushing_metals_with_errors = [
        { name: 'copper', mod: 'minecraft' }
    ];

    crushing_metals_with_errors.forEach(metal => {
        const { name, mod } = metal;

        event.remove({ id: `create:crushing/${name}_ore`, type: 'create:crushing' });
        event.remove({ id: `create:crushing/deepslate_${name}_ore`, type: 'create:crushing' });
        
        event.custom({
            type: 'create:crushing',
            ingredients: [
                Ingredient.of(`${mod}:${name}_ore`)
            ],
            results: [
                Item.of(`create:crushed_raw_${name}`),
                withChance(`create:crushed_raw_${name}`, 0.25),
                withChance('create:experience_nugget', 0.75),
                withChance('minecraft:cobblestone', 0.125)
            ],
            processing_time: 250
        }).id(`kubejs:crushing/${name}_ore`);
        
        event.custom({
            type: 'create:crushing',
            ingredients: [
                Ingredient.of(`${mod}:deepslate_${name}_ore`)
            ],
            results: [
                Item.of(`create:crushed_raw_${name}`, 2),
                withChance(`create:crushed_raw_${name}`, 0.25),
                withChance('create:experience_nugget', 0.75),
                withChance('minecraft:cobbled_deepslate', 0.125)
            ],
            processing_time: 350
        }).id(`kubejs:crushing/deepslate_${name}_ore`);
    });

    // Modify Brass recipes
    event.remove({ id: 'create:mixing/brass_ingot', type: 'create:mixing' });
    event.custom({
        type: 'create:mixing',
        ingredients: [
            { tag: 'c:nuggets/copper' },
            { tag: 'c:nuggets/copper' },
            { tag: 'c:nuggets/zinc' },
            { tag: 'c:nuggets/copper' },
            { tag: 'c:nuggets/copper' },
            { tag: 'c:nuggets/zinc' },
            { tag: 'c:nuggets/copper' },
            { tag: 'c:nuggets/copper' },
            { tag: 'c:nuggets/zinc' }
        ],
        results: [Item.of('create:brass_ingot')],
        heat_requirement: 'superheated'
    }).id('kubejs:mixing/brass_ingot_from_nuggets');
});