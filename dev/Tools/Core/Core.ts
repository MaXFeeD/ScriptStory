IMPORT("TileRender");
IMPORT("EnergyNet");
IMPORT("StorageInterface");
IMPORT("ItemAnimHelper");
IMPORT("BlockEngine");
IMPORT("SoundAPI");

IMPORT("RenderUtil");

type universal = string | number;
type int = number;
type name = string;

type fraction = "friendly" | "angry" | "neutral";
type information = "age" | "race" | "place" | "fraction" | "attitude" | "name";
type math_sep = "+" | "-" | "*" | "/" | "**";

type qtype = "item" | "mob" | "position" | "dialog";

type parts = "head" | "body" | "rightarm" | "leftarm" | "rightleg" | "lefleg" | "cape" | "root" | "leftitem" | "rightitem" 

type race = "furry" | "human"

Callback.addCallback("LevelDisplayed", function () {
  Game.message(
    "race: " +
      Person.getForAll("race") +
      "\nname:" +
      Person.getForAll("name") +
      "\n [DEBUG]: "
      // + JSON.stringify(Person.list)
  );
 
});
