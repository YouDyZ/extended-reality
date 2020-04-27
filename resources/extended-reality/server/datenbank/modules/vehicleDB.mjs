import mongoose from 'mongoose';

const VehicleSchema = new mongoose.Schema({
    garage: {
        type: String,
        default: [],
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    tuning: {
        type: {
            spoiler: {
                type: Number,
                required: true,
                default: 0,
            },
            frontBumber: {
                type: Number,
                required: true,
                default: 0,
            },
            rearBumber: {
                type: Number,
                required: true,
                default: 0,
            },
            sideSkirt: {
                type: Number,
                required: true,
                default: 0,
            },
            exhaust: {
                type: Number,
                required:true, 
                default: 0,
            },
            frame: {
                type: Number,
                required: true,
                default: 0,
            },
            grille: {
                type: Number,
                required: true,
                default: 0,
            },
            bonnet: {
                type: Number,
                required: true,
                default: 0,
            },
            wingLeft: {
                type: Number,
                required: true,
                default: 0,
            },
            wingRight: {
                type: Number,
                required: true,
                default: 0,
            },
            roof: {
                type: Number,
                required: true,
                default: 0,
            },
            engine: {
                type: Number,
                required: true,
                default: 0,
            },
            brakes: {
                type: Number,
                required: true,
                default: 0,
            },
            transmission: {
                type: Number,
                required: true,
                default: 0,
            },
            horns: {
                type: Number,
                required: true,
                default: 0,
            },
            suspension: {
                type: Number,
                required: true,
                default: 0,
            },
            armor: {
                type: Number,
                required: true,
                default: 0,
            },
            turbo: {
                type: Number,
                required: true,
                default: 0,
            },
            customTireSmoke: {
                type: Number,
                required: true,
                default: 0,
            },
            xenon: {
                type: Number,
                required: true,
                default: 0,
            },
            frontWheels: {
                type: Number,
                required: true,
                default: 0,
            },
            backWheels: {
                type: Number,
                required: true,
                default: 0,
            },
            plateHolder: {
                type: Number,
                required: true,
                default: 0,
            },
            plateVantity: {
                type: Number,
                required: true,
                default: 0,
            },
            trimDesign: {
                type: Number,
                required: true,
                default: 0,
            },
            ornaments: {
                type: Number,
                required: true,
                default: 0,
            },
            dialDesign: {
                type: Number,
                required: true,
                default: 0,
            },
            doorInterior: {
                type: Number,
                required: true,
                default: 0,
            },
            seats: {
                type: Number,
                required: true,
                default: 0,
            },
            steeringWheel: {
                type: Number,
                required: true,
                default: 0,
            },
            shiftLever: {
                type: Number,
                required: true,
                default: 0,
            },
            playques: {
                type: Number,
                required: true,
                default: 0,
            },
            rearShelf: {
                type: Number,
                required: true,
                default: 0,
            },
            trunk: {
                type: Number,
                required: true,
                default: 0,
            },
            hydraulics: {
                type: Number,
                required: true,
                default: 0,
            },
            engineBlock: {
                type: Number,
                required: true,
                default: 0,
            },
            airFilter: {
                type: Number,
                required: true,
                default: 0,
            },
            strutBar: {
                type: Number,
                required: true,
                default: 0,
            },
            archCover: {
                type: Number,
                required: true,
                default: 0,
            },
            antenna: {
                type: Number,
                required: true,
                default: 0,
            },
            exteriorParts: {
                type: Number,
                required: true,
                default: 0,
            },
            tank: {
                type: Number,
                required: true,
                default: 0,
            },
            door: {
                type: Number,
                required: true,
                default: 0,
            },
            rearOrhydraulic: {
                type: Number,
                required: true,
                default: 0,
            },
            livery: {
                type: Number,
                required: true,
                default: 0,
            },
        },
        required: true,
    },
    tireSmokeColor: {
        type:Number,
        
    }
});

const VehicleModel = mongoose.model('vehicles', VehicleSchema);

export default VehicleModel;
