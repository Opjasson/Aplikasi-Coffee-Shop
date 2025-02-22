import { photo } from "../../inventory/images";
import { Location, Notification, Search, Filter } from "../../inventory/icons";
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

            <View style={{ flexDirection: "row", justifyContent: 'space-between', width : '75%', backgroundColor : '#1111', marginHorizontal : 'auto', borderRadius : 30, paddingHorizontal : 20, marginTop : 20  }}>
                <View style={{ flexDirection: "row", alignItems : 'center', gap : 2 }}>
                    <Image source={Search} />
                    <TextInput placeholder="Search Coffe ..." />
                </View>
                <View style={{ justifyContent : 'center' }}>
                    <Image source={Filter} />
                </View>
            </View>
        </View>
    );
};

export default index;
