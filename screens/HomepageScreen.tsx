import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationProps } from "../types/navigation";
import { COLORS, SIZES, FONTS, SHADOWS } from "../constants/theme";

const { width } = Dimensions.get("window");

interface HomepageScreenProps extends NavigationProps {}

const HomepageScreen: React.FC<HomepageScreenProps> = ({ navigation }) => {
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    // Entrance animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 20,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim, scaleAnim]);

  // Mock user data
  const userData = {
    name: "Nguyễn Nhật Thiên",
    role: "Sinh viên IT",
    school: "ĐH Công nghệ Kỹ thuật TPHCM",
    age: 20,
    major: "Sinh viên IT",
    field: "Công nghệ thông tin",
    email: "nhat.thien@example.com",
    phone: "+84 123 456 789",
    username: "nguyenthien",
  };

  const interests = [
    "Lập trình ứng dụng di động",
    "Học hỏi công nghệ mới",
    "Chơi game và xem phim",
    "Du lịch và khám phá",
  ];

  const skills = [
    { name: "TypeScript/React Native", level: 85, color: "#61DAFB" },
    { name: "JavaScript/ES6+", level: 90, color: "#F7DF1E" },
    { name: "HTML/CSS", level: 88, color: "#E34C26" },
    { name: "Git/GitHub", level: 80, color: "#FF6B14" },
    { name: "Mobile Development", level: 82, color: "#3DDC84" },
  ];

  const handleNavigate = (route: string) => {
    // navigation.navigate(route);
    console.log("Navigate to:", route);
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      {/* Hero Section with Entrance Animation */}
      <Animated.View
        style={[
          styles.heroSection,
          {
            opacity: fadeAnim,
            transform: [
              { translateY: slideAnim },
              { scale: scaleAnim },
            ],
          },
        ]}
      >
        <View style={styles.heroBackground} />

        <View style={styles.profileContainer}>
          {/* Avatar */}
          <View style={styles.avatarBox}>
            <View style={styles.avatarInner}>
              <FontAwesome name="user-circle" size={80} color={COLORS.white} />
            </View>
          </View>

          {/* Basic Info */}
          <Text style={styles.nameText}>{userData.name}</Text>
          <Text style={styles.roleText}>{userData.role}</Text>
          <Text style={styles.schoolText}>{userData.school}</Text>
        </View>
      </Animated.View>

      {/* Info Card */}
      <Animated.View
        style={[
          styles.infoCard,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <View style={styles.cardHeader}>
          <FontAwesome name="info-circle" size={20} color={COLORS.primary} />
          <Text style={styles.cardTitle}>Thông tin cá nhân</Text>
        </View>

        <View style={styles.cardContent}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Họ và tên:</Text>
            <Text style={styles.infoValue}>{userData.name}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Tuổi:</Text>
            <Text style={styles.infoValue}>{userData.age}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Nghiệp vụ:</Text>
            <Text style={styles.infoValue}>{userData.major}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Trường:</Text>
            <Text style={styles.infoValue}>{userData.school}</Text>
          </View>

          <View style={[styles.infoRow, { borderBottomWidth: 0 }]}>
            <Text style={styles.infoLabel}>Chuyên ngành:</Text>
            <Text style={styles.infoValue}>{userData.field}</Text>
          </View>
        </View>
      </Animated.View>

      {/* Interests Section */}
      <Animated.View
        style={[
          styles.card,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <View style={styles.cardHeader}>
          <FontAwesome name="heart" size={20} color={COLORS.error} />
          <Text style={styles.cardTitle}>Sở thích</Text>
        </View>

        <View style={styles.cardContent}>
          {interests.map((interest, index) => (
            <View key={index} style={styles.interestRow}>
              <FontAwesome name="check" size={16} color={COLORS.primary} />
              <Text style={styles.interestText}>{interest}</Text>
            </View>
          ))}
        </View>
      </Animated.View>

      {/* Skills Section */}
      <Animated.View
        style={[
          styles.card,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <View style={styles.cardHeader}>
          <FontAwesome name="code" size={20} color={COLORS.accent} />
          <Text style={styles.cardTitle}>Kỹ năng lập trình</Text>
        </View>

        <View style={styles.cardContent}>
          {skills.map((skill, index) => (
            <View key={index} style={styles.skillRow}>
              <View style={styles.skillLeft}>
                <Text style={styles.skillName}>{skill.name}</Text>
                <View style={styles.skillBar}>
                  <View
                    style={[
                      styles.skillFill,
                      {
                        width: `${skill.level}%`,
                        backgroundColor: skill.color,
                      },
                    ]}
                  />
                </View>
              </View>
              <Text style={styles.skillLevel}>{skill.level}%</Text>
            </View>
          ))}
        </View>
      </Animated.View>

      {/* Contact Section */}
      <Animated.View
        style={[
          styles.card,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <View style={styles.cardHeader}>
          <FontAwesome name="envelope" size={20} color={COLORS.info} />
          <Text style={styles.cardTitle}>Liên hệ</Text>
        </View>

        <View style={styles.cardContent}>
          <TouchableOpacity
            style={styles.contactRow}
            onPress={() => handleNavigate("email")}
            accessibilityRole="button"
            accessibilityLabel={`Email: ${userData.email}`}
          >
            <FontAwesome name="envelope" size={18} color={COLORS.primary} />
            <Text style={styles.contactText}>{userData.email}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contactRow}
            onPress={() => handleNavigate("phone")}
            accessibilityRole="button"
            accessibilityLabel={`Điện thoại: ${userData.phone}`}
          >
            <FontAwesome name="phone" size={18} color={COLORS.primary} />
            <Text style={styles.contactText}>{userData.phone}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.contactRow, { borderBottomWidth: 0 }]}
            onPress={() => handleNavigate("username")}
            accessibilityRole="button"
            accessibilityLabel={`Username: ${userData.username}`}
          >
            <FontAwesome name="user" size={18} color={COLORS.primary} />
            <Text style={styles.contactText}>@{userData.username}</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Đặc Sản Việt © 2026</Text>
        <Text style={styles.footerSubText}>Designed with Motion-Driven Portfolio</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingVertical: SIZES.xl,
  },

  // Hero Section
  heroSection: {
    marginHorizontal: SIZES.lg,
    marginBottom: SIZES.xl,
  },
  heroBackground: {
    position: "absolute",
    top: 0,
    left: -SIZES.lg,
    right: -SIZES.lg,
    height: 280,
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: SIZES.radiusXl,
    borderBottomRightRadius: SIZES.radiusXl,
  },
  profileContainer: {
    alignItems: "center",
    paddingTop: SIZES.xl,
    paddingBottom: SIZES.lg,
    zIndex: 10,
  },

  // Avatar
  avatarBox: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: COLORS.white,
    padding: SIZES.md,
    ...SHADOWS.lg,
    marginBottom: SIZES.lg,
  },
  avatarInner: {
    width: "100%",
    height: "100%",
    borderRadius: 55,
    backgroundColor: COLORS.gray200,
    justifyContent: "center",
    alignItems: "center",
  },

  // Hero Text
  nameText: {
    ...FONTS.h2,
    color: COLORS.white,
    marginBottom: SIZES.xs,
    textAlign: "center",
  },
  roleText: {
    ...FONTS.body1,
    color: COLORS.white,
    textAlign: "center",
    marginBottom: SIZES.xs,
  },
  schoolText: {
    ...FONTS.body2,
    color: COLORS.white,
    opacity: 0.9,
    textAlign: "center",
  },

  // Info Card
  infoCard: {
    marginHorizontal: SIZES.lg,
    marginBottom: SIZES.lg,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radiusLg,
    ...SHADOWS.md,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.lg,
    paddingVertical: SIZES.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray100,
    gap: SIZES.sm,
  },
  cardTitle: {
    ...FONTS.body1,
    color: COLORS.text,
    fontWeight: "600",
  },
  cardContent: {
    paddingHorizontal: SIZES.lg,
    paddingVertical: SIZES.md,
  },

  // Info Row
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: SIZES.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray100,
  },
  infoLabel: {
    ...FONTS.body2,
    color: COLORS.textSecondary,
    flex: 1,
  },
  infoValue: {
    ...FONTS.body1,
    color: COLORS.text,
    fontWeight: "600",
    textAlign: "right",
  },

  // Card (generic)
  card: {
    marginHorizontal: SIZES.lg,
    marginBottom: SIZES.lg,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radiusLg,
    ...SHADOWS.md,
  },

  // Interest Row
  interestRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SIZES.sm,
    gap: SIZES.sm,
  },
  interestText: {
    ...FONTS.body2,
    color: COLORS.text,
    flex: 1,
  },

  // Skill Row
  skillRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: SIZES.lg,
    gap: SIZES.md,
  },
  skillLeft: {
    flex: 1,
  },
  skillName: {
    ...FONTS.body2,
    color: COLORS.text,
    fontWeight: "600",
    marginBottom: SIZES.xs,
  },
  skillBar: {
    height: 6,
    backgroundColor: COLORS.gray200,
    borderRadius: SIZES.radiusSm,
    overflow: "hidden",
  },
  skillFill: {
    height: "100%",
    borderRadius: SIZES.radiusSm,
  },
  skillLevel: {
    ...FONTS.body2,
    color: COLORS.text,
    fontWeight: "600",
    minWidth: 40,
    textAlign: "right",
  },

  // Contact Row
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SIZES.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray100,
    gap: SIZES.md,
  },
  contactText: {
    ...FONTS.body2,
    color: COLORS.text,
    flex: 1,
  },

  // Footer
  footer: {
    paddingHorizontal: SIZES.lg,
    paddingVertical: SIZES.xxl,
    alignItems: "center",
  },
  footerText: {
    ...FONTS.body1,
    color: COLORS.text,
    fontWeight: "600",
  },
  footerSubText: {
    ...FONTS.body3,
    color: COLORS.textSecondary,
    marginTop: SIZES.xs,
  },
});

export default HomepageScreen;
