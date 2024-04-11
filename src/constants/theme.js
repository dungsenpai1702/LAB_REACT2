import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen');

const COLORS = {
    primary: "#f52d56",
    title: "#872F4A",
    royalBlue: '#4F63AC',
}

const SIZES = {
    h0: 24,
    h1: 22,
    h2: 20,
    h3: 18,
    h4: 16,
    h5: 14,
    h6: 12,

}

const W = width, H = height;

export { COLORS, SIZES, W, H }

