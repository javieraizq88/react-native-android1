import { Text, View } from 'react-native'
import { FullMovie } from '../../../core/models/movie.model';
import { Formatter } from '../../../config/helpers/formatter';

interface Props {
    // movie: FullMovie; // TODO -> en vez de llamar a todas las propiedades, se llama a las q voy a usar
    rating: number;
    genres: string[];
    description: string;
    budget: number;
}


export const MovieDetails = ({ rating, genres, description, budget }: Props) => {
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text>{rating}</Text>

                    <Text style={{ marginLeft: 5 }} >
                        - {genres.join(', ')}
                    </Text>

                    <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }} >Historia</Text>
                    <Text style={{ fontSize: 16 }}>{description}</Text>

                    <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }} >Presupuesto</Text>
                    <Text style={{ fontSize: 16 }}>{Formatter.currency(budget)}</Text>
                </View>


                {/* casting */}
                <View style={{ marginTop: 10, marginBottom: 100 }} >
                    <Text style={{
                        marginVertical: 10,
                        marginHorizontal: 20,
                        fontSize: 23,
                        fontWeight: 'bold',
                    }} >
                        Actores
                    </Text>

                </View>
            </View>
        </>
    )
}
