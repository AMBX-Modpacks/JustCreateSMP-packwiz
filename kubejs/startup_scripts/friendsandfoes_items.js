StartupEvents.modifyCreativeTab('minecraft:natural_blocks', event => {
    event.remove('friendsandfoes:buttercup');
    event.remove('friendsandfoes:crab_egg');

    event.addAfter('minecraft:wither_rose', 'friendsandfoes:buttercup');
    event.addAfter('minecraft:turtle_egg', 'friendsandfoes:crab_egg');
});

StartupEvents.modifyCreativeTab('minecraft:ingredients', event => {
    event.remove('friendsandfoes:crab_claw');
    event.remove('friendsandfoes:wildfire_crown_fragment');

    event.addAfter('minecraft:turtle_helmet', 'friendsandfoes:crab_claw');
    event.addAfter('minecraft:blaze_rod', 'friendsandfoes:wildfire_crown_fragment');
});

StartupEvents.modifyCreativeTab('minecraft:combat', event => {
    event.remove('friendsandfoes:wildfire_crown');
    event.remove('friendsandfoes:totem_of_freezing');
    event.remove('friendsandfoes:totem_of_illusion');

    event.addAfter('minecraft:turtle_helmet', 'friendsandfoes:wildfire_crown');
    event.addAfter('minecraft:totem_of_undying', 'friendsandfoes:totem_of_illusion');
    event.addAfter('minecraft:totem_of_undying', 'friendsandfoes:totem_of_freezing');
});

StartupEvents.modifyCreativeTab('minecraft:functional_blocks', event => {
    event.remove('friendsandfoes:spruce_beehive');
    event.remove('friendsandfoes:birch_beehive');
    event.remove('friendsandfoes:jungle_beehive');
    event.remove('friendsandfoes:acacia_beehive');
    event.remove('friendsandfoes:dark_oak_beehive');
    event.remove('friendsandfoes:mangrove_beehive');
    event.remove('friendsandfoes:cherry_beehive');
    event.remove('friendsandfoes:bamboo_beehive');
    event.remove('friendsandfoes:crimson_beehive');
    event.remove('friendsandfoes:warped_beehive');

    // Add items in reverse
    event.addAfter('minecraft:beehive', 'friendsandfoes:warped_beehive');
    event.addAfter('minecraft:beehive', 'friendsandfoes:crimson_beehive');
    event.addAfter('minecraft:beehive', 'friendsandfoes:bamboo_beehive');
    event.addAfter('minecraft:beehive', 'friendsandfoes:cherry_beehive');
    event.addAfter('minecraft:beehive', 'friendsandfoes:mangrove_beehive');
    event.addAfter('minecraft:beehive', 'friendsandfoes:dark_oak_beehive');
    event.addAfter('minecraft:beehive', 'friendsandfoes:acacia_beehive');
    event.addAfter('minecraft:beehive', 'friendsandfoes:jungle_beehive');
    event.addAfter('minecraft:beehive', 'friendsandfoes:birch_beehive');
    event.addAfter('minecraft:beehive', 'friendsandfoes:spruce_beehive');
});

