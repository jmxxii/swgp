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
import Spinner from 'react-native-loading-spinner-overlay';
const screenWidth = Math.round(Dimensions.get('window').width);
var WebServices = require('../api/api').WebServices;

export default class CategoryList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: "",
            list: [],
            id: "",
            url: 'https://swapi.co/api/',
            next: '',
            isLoading: true           
        }
    }

    componentDidMount() {
        const { title, color } = this.props.navigation.state.params;

        this.setState({
            type: title === "Spaceships" ? "starships" : title.toLowerCase()
        }, function () {
            // query
            this.validationAndApiParameter("get_list");
        })
    }

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.title,
        headerStyle: {
            backgroundColor: navigation.state.params.color,
            borderBottomWidth: 2,
            borderColor: "white",
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontFamily:'Starjedi',
            letterSpacing: 1
        }
    });

    goToProfileView(profile) {
        const { color } = this.props.navigation.state.params;
        this.props.navigation.navigate("Profile", {color, name: profile.name , profile, type: this.state.type })
    }

    validationAndApiParameter(apiname) {
        const {type, id, url, next} = this.state;
        if (apiname === "get_list") {
            this.call(apiname, `${url}${type}`);
        } else if (apiname === "get_profile") {
            this.call(apiname, `${url}${type}/${id}/`);
        } else if (apiname === "next") {
            if (next !== null) {
                this.setState({isLoading: true})
                this.call(apiname, next);
            }
        }
    };

    call(apiKey, apiUrl) {
        new Promise(function(resolve, reject) {
            resolve(WebServices.callWebService_GET(apiUrl));
        }).then((jsonRes) => {
            this.displayResults(apiKey, jsonRes)
        }).catch((error) => {
            alert(error)
            this.setState({ isLoading: false })
        });
    };

    displayResults(apiKey, jsonRes) {
        if (apiKey === "get_list") {
            this.setState({
                list: jsonRes.results,
                next: jsonRes.next,
                isLoading: false
            })
        } else if (apiKey === "next") {
            this.setState({
                list: this.state.list.concat(jsonRes.results),
                next: jsonRes.next,
                isLoading: false
            })
        }
    };

    render() {
        return (
            <SafeAreaView style={{backgroundColor: "#373737", flex: 1}}>
                <FlatList
                    data={this.state.list}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={[Styles.btn]} onPress={() => this.goToProfileView(item)}>
                                <View>
                                    <Text style={{fontFamily: "Starjedi", fontSize: 18, color: "white"}}>{this.state.type === "films" ? item.title : item.name}</Text>
                                </View>    
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item, index) => `${index}`}
                    onEndReachedThreshold={0.1}
                    onEndReached={({ distanceFromEnd }) => {
                        this.validationAndApiParameter("next")
                    }}
                />
                <Spinner visible={this.state.isLoading} />
            </SafeAreaView>
        );
    }
}

const Styles = {
    btn: {
        height: 100,
        justifyContent: "center",
        alignItems: 'center',
        flex: 1,
        backgroundColor: "#d8d9de", 
        borderBottom: "solid gray",
        borderBottomWidth: 1
    }
};