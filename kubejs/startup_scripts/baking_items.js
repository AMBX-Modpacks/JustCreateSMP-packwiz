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
    // Add items in reverse
    event.addAfter('create:dough', 'kubejs:pumpkin_pie_base');
    event.addAfter('create:dough', 'kubejs:cake_base');
    event.addAfter('create:dough', 'kubejs:cake_batter');
    event.addAfter('create:dough', 'kubejs:cookie_dough');
});

StartupEvents.modifyCreativeTab('kubejs:tab', event => {
    event.remove('kubejs:cookie_dough');;
    event.remove('kubejs:cake_batter');;
    event.remove('kubejs:cake_base');;
    event.remove('kubejs:pumpkin_pie_base');;
});
