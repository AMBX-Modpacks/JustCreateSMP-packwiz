// Convert KubeJS fluid format to Create's format
function FluidIngredient(fluid) {
    return {
        type: "fluid_stack",
        amount: fluid.getAmount(),
        fluid: fluid.getId().toString()
    };
}

ServerEvents.recipes(event => {
    // --- STEW RECIPE MODIFICATIONS ---
    event.remove({ id: 'minecraft:rabbit_stew_from_brown_mushroom' });
    event.remove({ id: 'minecraft:rabbit_stew_from_red_mushroom' });

    event.shapeless('minecraft:rabbit_stew', [
        'minecraft:baked_potato',
        'minecraft:cooked_rabbit',
        'minecraft:bowl',
        'minecraft:carrot',
        '#c:mushrooms'
    ]).id('kubejs:rabbit_stew');
    
    // --- BIG STEWS RECIPE MODIFICATIONS ---
    event.custom({
        type: 'create:mixing',
        ingredients: [
            { tag: "c:foods/vegetable" },
            { tag: "c:foods/vegetable" },
            { tag: "c:foods/vegetable" },
            { tag: "c:foods/vegetable" },
            Ingredient.of('minecraft:rabbit'),
            Ingredient.of('minecraft:rabbit'),
            { tag: "c:mushrooms" },
            { tag: "c:mushrooms" },
            FluidIngredient(Fluid.of('minecraft:water', 1000)),
            Ingredient.of('minecraft:bowl'),
            Ingredient.of('minecraft:bowl'),
            Ingredient.of('minecraft:bowl'),
            Ingredient.of('minecraft:bowl'),
            Ingredient.of('minecraft:bowl'),
            Ingredient.of('minecraft:bowl'),
            Ingredient.of('minecraft:bowl'),
            Ingredient.of('minecraft:bowl')
        ],
        results: [Item.of('minecraft:rabbit_stew', 8)],
        heat_requirement: 'heated'
    }).id('kubejs:mixing/rabbit_stew');
    
    event.custom({
        type: 'create:mixing',
        ingredients: [
            { tag: "c:mushrooms" },
            { tag: "c:mushrooms" },
            { tag: "c:mushrooms" },
            { tag: "c:mushrooms" },
            FluidIngredient(Fluid.of('minecraft:water', 1000)),
            Ingredient.of('minecraft:bowl'),
            Ingredient.of('minecraft:bowl'),
            Ingredient.of('minecraft:bowl'),
            Ingredient.of('minecraft:bowl'),
            Ingredient.of('minecraft:bowl'),
            Ingredient.of('minecraft:bowl'),
            Ingredient.of('minecraft:bowl'),
            Ingredient.of('minecraft:bowl')
        ],
        results: [Item.of('minecraft:mushroom_stew', 8)],
        heat_requirement: 'heated'
    }).id('kubejs:mixing/mushroom_stew');
    
    event.custom({
        type: 'create:mixing',
        ingredients: [
            Ingredient.of('minecraft:beetroot'),
            Ingredient.of('minecraft:beetroot'),
            Ingredient.of('minecraft:beetroot'),
            Ingredient.of('minecraft:beetroot'),
            Ingredient.of('minecraft:beetroot'),
            Ingredient.of('minecraft:beetroot'),
            Ingredient.of('minecraft:beetroot'),
            Ingredient.of('minecraft:beetroot'),
            Ingredient.of('minecraft:beetroot'),
            Ingredient.of('minecraft:beetroot'),
            Ingredient.of('minecraft:beetroot'),
            Ingredient.of('minecraft:beetroot'),
            Ingredient.of('minecraft:beetroot'),
            Ingredient.of('minecraft:beetroot'),
            Ingredient.of('minecraft:beetroot'),
            Ingredient.of('minecraft:beetroot'),
            Ingredient.of('minecraft:beetroot'),
            Ingredient.of('minecraft:beetroot'),
            Ingredient.of('minecraft:beetroot'),
            Ingredient.of('minecraft:beetroot'),
            Ingredient.of('minecraft:beetroot'),
            Ingredient.of('minecraft:beetroot'),
            Ingredient.of('minecraft:beetroot'),
            Ingredient.of('minecraft:beetroot'),
            Ingredient.of('minecraft:bowl'),
            Ingredient.of('minecraft:bowl'),
            Ingredient.of('minecraft:bowl'),
            Ingredient.of('minecraft:bowl'),
            Ingredient.of('minecraft:bowl'),
            Ingredient.of('minecraft:bowl'),
            Ingredient.of('minecraft:bowl'),
            Ingredient.of('minecraft:bowl')
        ],
        results: [Item.of('minecraft:beetroot_soup', 8)],
        heat_requirement: 'heated'
    }).id('kubejs:mixing/beetroot_soup');
});