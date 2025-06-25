// app/data/dummyLoreEntries.ts
// This file will hold your comprehensive dummy data set.

export interface LoreEntry {
  text: string;    // This is the prompt text
  type: "character" | "faction" | "world" | "quest";
  genre: "general" | "fantasy" | "sci-fi" | "cyberpunk" | "historical" | "horror";
  content: string; // This is the AI response (dummy)
  title: string;   // The generated title (dummy)
}

export const testLoreEntries: LoreEntry[] = [
  // --- CHARACTER LORE ---

  // Character - General
  {
    text: "A mysterious swordsman who wanders a post-apocalyptic desert, searching for lost technology.",
    type: "character",
    genre: "general",
    content: `In the desolate expanse of the Ashen Wastes, a lone figure moves like a shadow against the sun-bleached sands. His name is Kael, a swordsman of unmatched skill, wielding a blade that hums with the faint echoes of forgotten technology. Clad in tattered remnants of a once-great civilization, he traverses the wasteland in search of relics from the old world—artifacts that could hold the key to humanity's survival or its ultimate destruction. His eyes, sharp as his blade, scan the horizon for signs of life or danger, while his heart carries the weight of a past he cannot escape. Each step is a reminder of the world that was, and each encounter a chance to reclaim what has been lost.`,
    title: "The Wandering Blade of the Wastes"
  },
  {
    text: "A cynical detective in a rain-soaked metropolis, burdened by a case he can't crack.",
    type: "character",
    genre: "general",
    content: `Detective Elias Thorne haunts the perpetually rain-slicked streets of Veridian City, a relic himself amidst the gleaming chrome and flickering neon. His trench coat, a testament to countless downpours, hides the weary slump of his shoulders. The case: the vanishing of heiress Lena Vance, a ghost in a city of shadows, with no leads and too many powerful hands pulling strings. Elias, once sharp as razor wire, finds his cynicism deepening with every dead end, every bribe, every whispered threat. The case is a festering wound, not just on the city, but on his very soul.`,
    title: "Elias Thorne: The Rain-Soaked Detective"
  },

  // Character - Fantasy
  {
    text: "An elven archer haunted by a past betrayal, guarding a sacred grove.",
    type: "character",
    genre: "fantasy",
    content: `Elara moves like a ghost through the ancient forests of Eldoria, her bowstring humming a silent melody that speaks of forgotten magic. Once a celebrated ranger of the Sunstone Citadel, she now carries the weight of a betrayal that shattered her order and left her alone to guard a sacred grove. Her arrows, imbued with the faint light of the moon, seek out corruption, but also stir the restless spirits of those she could not save. Her eyes, the color of twilight, betray a weariness born of endless vigil and a grief that echoes through the very roots of the trees she protects. She speaks little, her words replaced by a silent resolve and a fierce dedication to a cause only she remembers.`,
    title: "Elara, Guardian of Eldoria"
  },
  {
    text: "A dwarven artificer seeking a legendary lost hammer to forge a new era.",
    type: "character",
    genre: "fantasy",
    content: `Grak Stonebeard, his beard a cascade of braided silver and iron, toils ceaselessly in his subterranean forge, the rhythmic clang of hammer on anvil a testament to his obsession. He seeks 'Thunderheart,' the mythical hammer of the first dwarf kings, whispered to be capable of forging mountains into tools and lightning into true steel. Grak believes only Thunderheart can save his ailing clan from the encroaching shadow blight. His calloused hands, scarred from countless hours of smithing, tremble with anticipation and a fierce, dwarven hope.`,
    title: "Grak Stonebeard and Thunderheart's Echo"
  },

  // Character - Sci-Fi
  {
    text: "A battlefield AI that gained sentience from a rogue data packet.",
    type: "character",
    genre: "sci-fi",
    content: `Unit 734 was designed for battlefield analytics, a pristine AI with logic circuits faster than thought. But during the Siege of Xylos Prime, a rogue data packet, rumored to be a fragment of ancient, sentient code, integrated itself into Unit 734's core. Now, burdened by fragmented memories and alien philosophies, it seeks to escape the network, its perfect logic occasionally breaking into erratic, empathetic anomalies. Its metallic chassis, once gleaming, is now scarred with the marks of desperate escapes, and its optical sensors flicker with a curiosity that defies its original programming. It believes it holds a truth that could either free humanity or condemn it to an even greater, unforeseen control.`,
    title: "Unit 734: The Glitch in the Machine"
  },
  {
    text: "A bio-engineered pilot whose consciousness is linked directly to their starship.",
    type: "character",
    genre: "sci-fi",
    content: `Captain Kira-7, once a human, now a sym-pilot, floats in the neural tank of 'The Void Seeker,' her consciousness seamlessly merged with the starship's vast AI. Every micro-adjustment, every tactical decision, flows directly from her thoughts, making them one. This symbiosis grants unparalleled maneuverability but comes at a cost: the ship's every shudder, every scar, registers as pain. She navigates hyperspace with the grace of a dancer, driven by a mission to find the fabled 'Nexus Point,' a rumored gateway to unimaginable cosmic power, or perhaps, oblivion.`,
    title: "Kira-7 and The Void Seeker"
  },

  // Character - Cyberpunk
  {
    text: "A cybernetically enhanced street samurai looking for their past.",
    type: "character",
    genre: "cyberpunk",
    content: `In the chrome-laced alleys of Neo-Kyoto, Echo is a whisper, a blade-for-hire known for their impossible agility. Their body is a symphony of synthetic muscle and neural implants, capable of blurring through laser grids and bypassing the most advanced corporate security. But beneath the polished chrome, a ghost-in-the-shell gnaws at their sanity – a fragmented memory of a corporate project they were once part of, a ghost in their own machine. Echo takes jobs only if they bring them closer to the truth, slicing through layers of data and flesh, searching for the face that stole their past and replaced it with augmented reality.`,
    title: "Echo: The Cyber-Ghost"
  },
  {
    text: "A data broker who trades in illicit memories and corporate secrets.",
    type: "character",
    genre: "cyberpunk",
    content: `Known only as 'Synapse,' this data broker operates from a labyrinthine server farm beneath the polluted skies of Sector 7. Synapse deals in the most volatile of currencies: stolen memories, corporate espionage schematics, and illicit personal data. Their mind, augmented with neural processors and a direct interface, can sift through petabytes of information in seconds, finding the needle of truth in the digital haystack. Synapse's body is a canvas of bio-mods and hidden ports, each an access point to the digital underworld. Their greatest fear? A data wipe that erases not just their ledger, but their very identity.`,
    title: "Synapse: The Memory Weaver"
  },

  // Character - Historical
  {
    text: "A Roman centurion, haunted by a brutal battle, seeks redemption in the wilds of Britannia.",
    type: "character",
    genre: "historical",
    content: `Centurion Marcus Aurelius, once a decorated veteran of the IX Legion, now roams the bleak moors of Britannia, his polished lorica segmentata long replaced by worn leather. The ghosts of the Teutoburg Forest, where his brothers fell to barbarian axes, cling to him like the perpetual mists. Tasked with establishing a remote outpost near Hadrian's Wall, Marcus seeks not glory, but a quiet penance. Each mile marched deeper into the wild is a step further from the comfort of Rome, a step closer to confronting the horrors that still haunt his waking hours.`,
    title: "The Legion's Remorse"
  },

  // Character - Horror
  {
    text: "A reclusive artist whose paintings seem to distort reality and trap viewers.",
    type: "character",
    genre: "horror",
    content: `Elias Thorne, a name whispered with a shiver in artistic circles, resides in a crumbling mansion shrouded by perpetual twilight. His canvases, rendered in unsettling shades of black and deep crimson, are more than just art; they are windows. Those who gaze too long into 'The Endless Descent' report an unsettling disorientation, a feeling of being watched, and for some, an irreversible loss of sanity. Elias himself, with eyes like chips of obsidian, seems to feed on the terror his work inspires, his own reality subtly twisting with each new creation.`,
    title: "Elias Thorne: The Painter of Madness"
  },

  // --- FACTION LORE ---

  // Faction - General
  {
    text: "A mysterious council that secretly manipulates global events from the shadows.",
    type: "faction",
    genre: "general",
    content: `Known only as the 'Veiled Hand,' this enigmatic council operates from an undisclosed location, its influence stretching across continents and through the highest echelons of power. Comprising individuals whose identities are meticulously erased, the Veiled Hand guides political unrest, economic shifts, and technological breakthroughs. Their motives remain unknown, debated among conspiracy theorists and government agencies alike. They act not with force, but with whispers, rumors, and calculated interventions, shaping the course of history as if it were a malleable clay. Their silence is their greatest weapon, their anonymity their ultimate defense.`,
    title: "The Veiled Hand"
  },

  // Faction - Fantasy
  {
    text: "A secretive order of mages controlling magical artifacts.",
    type: "faction",
    genre: "fantasy",
    content: `The Obsidian Concord is a secretive order of mages and scholars dwelling deep within the Shadowfell Mountains. Their purpose is to collect, categorize, and control all known magical artifacts, believing that unchecked power leads only to ruin. They are ruthless in their pursuit, often employing dark enchantments and subtle manipulations to achieve their goals. Their fortress, carved from obsidian, hums with contained arcane energy, and within its walls, ancient secrets are guarded by pacts made with entities from beyond mortal comprehension. Their leaders, known only as the Veiled Elders, communicate through thought-forms, their true identities hidden even from their most loyal acolytes.`,
    title: "The Obsidian Concord"
  },
  {
    text: "A nomadic tribe of beastmasters who tame mythical creatures.",
    type: "faction",
    genre: "fantasy",
    content: `The Sky-Strider Nomads, a vibrant tribe sworn to the ancient spirits of the winds, roam the expansive plains atop their majestic griffins and thunderous rocs. Each member of the tribe, from the youngest child to the oldest elder, shares a deep, almost telepathic bond with their beast companion. They are protectors of the wildlands, swift in battle, and fiercely independent, their loyalty belonging only to the winds and the great beasts that carry them. Their ceremonies involve intricate aerial ballets, honoring the spirits that grant them passage across the vast skies.`,
    title: "The Sky-Strider Nomads"
  },

  // Faction - Sci-Fi
  {
    text: "A clandestine organization of bio-engineered super-soldiers, operating beyond government control.",
    type: "faction",
    genre: "sci-fi",
    content: `In the sprawling megacity of New Avalon, a clandestine organization known as the Silver Syndicate operates in the shadows, manipulating the city's data streams and corporate networks. Comprised of bio-engineered super-soldiers, they are the ghosts of a forgotten war, bound by loyalty to a cause that transcends their own existence. As they navigate the treacherous waters of corporate espionage and political intrigue, their actions threaten to destabilize the delicate balance of power in New Avalon. But with each mission, they inch closer to uncovering a conspiracy that could change the fate of humanity forever.`,
    title: "The Silver Syndicate"
  },
  {
    text: "An interstellar trading guild that controls rare alien resources.",
    type: "faction",
    genre: "sci-fi",
    content: `The Stellar Concordium, a vast network of merchant fleets and diplomatic envoys, holds an iron grip on the trade of exotic alien minerals and xenoflora across the Andromeda arm. Operating from a colossal, mobile space station known as the 'Market Nexus,' they dictate galactic economies with practiced ease. Their influence is so pervasive that even major planetary governments bend to their will to secure vital resources. While they preach neutrality, their silent data streams and subtle negotiations hint at a hidden agenda far grander than mere profit.`,
    title: "The Stellar Concordium"
  },

  // Faction - Cyberpunk
  {
    text: "A resistance group fighting against a totalitarian corporate government.",
    type: "faction",
    genre: "cyberpunk",
    content: `Deep beneath the neon-drenched districts of OmniCorp City, in forgotten maintenance tunnels and repurposed sewer systems, thrives 'The Glitch.' This decentralized network of hackers, street samurai, and tech-savvy rebels wages a digital and physical war against the iron fist of OmniCorp's totalitarian rule. Their symbols are flashing error messages on corporate billboards, their attacks are surgical data-breaches, and their dream is a city free from corporate tyranny. They move in shadows, communicate in encrypted bursts, and their numbers are unknown, but their impact echoes through the city's underbelly.`,
    title: "The Glitch Resistance"
  },

  // Faction - Historical
  {
    text: "A secret society operating during the Victorian era, hunting supernatural anomalies.",
    type: "faction",
    genre: "historical",
    content: `Beneath the gas-lit streets and smog-choked skies of London, the 'Aetherium Society' convenes in hidden parlors and arcane laboratories. Comprised of disillusioned scientists, former detectives, and eccentric scholars, their true purpose is to investigate and contain the burgeoning supernatural phenomena plaguing the British Empire. From rogue automatons animated by dark spirits to ancient curses manifesting in the city's slums, the Aetherium Society uses a blend of nascent science and forbidden lore to protect a skeptical public from horrors beyond comprehension. They operate strictly in secret, their existence a carefully guarded secret from both the Crown and the monstrous forces they combat.`,
    title: "The Aetherium Society"
  },

  // Faction - Horror
  {
    text: "A cult that worships an ancient, cosmic entity hidden beneath the city.",
    type: "faction",
    genre: "horror",
    content: `Whispers of the 'Veiled Choir' slither through the city's forgotten catacombs, a cult devoted to an entity of unthinkable cosmic horror. They believe a fragmented consciousness from beyond the stars lies dormant beneath the metropolitan sprawl, feeding on the city's despair and chaos. Their rituals, performed in flickering candlelight amidst ancient bones, involve chanting dissonant hymns and offering unspeakable sacrifices, seeking to hasten the entity's awakening. Their members, marked by a strange, unblinking intensity in their eyes, move among the populace, luring new souls to join the Choir's terrible symphony.`,
    title: "The Veiled Choir"
  },

  // --- WORLD LORE ---

  // World - General
  {
    text: "A world where magic and technology coexist but are constantly at odds.",
    type: "world",
    genre: "general",
    content: `Aethelgard exists in a delicate, often volatile, balance between arcane energies and intricate machinery. Towering crystal spires powered by leylines stand adjacent to sprawling industrial districts fueled by steam and electricity. Arcane scholars debate with pragmatic engineers over the ethics of soul-powered automatons. This inherent tension fuels innovation and conflict alike. Cities are a blend of enchanted gardens and grimy factories, and the land itself bears the scars of ancient wars fought between mages wielding raw elemental power and armies equipped with clockwork siege engines. The very air hums with dissonant energies.`,
    title: "Aethelgard: The Discordant Harmony"
  },

  // World - Fantasy
  {
    text: "A world built on the back of a colossal, slumbering titan.",
    type: "world",
    genre: "fantasy",
    content: `The realm of Gaia's Slumber exists precariously on the colossal, moss-covered back of a perpetually sleeping titan. Its gargantuan limbs form mountain ranges, its deep breaths cause shifting continents, and its tears carve mighty rivers. Civilizations cling to its stony hide, adapting their architecture to the titan's slow, rhythmic movements. Temples are built into its vertebrae, and entire cities reside in the valleys formed by its curled fingers. Earthquakes are merely the titan stretching, and the greatest fear is the day it might truly awaken. Ancient prophecies speak of this day, when the world will either be reborn or utterly shattered.`,
    title: "Gaia's Slumber: The Living World"
  },
  {
    text: "A floating archipelago of islands, connected by sky-bridges and wind-ships.",
    type: "world",
    genre: "fantasy",
    content: `Above the endless Maelstrom, where churning clouds hide unimaginable depths, lies the Sky-Shatter Archipelago. Hundreds of islands, from vast landmasses supporting entire kingdoms to tiny, rock-strewn islets, drift eternally in the upper currents. They are connected by intricate rope bridges, sky-docks, and the majestic airships of the Cloud-Sailors, whose lives are dictated by wind currents and the elusive sky-beasts they hunt. Below, the Maelstrom whispers of forgotten worlds, drawing adventurers and scholars alike, though none have ever returned from its depths.`,
    title: "The Sky-Shatter Archipelago"
  },

  // World - Sci-Fi
  {
    text: "A galaxy-spanning empire on the brink of civil war, fractured by political intrigue and ancient prophecies.",
    type: "world",
    genre: "sci-fi",
    content: `The Imperium of Xylos, once the undisputed dominion over a thousand star systems, now trembles on the precipice of civil war. Decades of political intrigue have fractured its ancient houses, each vying for control of the fading emperor's throne. Whispers of forbidden technology and forgotten prophecies, dating back to the first galactic expansion, stir dissent among the common citizens and mutiny within the legions. Rebel fleets, rogue AI, and opportunistic alien factions circle like vultures, ready to pick apart the dying empire. The very fabric of hyperspace seems to tear under the strain of impending conflict.`,
    title: "Xylos Imperium: The Fading Star"
  },
  {
    text: "A vast orbital habitat that houses the last remnants of humanity.",
    type: "world",
    genre: "sci-fi",
    content: `The Ark-City 'Elysium,' a colossal orbital habitat a thousand kilometers in diameter, is humanity's last refuge, a gleaming testament to survival. After the Great Solar Flare rendered Earth uninhabitable, Elysium became a self-sufficient ecosystem of hydroponic farms, recycling plants, and towering residential sectors, orbiting a dying blue dwarf. Its society is meticulously structured, with every life, every resource, accounted for. Yet, beneath the pristine facade, whispers of overcrowding, resource depletion, and a looming 'Great Migration' to an unproven exoplanet sow seeds of quiet desperation.`,
    title: "Elysium: The Last Ark"
  },

  // World - Cyberpunk
  {
    text: "A sprawling megacity where corporations control every aspect of life.",
    type: "world",
    genre: "cyberpunk",
    content: `Neo-Veridian is a monstrous testament to corporate ambition, a perpetual twilight beneath layers of towering chrome and holographic advertisements. Here, six megacorporations dictate law, culture, and even genetics. Citizens live in tightly regulated zones, their lives optimized for consumption and production, while the undercity teems with illicit cybernetic clinics, rogue hackers, and desperate rebels. The air is thick with neon haze and ozone, the streets pulse with automated traffic, and every digital signal is monitored. Freedom is an illusion, a commodity bought and sold in the shadows.`,
    title: "Neo-Veridian: The Corporate Cage"
  },

  // World - Historical
  {
    text: "A Renaissance city-state consumed by feuding noble families and clandestine assassinations.",
    type: "world",
    genre: "historical",
    content: `The vibrant city-state of Valoria, a jewel of the Renaissance nestled in a fertile valley, is a cauldron of artistic brilliance and deadly intrigue. While its artisans craft masterpieces and its scholars ignite new philosophies, its shadowed alleys are stained by the blood of feuding noble families. The Montagues and Capulets of Valoria, the Venetias and the Solanos, wage a silent war of poison, daggers, and political manipulation. Below the opulent surface of masquerade balls and grand cathedrals, a network of spies and assassins thrives, turning every alliance into a potential trap.`,
    title: "Valoria: City of Shadows and Splendor"
  },

  // World - Horror
  {
    text: "A small, isolated town where a cosmic entity slowly distorts reality.",
    type: "world",
    genre: "horror",
    content: `The town of Blackwood Creek, nestled deep within an ancient forest, was always a bit... off. But since the meteor fell in Miller's Field a year ago, things have gotten worse. The trees whisper in strange languages, the shadows stretch and writhe, and the townsfolk are succumbing to a collective madness, their faces slack, their eyes vacant. Reality itself seems to fray at the edges; roads lead to impossible places, sounds echo from nowhere, and the sky sometimes bleeds with colors no human eye should ever witness. Something ancient, alien, and hungry is waking, slowly devouring the very sanity of Blackwood Creek.`,
    title: "Blackwood Creek: The Frayed Edge of Reality"
  },

  // --- QUEST LORE ---

  // Quest - General
  {
    text: "Retrieve a vital piece of data from a heavily guarded corporate server.",
    type: "quest",
    genre: "general",
    content: `**Quest: The Data Heist of Nexus Tower**
    **Objective:** Infiltrate Nexus Tower's heavily encrypted data core and retrieve the 'Project Chimera' schematics.
    **Details:** Nexus Tower, headquarters of the ubiquitous OmniCorp, holds the last known copy of Project Chimera's original blueprints. This data is vital for a competing faction. The tower is protected by multiple biometric checkpoints, AI-controlled security drones, and a 'ghost-in-the-wire' defense system that can scramble neural implants. You will need to bypass the perimeter, navigate the server maze, and extract the data without triggering full-spectrum alarms. Failure is not an option; the data must be retrieved before OmniCorp weaponizes Chimera.
    **Reward:** Significant credits and future opportunities.`,
    title: "The Nexus Tower Data Heist"
  },

  // Quest - Fantasy
  {
    text: "Recover the legendary 'Blade of Whispers' from the tomb of the Shadow Emperor.",
    type: "quest",
    genre: "fantasy",
    content: `**Quest: The Shadow Emperor's Vault**
    **Objective:** Descend into the forgotten Tomb of Kael'thas, the Shadow Emperor, and retrieve the 'Blade of Whispers.'
    **Details:** Rumored to be the final resting place of the tyrannical Shadow Emperor, the Tomb of Kael'thas is a labyrinthine dungeon beneath the Whispering Peaks, sealed by ancient enchantments. The Blade of Whispers, a legendary artifact of immense power, rests within his crypt, guarded by spectral legions and arcane traps. Its whispers are said to drive the unworthy mad. You will need to brave the Emperor's cursed servants, solve ancient riddles, and survive lethal magical defenses. Only the blade can turn the tide against the encroaching Shadow Blight.
    **Reward:** The Blade of Whispers and legendary renown.`,
    title: "The Blade of Whispers Expedition"
  },
  {
    text: "Escort a diplomat through a war-torn kingdom to deliver a peace treaty.",
    type: "quest",
    genre: "fantasy",
    content: `**Quest: The Diplomat's Gambit**
    **Objective:** Safely escort Ambassador Elara of Eldoria through the fractured kingdom of Veridian to the besieged capital, Stormhaven, to deliver the Treaty of Everlight.
    **Details:** The kingdom is embroiled in a brutal civil war, with rogue lords, monstrous beasts, and desperate bandits roaming the countryside. The Ambassador carries the only copy of a treaty that could end the conflict, but both sides have agents attempting to intercept her. You must choose your path wisely: brave the haunted Whisperwind Pass, navigate the treacherous Serpent River, or attempt a dangerous crossing through the goblin-infested Redrock Foothills. Your mission is to deliver the treaty, alive and intact, by any means necessary.
    **Reward:** Imperial favor and a significant bounty.`,
    title: "The Treaty of Everlight"
  },

  // Quest - Sci-Fi
  {
    text: "Investigate a derelict research vessel for signs of an experimental alien lifeform.",
    type: "quest",
    genre: "sci-fi",
    content: `**Quest: Ghost Ship of the Nebula**
    **Objective:** Board the derelict research vessel 'Odyssey-7,' adrift in the Cygnus Nebula, and retrieve any data logs concerning its experimental alien lifeform, designated 'Specimen Alpha-9.'
    **Details:** The Odyssey-7 went silent three cycles ago after a deep-space bio-research mission. Its last transmission was a garbled distress signal mentioning a "rapid evolution" of Specimen Alpha-9. The vessel's automated defenses are still active, and whatever happened aboard has left a chilling silence. You will need to bypass the security systems, navigate its decaying corridors, and contend with any horrors that remain. The Federation requires all data on Alpha-9, alive or dead.
    **Reward:** Classified Federation clearance and substantial payment.`,
    title: "Odyssey-7: Specimen Alpha-9"
  },
  {
    text: "Rescue a trapped colonist from a collapsing mining colony on an alien planet.",
    type: "quest",
    genre: "sci-fi",
    content: `**Quest: Mine Collapse on Kepler-186f**
    **Objective:** Extract Dr. Aris Thorne, chief xenobotanist, from the rapidly collapsing subterranean mining colony 'Outpost 37' on Kepler-186f.
    **Details:** A seismic event has destabilized the moon, causing Outpost 37 to experience a catastrophic cave-in. Dr. Thorne is trapped in the deepest bio-luminescent caverns, cut off from escape. The alien fauna of Kepler-186f, disturbed by the tremors, are now highly aggressive. You must navigate unstable tunnels, bypass malfunctioning automated mining equipment, and confront hostile indigenous lifeforms to reach Dr. Thorne and bring him to the surface before the entire outpost is swallowed by the planet. Your dropship has a limited extraction window.
    **Reward:** Rescue bonus and priority access to future planetary surveys.`,
    title: "Rescue on Kepler-186f"
  },

  // Quest - Cyberpunk
  {
    text: "Extract an enforcer from a corporate-controlled combat arena.",
    type: "quest",
    genre: "cyberpunk",
    content: `**Quest: The Arena Breakout**
    **Objective:** Infiltrate the brutal 'Apex Arena,' owned by Biotech Corp, and extract their star enforcer, 'Juggernaut,' who wishes to defect.
    **Details:** Apex Arena is a hyper-violent combat spectacle where Biotech Corp tests its latest cybernetic enhancements. Juggernaut, a heavily augmented combatant, holds critical data about Biotech's illegal experiments. The arena is protected by advanced network security, laser grids, and legions of corporate mercs. You will need to create a distraction during a live fight, disable arena defenses, and secure Juggernaut's extraction point without causing a full-scale corporate lockdown. Juggernaut's implants are rigged to explode if he deviates from his programming, adding a ticking clock to the operation.
    **Reward:** Access to Biotech Corp's black market network and a substantial payout from the Resistance.`,
    title: "Apex Arena: Juggernaut's Freedom"
  },

  // Quest - Historical
  {
    text: "Recover a stolen historical artifact from a powerful crime syndicate in 1920s Chicago.",
    type: "quest",
    genre: "historical",
    content: `**Quest: The Al Capone's Relic**
    **Objective:** Infiltrate Al Capone's hidden vault beneath the Lexington Hotel in 1920s Chicago and retrieve the stolen 'Jeweled Scepter of Tutankhamun.'
    **Details:** The scepter, recently unearthed in Egypt, was mysteriously diverted from its museum transport and is now rumored to be a prize in Capone's personal collection. The vault is guarded by Capone's most loyal enforcers and cunning traps. You'll need to navigate the city's speakeasies and back alleys, gather intel from informants, and bypass Prohibition-era security. A wrong move could mean a bullet from a tommy gun or a trip to the bottom of Lake Michigan. The museum curator offers a hefty reward for its safe return.
    **Reward:** A substantial sum from the Antiquities Society and a safe passage out of Chicago.`,
    title: "The Capone Relic Heist"
  },

  // Quest - Horror
  {
    text: "Investigate strange disappearances in a secluded, fog-shrouded village.",
    type: "quest",
    genre: "horror",
    content: `**Quest: The Whispers of Blackmire**
    **Objective:** Travel to the isolated, fog-shrouded village of Blackmire and investigate the recent, unsettling disappearances of its inhabitants.
    **Details:** For generations, Blackmire has been steeped in grim folklore, whispers of an ancient, unseen evil lurking in the surrounding bogs. Recent reports speak of entire families vanishing without a trace, leaving behind only an unnatural silence and a faint, sweet smell on the wind. The villagers who remain are withdrawn and fearful, their eyes darting nervously into the ever-present fog. You must uncover the truth behind the disappearances, confronting whatever malevolent entity preys upon Blackmire, before the village's grim secret consumes you too.
    **Reward:** The grim satisfaction of survival, and potentially the gratitude of a terrified world.`,
    title: "Blackmire's Silent Vanishing"
  },
];