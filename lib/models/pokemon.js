import mongoose, { model, Schema } from "mongoose";

const pokemonSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        english: {
            type: String,
            required: true
        },
        japanese: {
            type: String,
            required: true
        },
        chinese: {
            type: String,
            required: true
        },
        french: {
            type: String,
            required: true
        }
    },
    type: {
        type: [String],
        required: true
    },
    base: {
        HP: {
            type: Number,
            required: true
        },
        Attack: {
            type: Number,
            required: true
        },
        Defense: {
            type: Number,
            required: true
        },
        "Sp. Attack": {
            type: Number,
            required: true
        },
        "Sp. Defense": {
            type: Number,
            required: true
        },
        Speed: {
            type: Number,
            required: true
        }
    },
    species: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    evolution: {
        next: [
            [{
                type: String
            }]
        ]
    },
    profile: {
        height: {
            type: String,
            required: true
        },
        weight: {
            type: String,
            required: true
        },
        egg: {
            type: [String],
            required: true
        },
        ability: [
            [{
                type: String
            }]
        ],
        gender: {
            type: String,
            required: true
        }
    },
    image: {
        sprite: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },
        hires: {
            type: String,
            required: true
        }
    }
});

export const Pokemon = mongoose.models.Pokemon || model('Pokemon', pokemonSchema);