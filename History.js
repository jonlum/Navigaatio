import { View } from "react-native";
import { StyleSheet, Text, Button, FlatList } from 'react-native';



export default function History({ route, navigation }) {
    const { data } = route.params;


    return (
        <View>
            <Text style={{ textAlignVertical: "center", textAlign: "center", }}>History</Text>
            <FlatList data={data}
                renderItem={({ item }) => <Text style={{ textAlignVertical: "center", textAlign: "center", }}>{item.key}</Text>}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