StartupEvents.modifyCreativeTab('minecraft:redstone_blocks', event => {
    event.remove('friendsandfoes:copper_button');
    event.remove('friendsandfoes:exposed_copper_button');
    event.remove('friendsandfoes:weathered_copper_button');
    event.remove('friendsandfoes:oxidized_copper_button');
    event.remove('friendsandfoes:waxed_copper_button');
    event.remove('friendsandfoes:waxed_exposed_copper_button');
    event.remove('friendsandfoes:waxed_weathered_copper_button');
    event.remove('friendsandfoes:waxed_oxidized_copper_button');

    event.remove('friendsandfoes:exposed_lightning_rod');
    event.remove('friendsandfoes:weathered_lightning_rod');
    event.remove('friendsandfoes:oxidized_lightning_rod');
    event.remove('friendsandfoes:waxed_lightning_rod');
    event.remove('friendsandfoes:waxed_exposed_lightning_rod');
    event.remove('friendsandfoes:waxed_weathered_lightning_rod');
    event.remove('friendsandfoes:waxed_oxidized_lightning_rod');

    // Add items in reverse
    event.addAfter('minecraft:stone_button', 'friendsandfoes:waxed_oxidized_copper_button');
    event.addAfter('minecraft:stone_button', 'friendsandfoes:waxed_weathered_copper_button');
    event.addAfter('minecraft:stone_button', 'friendsandfoes:waxed_exposed_copper_button');
    event.addAfter('minecraft:stone_button', 'friendsandfoes:waxed_copper_button');
    event.addAfter('minecraft:stone_button', 'friendsandfoes:oxidized_copper_button');
    event.addAfter('minecraft:stone_button', 'friendsandfoes:weathered_copper_button');
    event.addAfter('minecraft:stone_button', 'friendsandfoes:exposed_copper_button');
    event.addAfter('minecraft:stone_button', 'friendsandfoes:copper_button');

    event.addAfter('minecraft:lightning_rod', 'friendsandfoes:waxed_oxidized_lightning_rod');
    event.addAfter('minecraft:lightning_rod', 'friendsandfoes:waxed_weathered_lightning_rod');
    event.addAfter('minecraft:lightning_rod', 'friendsandfoes:waxed_exposed_lightning_rod');
    event.addAfter('minecraft:lightning_rod', 'friendsandfoes:waxed_lightning_rod');
    event.addAfter('minecraft:lightning_rod', 'friendsandfoes:oxidized_lightning_rod');
    event.addAfter('minecraft:lightning_rod', 'friendsandfoes:weathered_lightning_rod');
    event.addAfter('minecraft:lightning_rod', 'friendsandfoes:exposed_lightning_rod');
});

StartupEvents.modifyCreativeTab('friendsandfoes:main_tab', event => {
    event.remove('friendsandfoes:buttercup');
    event.remove('friendsandfoes:crab_egg');

    event.remove('friendsandfoes:crab_claw');
    event.remove('friendsandfoes:wildfire_crown_fragment');

    event.remove('friendsandfoes:wildfire_crown');
    event.remove('friendsandfoes:totem_of_freezing');
    event.remove('friendsandfoes:totem_of_illusion');

    event.remove('friendsandfoes:spruce_beehive');
    event.remove('friendsandfoes:birch_beehive');
    event.remove('friendsandfoes:jungle_beehive');
    event.remove('friendsandfoes:acacia_beehive');
    event.remove('friendsandfoes:dark_oak_beehive');
    event.remove('friendsandfoes:mangrove_beehive');
    event.remove('friendsandfoes:cherry_beehive');
    event.remove('friendsandfoes:bamboo_beehive');
    event.remove('friendsandfoes:crimson_beehive');
    event.remove('friendsandfoes:warped_beehive');

    event.remove('friendsandfoes:copper_button');
    event.remove('friendsandfoes:exposed_copper_button');
    event.remove('friendsandfoes:weathered_copper_button');
    event.remove('friendsandfoes:oxidized_copper_button');
    event.remove('friendsandfoes:waxed_copper_button');
    event.remove('friendsandfoes:waxed_exposed_copper_button');
    event.remove('friendsandfoes:waxed_weathered_copper_button');
    event.remove('friendsandfoes:waxed_oxidized_copper_button');

    event.remove('friendsandfoes:exposed_lightning_rod');
    event.remove('friendsandfoes:weathered_lightning_rod');
    event.remove('friendsandfoes:oxidized_lightning_rod');
    event.remove('friendsandfoes:waxed_lightning_rod');
    event.remove('friendsandfoes:waxed_exposed_lightning_rod');
    event.remove('friendsandfoes:waxed_weathered_lightning_rod');
    event.remove('friendsandfoes:waxed_oxidized_lightning_rod');

    event.remove('friendsandfoes:copper_golem_spawn_egg');
    event.remove('friendsandfoes:crab_spawn_egg');
    event.remove('friendsandfoes:glare_spawn_egg');
    event.remove('friendsandfoes:iceologer_spawn_egg');
    event.remove('friendsandfoes:illusioner_spawn_egg');
    event.remove('friendsandfoes:mauler_spawn_egg');
    event.remove('friendsandfoes:moobloom_spawn_egg');
    event.remove('friendsandfoes:rascal_spawn_egg');
    event.remove('friendsandfoes:tuff_golem_spawn_egg');
    event.remove('friendsandfoes:wildfire_spawn_egg');
});
