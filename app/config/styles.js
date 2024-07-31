import { Platform } from 'react-native';

import colors from './colors';

export default {
    colors,
    text:
    {
        flex: 1,
        fontSize: 18,
        fontFamily: Platform.OS === "android"? "serif" : "Cursive",
        color: colors.grey,
    }
}