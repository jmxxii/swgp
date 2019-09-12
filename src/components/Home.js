import React, {Component} from 'react';

import {
    Platform,
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    FlatList,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity
} from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: "",
            list: [
                {title: "People", color: "#B84317", id: "1"},
                {title: "Planets", color: "#72979F", id: "2"},
                {title: "Spaceships", color: "#3F75AC", id: "3"},
                {title: "vehicles", color: "#6F503F", id: "4"},
                {title: "Species", color: "#B9CAD9", id:"5"},
                {title: "Films", color: "#C4C6B5", id:"6"},
            ]
        }
    }

    componentDidMount() {
        
    }

    static navigationOptions = {
        title: 'StarWars Genius',
        headerStyle: {
            backgroundColor: '#000',
            borderBottomWidth: 2,
            borderColor: "white",
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontFamily:'Starjedi',
            letterSpacing: 1
        }
    };

    goToListView(category) {
        this.props.navigation.navigate("CategoryList", category);
    }

    render() {
        return (
            <SafeAreaView style={{backgroundColor: "#373737", flex: 1}}>
                <Image source={require('../images/yoda.jpg')} style={{width: screenWidth, height: 240}} resizeMode="cover" />
                <ScrollView bounces={true}>
                    <FlatList
                        data={this.state.list}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={[Styles.btn, {backgroundColor: item.color}]} onPress={() => this.goToListView(item)}>
                                    <Text style={{fontFamily: "Starjedi", fontSize: 36, color: "white"}}>{item.title}</Text>
                                </TouchableOpacity>
                            )
                        }}
                        keyExtractor={item => item.id}
                    />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const Styles = {
    btn: {
        height: 100,
        justifyContent: "center",
        alignItems: 'center',
        flex: 1
    }
};