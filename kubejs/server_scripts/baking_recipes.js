// Convert KubeJS fluid format to Create's format
function FluidIngredient(fluid) {
    return {
        type: "fluid_stack",
        amount: fluid.getAmount(),
        fluid: fluid.getId().toString()
    };
}

ServerEvents.recipes(event => {
    // --- BREAD RECIPE MODIFICATIONS ---
    event.remove({ id: 'minecraft:bread' });
    event.remove({ id: 'create:smelting/bread' });
    event.remove({ id: 'create:campfire_cooking/bread' });
    
    event.remove({ id: 'create:smoking/bread' });

    event.smoking('minecraft:bread', 'create:dough').id('kubejs:smoking/bread').xp(0.35);

    // --- COOKIE RECIPE MODIFICATIONS ---
    event.remove({ id: 'minecraft:cookie' });
    
    // New multi-step cookie recipe (Create-style)
    // Step 1: Create cookie dough
    event.shapeless('4x kubejs:cookie_dough', [
        'create:wheat_flour',
        'minecraft:water_bucket',
        'minecraft:cocoa_beans',
        'minecraft:egg'
    ]).id('kubejs:cookie_dough').replaceIngredient('minecraft:water_bucket', 'minecraft:bucket');

    // Alternate Create Mixing Recipe (Fluid version)
    event.custom({
        type: 'create:mixing',
        ingredients: [
            Ingredient.of('create:wheat_flour'),
            Ingredient.of('minecraft:cocoa_beans'),
            Ingredient.of('minecraft:egg'),
            FluidIngredient(Fluid.of('minecraft:water', 500))
        ],
        results: [Item.of('kubejs:cookie_dough', 4)],
        heat_requirement: 'heated'
    }).id('kubejs:mixing/cookie_dough');
    
    // Step 2: Bake in smoker
    event.smoking('minecraft:cookie', 'kubejs:cookie_dough').id('kubejs:smoking/cookies').xp(0.175);
    
    
    // --- CAKE RECIPE MODIFICATIONS ---
    event.remove({ id: 'minecraft:cake' });
    event.remove({ id: 'create:crafting/curiosities/cake' });
    
    // New multi-step cake recipe (Create-style)
    // Step 1: Create batter
    event.shaped('kubejs:cake_batter', [
        ' M ',
        'SES',
        'WWW'
    ], {
        W: 'create:wheat_flour',
        M: 'minecraft:milk_bucket',
        S: 'minecraft:sugar',
        E: 'minecraft:egg'
    }).id('kubejs:cake_batter').replaceIngredient('minecraft:milk_bucket', 'minecraft:bucket');

    // Alternate Create Mixing Recipe (Fluid version)
    event.custom({
        type: 'create:mixing',
        ingredients: [
            Ingredient.of('create:wheat_flour'),
            Ingredient.of('create:wheat_flour'),
            Ingredient.of('create:wheat_flour'),
            Ingredient.of('minecraft:sugar'),
            Ingredient.of('minecraft:sugar'),
            Ingredient.of('minecraft:egg'),
            FluidIngredient(Fluid.of('minecraft:milk', 1000))
        ],
        results: [Item.of('kubejs:cake_batter')],
        heat_requirement: 'none'
    }).id('kubejs:mixing/cake_batter');
    
    // Step 2: Bake in smoker
    event.smoking('kubejs:cake_base', 'kubejs:cake_batter').id('kubejs:smoking/cake').xp(0.7);
    
    // Step 3: Decorate cake base
    event.shaped('minecraft:cake', [
        'BBB',
        ' D '
    ], {
        B: 'minecraft:sweet_berries',
        D: 'kubejs:cake_base'
    }).id('kubejs:cake');

    // --- PUMPKIN PIE RECIPE MODIFICATIONS ---
    event.remove({ id: 'minecraft:pumpkin_pie' });

    // Step 1: Create pumpkin pie base (shapeless version)
    event.shapeless('kubejs:pumpkin_pie_base', [
        'create:dough',
        'minecraft:pumpkin',
        'minecraft:sugar',
        'minecraft:egg',
        'minecraft:milk_bucket'
    ]).id('kubejs:pumpkin_pie_base_shapeless').replaceIngredient('minecraft:milk_bucket', 'minecraft:bucket');

    // Alternate Create Mixing Recipe (Fluid version)
    event.custom({
        type: 'create:mixing',
        ingredients: [
            Ingredient.of('create:dough'),
            Ingredient.of('minecraft:pumpkin'),
            Ingredient.of('minecraft:sugar'),
            Ingredient.of('minecraft:egg'),
            FluidIngredient(Fluid.of('minecraft:milk', 1000))
        ],
        results: [Item.of('kubejs:pumpkin_pie_base')],
        heat_requirement: 'none'
    }).id('kubejs:mixing/pumpkin_pie_base');

    // Step 2: Bake in smoker
    event.smoking('4x minecraft:pumpkin_pie', 'kubejs:pumpkin_pie_base').id('kubejs:smoking/pumpkin_pie').xp(0.7);
});
