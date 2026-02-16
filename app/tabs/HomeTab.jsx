import React from "react";
import { 
  FlatList, 
  Text, 
  TouchableOpacity, 
  View, 
  Dimensions, 
  StyleSheet, 
  Platform 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Screen metrics for perfect grid alignment
const { width } = Dimensions.get("window");
const COLUMN_COUNT = 2; 
const SPACING = 16;
const CARD_WIDTH = (width - (SPACING * 3)) / COLUMN_COUNT;

// Premium color palette (Tailwind-inspired)
const theme = {
  background: '#F4F6F9',
  surface: '#FFFFFF',
  textPrimary: '#0F172A',
  textSecondary: '#64748B',
  accents: [
    { bg: '#EFF6FF', text: '#3B82F6' }, // Blue
    { bg: '#F0FDF4', text: '#22C55E' }, // Green
    { bg: '#FEF2F2', text: '#EF4444' }, // Red
    { bg: '#FAF5FF', text: '#A855F7' }, // Purple
    { bg: '#FFFBEB', text: '#F59E0B' }, // Amber
  ]
};

// Enriched data with emojis for visual anchors
const Items = [
  { id: 1, name: 'ActivityIndicator', icon: 'A' },
  { id: 2, name: 'Alert', icon: 'A' },
  { id: 3, name: 'Button', icon: 'B' },
  { id: 4, name: 'FlatList', icon: 'F' },
  { id: 5, name: 'Image', icon: 'I' },
  { id: 6, name: 'ImageBackground', icon: 'I' },
  { id: 7, name: 'KeyboardAvoid...', icon: 'K' },
  { id: 8, name: 'Modal', icon: 'M' },
  { id: 9, name: 'ScrollView', icon: 'S' },
  { id: 10, name: 'Switch', icon: 'S' },
  { id: 11, name: 'Text', icon: 'T' },
  { id: 12, name: 'TextInput', icon: 'T' },
  { id: 13, name: 'TouchHighlight', icon: 'T' },
  { id: 14, name: 'TouchableOpacity', icon: 'T' },
  { id: 15, name: 'TouchNoFeedback', icon: 'T' },
];

const HomeTab = ({ navigation }) => {
  
  const onPressCard = (itemName) => {
    navigation.navigate('OpenTab', { name: itemName });
  };

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerSubtitle}>UI LIBRARY</Text>
      <Text style={styles.headerTitle}>React Native{"\n"}Components.</Text>
      <View style={styles.divider} />
    </View>
  );

  const renderItem = ({ item, index }) => {
    // Cycle through the premium accent colors
    const accent = theme.accents[index % theme.accents.length];

    return (
      <TouchableOpacity 
        activeOpacity={0.7}
        style={[styles.card, { width: CARD_WIDTH }]} 
        onPress={() => onPressCard(item.name)}
      >
        <View style={styles.cardHeader}>
          <View style={[styles.iconContainer, { backgroundColor: accent.bg }]}>
            <Text style={styles.iconText}>{item.icon}</Text>
          </View>
          <Text style={[styles.idText, { color: accent.text }]}>
            {String(item.id).padStart(2, '0')}
          </Text>
        </View>

        <View style={styles.cardFooter}>
          <Text style={styles.cardTitle} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.cardAction}>Tap to explore →</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <FlatList
        key={COLUMN_COUNT} 
        data={Items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={COLUMN_COUNT}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.background,
  },
  headerContainer: {
    paddingTop: 20,
    paddingBottom: 30,
  },
  headerSubtitle: {
    fontSize: 12,
    fontWeight: '800',
    color: theme.textSecondary,
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: '900',
    color: theme.textPrimary,
    lineHeight: 40,
    letterSpacing: -0.5,
  },
  divider: {
    width: 40,
    height: 4,
    backgroundColor: theme.accents[0].text,
    borderRadius: 2,
    marginTop: 20,
  },
  listContent: {
    paddingHorizontal: SPACING,
    paddingBottom: 40,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: SPACING,
  },
  card: {
    backgroundColor: theme.surface,
    borderRadius: 20,
    padding: 16,
    height: 140,
    justifyContent: 'space-between',
    // Premium soft shadow setup
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.06,
        shadowRadius: 12,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 20,
  },
  idText: {
    fontSize: 14,
    fontWeight: '800',
    opacity: 0.8,
  },
  cardFooter: {
    marginTop: 'auto',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: theme.textPrimary,
    marginBottom: 4,
  },
  cardAction: {
    fontSize: 12,
    fontWeight: '600',
    color: theme.textSecondary,
  },
});

export default HomeTab;