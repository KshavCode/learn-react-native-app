import React, { useMemo } from "react";
import { 
  SectionList, 
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

// Premium color palette
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

// Original data
const Items = [
  { id: 1, name: 'ActivityIndicator'},
  { id: 2, name: 'Alert' },
  { id: 3, name: 'Button'},
  { id: 4, name: 'FlatList' },
  { id: 5, name: 'Image'},
  { id: 6, name: 'ImageBackground'},
  { id: 7, name: 'KeyboardAvoidingView'},
  { id: 8, name: 'Modal'},
  { id: 9, name: 'ScrollView'},
  { id: 10, name: 'Switch'},
  { id: 11, name: 'Text', },
  { id: 12, name: 'TextInput'},
  { id: 13, name: 'TouchableHighlight'},
  { id: 14, name: 'TouchableOpacity'},
  { id: 15, name: 'TouchableWithoutFeedback'},
];

const HomeTab = ({ navigation }) => {
  
  // 1. Group items alphabetically and chunk them into rows of 2
  const groupedData = useMemo(() => {
    // Group by first letter
    const grouped = Items.reduce((acc, item) => {
      const letter = item.name[0].toUpperCase();
      if (!acc[letter]) acc[letter] = [];
      acc[letter].push(item);
      return acc;
    }, {});

    // Format for SectionList and chunk into rows
    return Object.keys(grouped).sort().map(letter => {
      const itemsForLetter = grouped[letter];
      const rows = [];
      for (let i = 0; i < itemsForLetter.length; i += COLUMN_COUNT) {
        rows.push(itemsForLetter.slice(i, i + COLUMN_COUNT));
      }
      return { title: letter, data: rows };
    });
  }, []);

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

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionHeader}>{title}</Text>
    </View>
  );

  // 2. Render a full row containing up to 2 items
  const renderRow = ({ item: rowItems }) => {
    return (
      <View style={styles.row}>
        {rowItems.map((item) => {
          // Use item.id to ensure consistent colors across renders
          const accent = theme.accents[item.id % theme.accents.length];

          return (
            <TouchableOpacity 
              key={item.id}
              activeOpacity={0.7}
              style={[styles.card, { width: CARD_WIDTH }]} 
              onPress={() => onPressCard(item.name)}
            >
              <View style={styles.cardFooter}>
                <Text style={styles.cardTitle} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={styles.cardAction}>Tap to explore →</Text>
              </View>
            </TouchableOpacity>
          );
        })}
        
        {/* Invisible placeholder to align odd items to the left */}
        {rowItems.length < COLUMN_COUNT && (
          <View style={{ width: CARD_WIDTH }} />
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <SectionList
        sections={groupedData}
        keyExtractor={(item) => item[0].id.toString()}
        renderItem={renderRow}
        renderSectionHeader={renderSectionHeader}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={false}
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
    paddingBottom: 20,
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
  sectionHeaderContainer: {
    paddingVertical: 10,
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '800',
    color: theme.textSecondary,
  },
  listContent: {
    paddingHorizontal: SPACING,
    paddingBottom: 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING,
  },
  card: {
    backgroundColor: theme.surface,
    borderRadius: 20,
    padding: 16,
    justifyContent: 'space-between',
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

  cardFooter: {
    alignItems:'center',
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