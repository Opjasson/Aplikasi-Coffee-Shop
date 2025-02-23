import { coffe, photo } from "../../inventory/images";
import {
    Location,
    Notification,
    Search,
    Filter,
    Cup,
    Cup2,
    Heart,
    Add
} from "../../inventory/icons";
import React from "react";
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const index = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "#FBFBFB" }}>
            {/* Top menu */}
            <View
                style={{
                    flexDirection: "row",
                    marginTop: 30,
                    marginHorizontal: 30,
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                <TouchableOpacity activeOpacity={0.7}>
                    <Image source={photo} />
                </TouchableOpacity>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={Location} />
                    <Text
                        style={{
                            fontWeight: "500",
                            fontSize: 12,
                            marginLeft: 5,
                        }}>
                        Tegal, Indonesia
                    </Text>
                </View>
                <TouchableOpacity activeOpacity={0.7}>
                    <Image source={Notification} />
                </TouchableOpacity>
            </View>
            {/* End top menu */}
            <View style={{ marginHorizontal: 30, marginTop: 15 }}>
                <Text style={{ fontWeight: "500", fontSize: 14 }}>
                    Good Morning, Jasson Ghazy
                </Text>
            </View>
            {/* Search tab */}
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "75%",
                    backgroundColor: "#1111",
                    marginHorizontal: "auto",
                    borderRadius: 30,
                    paddingHorizontal: 20,
                    marginTop: 20,
                }}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 2,
                    }}>
                    <Image source={Search} />
                    <TextInput placeholder="Search Coffe ..." />
                </View>
                <View style={{ justifyContent: "center" }}>
                    <Image source={Filter} />
                </View>
            </View>
            {/* End Search */}

            {/* Categories */}
            <View style={{ marginLeft: 25, marginTop: 15 }}>
                <View style={{ marginBottom: 15 }}>
                    <Text style={{ fontWeight: "500", marginLeft: 5 }}>
                        Categories
                    </Text>
                </View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {/* Menu */}
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{
                            justifyContent: "center",
                            flexDirection: "row",
                            backgroundColor: "#2f823a",
                            alignItems: "center",
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            borderRadius: 30,
                            gap: 5,
                            marginRight: 10,
                        }}>
                        <Image source={Cup} />
                        <Text style={{ color: "white" }}>Cappuchino</Text>
                    </TouchableOpacity>

                    {/* End Menu */}

                    {/* Menu */}
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{
                            justifyContent: "center",
                            flexDirection: "row",
                            boxShadow: "10",
                            alignItems: "center",
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            borderRadius: 30,
                            gap: 5,
                            marginRight: 10,
                            elevation: 1,
                            shadowColor: "black",
                        }}>
                        <Image source={Cup2} />
                        <Text style={{ color: "black" }}>Arabbica</Text>
                    </TouchableOpacity>
                    {/* End menu */}

                    {/* Menu */}
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{
                            justifyContent: "center",
                            flexDirection: "row",
                            boxShadow: "10",
                            alignItems: "center",
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            borderRadius: 30,
                            gap: 5,
                            marginRight: 10,
                            elevation: 1,
                            shadowColor: "black",
                        }}>
                        <Image source={Cup2} />
                        <Text style={{ color: "black" }}>Mochacino</Text>
                    </TouchableOpacity>
                    {/* End menu */}

                    {/* Menu */}
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{
                            justifyContent: "center",
                            flexDirection: "row",
                            boxShadow: "10",
                            alignItems: "center",
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            borderRadius: 30,
                            gap: 5,
                            marginRight: 10,
                            elevation: 1,
                            shadowColor: "black",
                        }}>
                        <Image source={Cup2} />
                        <Text style={{ color: "black" }}>Espresso</Text>
                    </TouchableOpacity>
                    {/* End menu */}
                </ScrollView>
            </View>
            {/* End Categories */}

            {/* Product */}
            <ScrollView>
                <View style={{ backgroundColor : 'white' }}>
                    <Image
                        source={coffe}
                        style={{ width: 144, borderRadius: 20 }}
                    />
                    <View style={{ flexDirection : 'row' }}>
                        <View>
                            <Text>Cappuchino</Text>
                            <Text>With Sugar</Text>
                        </View>
                        <View>
                            <Image source={Heart} />
                        </View>
                    </View>

                    <View>
                        <Text>Rp50.000</Text>
                        <Image source={Add} />
                    </View>
                </View>
            </ScrollView>
            {/* End Product */}
        </View>
    );
};

export default index;
