import { atom } from "recoil";

export const heroInfoForm = atom({
  key: "heroInfoForm",
  default: {
    name: "",
    title: "",
    quote: "",
    position: "",
    role: "",
    description: "",
    first_appeared: "",
    card_type: "",
    chest_type: "",
    available_in: "",
  },
});

export const statsForm = atom({
  key: "statsForm",
  default: {
    base_stats: {
      health: "",
      p_attack: "",
      m_attack: "",
      p_armor: "",
      m_armor: "",
    },
    max_stats: {
      health: "",
      p_attack: "",
      m_attack: "",
      p_armor: "",
      m_armor: "",
    },
    medallions: "",
  },
});

export const abilitiesForm = atom({
  key: "abilitiesForm",
  default: [],
});

export const fusionItemsForm = atom({
  key: "fusionItemsForm",
  default: {
    purple: {
      slot_1: "",
      slot_2: "",
      slot_3: "",
      slot_4: "",
      slot_5: "",
      slot_6: "",
    },
    purple_1: {
      slot_1: "",
      slot_2: "",
      slot_3: "",
      slot_4: "",
      slot_5: "",
      slot_6: "",
    },
    purple_2: {
      slot_1: "",
      slot_2: "",
      slot_3: "",
      slot_4: "",
      slot_5: "",
      slot_6: "",
    },
    purple_3: {
      slot_1: "",
      slot_2: "",
      slot_3: "",
      slot_4: "",
      slot_5: "",
      slot_6: "",
    },
    purple_4: {
      slot_1: "",
      slot_2: "",
      slot_3: "",
      slot_4: "",
      slot_5: "",
      slot_6: "",
    },
    orange: {
      slot_1: "unknown",
      slot_2: "",
      slot_3: "",
      slot_4: "",
      slot_5: "",
      slot_6: "",
    },
    orange_1: {
      slot_1: "unknown",
      slot_2: "",
      slot_3: "",
      slot_4: "",
      slot_5: "",
      slot_6: "",
    },
    orange_2: {
      slot_1: "unknown",
      slot_2: "",
      slot_3: "",
      slot_4: "",
      slot_5: "",
      slot_6: "",
    },
  },
});

export const keyItemsForm = atom({
  key: "keyItemsList",
  default: [],
});

export const academyTreesForm = atom({
  key: "academyTreesForm",
  default: {
    tree_1: "",
    tree_2: "",
  },
});

export const awakeningQuestForm = atom({
  key: "awakeningQuestForm",
  default: {
    awakened: false,
  },
});
