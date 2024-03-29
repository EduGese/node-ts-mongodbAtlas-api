import mongoose , {Schema} from 'mongoose';
import { Favorites } from '../interfaces/favorites.interface';

const favoritesSchema: Schema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Year: {
        type: String,
        required: true
    },
    imdbID: {
        type: String,
        unique: true,
        required: true
    },
    Type: {
        type: String,
        required: true
    },
    Poster: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },

    descriptions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Description'
    }],
    user:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
]
});


export default mongoose.model<Favorites>('Favorites', favoritesSchema);

