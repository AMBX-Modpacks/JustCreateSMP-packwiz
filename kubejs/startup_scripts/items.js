StartupEvents.registry('item', event => {
    // Cookie Dough
    event.create('cookie_dough')
        .displayName('Cookie Dough')
        .texture('kubejs:item/cookie_dough');

    // Cake Batter
    event.create('cake_batter')
        .displayName('Cake Batter')
        .texture('kubejs:item/cake_batter');

    // Cake Base
    event.create('cake_base')
        .displayName('Unfinished Cake')
        .texture('kubejs:item/cake_base');

    // Pie Base
    event.create('pumpkin_pie_base')
        .displayName('Unbaked Pumpkin Pie')
        .texture('kubejs:item/pumpkin_pie_base');
});

StartupEvents.modifyCreativeTab('create:base', event => {
    event.add(['kubejs:cookie_dough']);
    event.add(['kubejs:cake_batter', 'kubejs:cake_base']);
    event.add(['kubejs:pumpkin_pie_base']);
});

StartupEvents.modifyCreativeTab('kubejs:tab', event => {
    event.remove('kubejs:cookie_dough');;
    event.remove('kubejs:cake_batter');;
    event.remove('kubejs:cake_base');;
    event.remove('kubejs:pumpkin_pie_base');;
});
