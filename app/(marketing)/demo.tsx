import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #18181B;
  padding: 24px;
`;

const Title = styled.Text`
  font-size: 32px;
  color: #E4E4E7;
  margin-bottom: 24px;
  text-align: center;
`;

const FormContainer = styled.View`
  background-color: rgba(39, 39, 42, 0.8);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 16px;
  border-width: 1px;
  border-color: rgba(63, 63, 70, 0.5);
  max-width: 500px;
  align-self: center;
  width: 100%;
`;

const Input = styled.TextInput`
  background-color: rgba(24, 24, 27, 0.8);
  border-radius: 8px;
  padding: 12px;
  color: #E4E4E7;
  margin-bottom: 16px;
  border-width: 1px;
  border-color: rgba(63, 63, 70, 0.5);
`;

const Label = styled.Text`
  color: #E4E4E7;
  font-size: 16px;
  margin-bottom: 8px;
`;

const Button = styled.TouchableOpacity`
  background-color: #E4E4E7;
  padding: 16px;
  border-radius: 8px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #18181B;
  font-size: 16px;
  font-weight: 600;
`;

export default function DemoScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Container>
        <Title>Request a Demo</Title>
        <FormContainer>
          <Label>Name</Label>
          <Input 
            placeholder="Your name"
            placeholderTextColor="#71717A"
          />
          
          <Label>Email</Label>
          <Input 
            placeholder="your@email.com"
            placeholderTextColor="#71717A"
            keyboardType="email-address"
          />
          
          <Label>Company</Label>
          <Input 
            placeholder="Company name"
            placeholderTextColor="#71717A"
          />
          
          <Label>Message</Label>
          <Input 
            placeholder="Tell us about your content creation needs"
            placeholderTextColor="#71717A"
            multiline
            numberOfLines={4}
            style={{ height: 100, textAlignVertical: 'top' }}
          />
          
          <Button>
            <ButtonText>Submit Request</ButtonText>
          </Button>
        </FormContainer>
      </Container>
    </ScrollView>
  );
} 