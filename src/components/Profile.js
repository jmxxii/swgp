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
const screenHeight = Math.round(Dimensions.get('window').height);
var WebServices = require('../api/api').WebServices;

export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profile: "",
            type: ""
        }
    }

    componentDidMount() {
        const {profile, type} = this.props.navigation.state.params;
        this.setState({profile, type});
    }

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.name,
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

    cardType() {
        const {type} = this.state;
        if (type === "people") {
            return this.people();
        } else if (type === "starships") {
            return this.starships();
        } else if (type === "planets") {
            return this.planets();
        } else if (type === "vehicles") {
            return this.vehicles();
        } else if (type === "species") {
            return this.species();
        } else if (type === "films") {
            return this.films();
        }
    }

    people () {
        const {profile} = this.state;
        const {color} = this.props.navigation.state.params;
        return (
            <View style={{width: screenWidth - 30, height: screenHeight - 150, backgroundColor: "white"}}>
                <View style={{borderBottomColor: "#dedede", borderBottomWidth: 2, }}>
                    <Text style={{fontFamily:"Starjedi", color: color, fontSize: 30, textAlign:"center"}}>{profile ? profile.name: ""}</Text>
                </View>

                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Birth Year</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.birth_year: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Eye Color</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.eye_color: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Gender</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.gender: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Hair Color</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.hair_color: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Height</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.height: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Mass</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.mass: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Skin Color</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.skin_color: ""}</Text>
                </View>
            </View>
        );
    }

    planets() {
        const {profile} = this.state;
        const {color} = this.props.navigation.state.params;
        return (
            <View style={{width: screenWidth - 30, height: screenHeight - 150, backgroundColor: "white"}}>
                <View style={{borderBottomColor: "#dedede", borderBottomWidth: 2, }}>
                    <Text style={{fontFamily:"Starjedi", color: color, fontSize: 30, textAlign:"center"}}>{profile ? profile.name: ""}</Text>
                </View>

                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Climate</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center", flex: .6}}>{profile ? profile.climate: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Diameter</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center", flex: .6}}>{profile ? profile.diameter: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Gravity</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center", flex: .6}}>{profile ? profile.gravity: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Orbital Period</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center", flex: .6}}>{profile ? profile.orbital_period: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Population</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center", flex: .6}}>{profile ? profile.population: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Surface Water</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center", flex: .6}}>{profile ? profile.surface_water: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Terrain</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center", flex: .6}}>{profile ? profile.terrain: ""}</Text>
                </View>
            </View>
        );
    }

    starships () {
        const {profile} = this.state;
        const {color} = this.props.navigation.state.params;
        return (
            <View style={{width: screenWidth - 30, height: screenHeight - 150, backgroundColor: "white"}}>
                <View style={{borderBottomColor: "#dedede", borderBottomWidth: 2, }}>
                    <Text style={{fontFamily:"Starjedi", color: color, fontSize: 30, textAlign:"center"}}>{profile ? profile.name: ""}</Text>
                </View>

                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>MGLT</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.MGLT: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Cargo Cap</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.cargo_capacity: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Cost</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.cost_in_credits: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Crew</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.crew: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Hyperdrive RTG</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.hyperdrive_rating: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Length</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.length: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Passengers</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.passengers: ""}</Text>
                </View>
            </View>
        );
    }

    vehicles() {
        const {profile} = this.state;
        const {color} = this.props.navigation.state.params;
        
        return (
            <View style={{width: screenWidth - 30, height: screenHeight - 150, backgroundColor: "white"}}>
                <View style={{borderBottomColor: "#dedede", borderBottomWidth: 2, }}>
                    <Text style={{fontFamily:"Starjedi", color: color, fontSize: 30, textAlign:"center"}}>{profile ? profile.name: ""}</Text>
                </View>

                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Consumables</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.consumables: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Cargo Cap</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.cargo_capacity: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Cost</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.cost_in_credits: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Crew</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.crew: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Speed</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.max_atmosphering_speed: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Length</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.length: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Passengers</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.passengers: ""}</Text>
                </View>
            </View>
        );
    }

    species() {
        const {profile} = this.state;
        const {color} = this.props.navigation.state.params;
        
        return (
            <View style={{width: screenWidth - 30, height: screenHeight - 150, backgroundColor: "white"}}>
                <View style={{borderBottomColor: "#dedede", borderBottomWidth: 2, }}>
                    <Text style={{fontFamily:"Starjedi", color: color, fontSize: 30, textAlign:"center"}}>{profile ? profile.name: ""}</Text>
                </View>

                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>AVG Height</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.average_height: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>AVG Lifespan</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.average_lifespan: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Classification</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.classification: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Designation</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.designation: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Language</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.language: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Skin Colors</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.skin_colors: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Hair Colors</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.hair_colors: ""}</Text>
                </View>
            </View>
        );
    }

    films() {
        const {profile} = this.state;
        const {color} = this.props.navigation.state.params;
        
        return (
            <View style={{width: screenWidth - 30, height: screenHeight - 150, backgroundColor: "white"}}>
                <View style={{borderBottomColor: "#dedede", borderBottomWidth: 2, }}>
                    <Text style={{fontFamily:"Starjedi", color: color, fontSize: 30, textAlign:"center"}}>{profile ? profile.title: ""}</Text>
                </View>

                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Director</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.director: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Producer</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center", flex: .6}}>{profile ? profile.producer: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Episode ID</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.episode_id: ""}</Text>
                </View>
                <View style={Styles.text_contain}>        
                    <Text style={{fontFamily:"Starjedi", color: "gray", fontSize: 14, textAlign:"center"}}>Release</Text>
                    <Text style={{fontFamily:"Starjedi", color: "#495963", fontSize: 14, textAlign:"center"}}>{profile ? profile.release_date: ""}</Text>
                </View>
            </View>
        );
    }

    render() {
        return (
            <SafeAreaView style={{backgroundColor: "#373737", flex: 1, justifyContent:"center", alignItems:"center"}}>
                {this.cardType()}
            </SafeAreaView>
        );
    }
}

const Styles = {
    text_contain: {
        flexDirection: "row", 
        justifyContent:"space-between", 
        alignItems: "center", 
        marginLeft: 15, 
        marginRight: 15, 
        borderBottomColor: "#efefef", 
        borderBottomWidth: 2
    }
}