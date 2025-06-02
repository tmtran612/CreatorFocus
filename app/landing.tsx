import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

// Styled Components
const Container = styled.View`
  flex: 1;
  background-color: #18181B;
`;

const Header = styled.View`
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: rgba(39, 39, 42, 0.4);
  background-color: rgba(24, 24, 27, 0.8);
`;

const Logo = styled.View`
  flex-direction: row;
  align-items: center;
`;

const LogoText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #E4E4E7;
`;

const NavContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const NavLink = styled.Text`
  color: #A1A1AA;
  margin-horizontal: 12px;
  font-size: 16px;
`;

const Button = styled.TouchableOpacity<{ variant?: 'primary' | 'outline' }>`
  padding: 12px 24px;
  border-radius: 8px;
  background-color: ${props => props.variant === 'primary' ? '#E4E4E7' : 'transparent'};
  border-width: ${props => props.variant === 'outline' ? '1px' : '0'};
  border-color: #3F3F46;
`;

const ButtonText = styled.Text<{ variant?: 'primary' | 'outline' }>`
  color: ${props => props.variant === 'primary' ? '#18181B' : '#E4E4E7'};
  font-size: 16px;
  font-weight: 600;
`;

const HeroSection = styled.View`
  padding: 80px 16px;
  align-items: center;
`;

const HeroTitle = styled.Text`
  font-size: 48px;
  font-weight: bold;
  color: #E4E4E7;
  text-align: center;
  margin-bottom: 16px;
`;

const HeroSubtitle = styled.Text`
  font-size: 18px;
  color: #A1A1AA;
  text-align: center;
  margin-bottom: 32px;
  max-width: 600px;
`;

export default function LandingScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Container>
        <Header>
          <Logo>
            <LinearGradient
              colors={['#A1A1AA', '#E4E4E7']}
              style={styles.logoGradient}
            >
              <LogoText>CF</LogoText>
            </LinearGradient>
            <LogoText style={{ marginLeft: 8 }}>CreatorFocus</LogoText>
          </Logo>
          
          {Platform.OS === 'web' && (
            <NavContainer>
              <Link href="/(marketing)/features" asChild>
                <TouchableOpacity>
                  <NavLink>Features</NavLink>
                </TouchableOpacity>
              </Link>
              <Link href="/(marketing)/pricing" asChild>
                <TouchableOpacity>
                  <NavLink>Pricing</NavLink>
                </TouchableOpacity>
              </Link>
              <Link href="/(auth)/login" asChild>
                <Button variant="outline">
                  <ButtonText variant="outline">Log In</ButtonText>
                </Button>
              </Link>
              <Link href="/(auth)/signup" asChild>
                <Button variant="primary" style={{ marginLeft: 12 }}>
                  <ButtonText variant="primary">Sign Up</ButtonText>
                </Button>
              </Link>
            </NavContainer>
          )}
        </Header>

        <HeroSection>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>The Ultimate Platform for Content Creators</Text>
          </View>
          
          <HeroTitle>Elevate Your Content Creation Workflow</HeroTitle>
          <HeroSubtitle>
            Streamline your productivity, organize your content calendar, and generate fresh ideas with AI—all in one powerful platform.
          </HeroSubtitle>

          <View style={styles.buttonGroup}>
            <Link href="/(auth)/signup" asChild>
              <Button variant="primary" style={{ marginRight: 12 }}>
                <ButtonText variant="primary">Get Started Free</ButtonText>
              </Button>
            </Link>
            <Link href="/(marketing)/demo" asChild>
              <Button variant="outline">
                <ButtonText variant="outline">Request Demo</ButtonText>
              </Button>
            </Link>
          </View>
        </HeroSection>

        {/* Add more sections as needed */}
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logoGradient: {
    padding: 8,
    borderRadius: 8,
  },
  badge: {
    backgroundColor: 'rgba(39, 39, 42, 0.8)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(63, 63, 70, 0.5)',
    marginBottom: 24,
  },
  badgeText: {
    color: '#A1A1AA',
    fontSize: 14,
    fontWeight: '500',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 