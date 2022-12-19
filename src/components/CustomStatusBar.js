import { Platform, StatusBar } from "react-native";
import { colors } from "../constants/colors";

export default function CustomStatusBar({barStyle='light-content',bg=colors.white}) {
    return (
        <StatusBar
            barStyle={'light-content'}
            backgroundColor={'black'}

      
        // animated={false}
        />
    )
}