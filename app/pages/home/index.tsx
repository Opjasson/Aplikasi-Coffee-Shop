import { coffe, photo } from "../../inventory/images";
import { Location, Notification, Search, Filter, Cup } from "../../inventory/icons";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const index = () => {
    return (
        <View style={{ flex: 1 }}>
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

            <View>
                <View>
                    <Text>Category</Text>
                </View>
                <TouchableOpacity
                    style={{
                        justifyContent : 'center',
                        flexDirection: "row",
                        backgroundColor: "#2f823a",
                        alignItems : 'center',
                        paddingHorizontal : 15,
                        paddingVertical : 15,
                        borderRadius : 30,
                        width : 140,
                        gap : 5
                    }}>
                    <Image source={Cup} />
                    <Text style={{ color : 'white' }}>Cappuchino</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default index;
