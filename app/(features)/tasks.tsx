import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
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
`;

const TaskSection = styled.View`
  margin-bottom: 32px;
`;

const SectionTitle = styled.Text`
  font-size: 20px;
  color: #E4E4E7;
  margin-bottom: 16px;
`;

const TaskCard = styled.View`
  background-color: rgba(39, 39, 42, 0.8);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  border-width: 1px;
  border-color: rgba(63, 63, 70, 0.5);
  flex-direction: row;
  align-items: center;
`;

const TaskText = styled.Text`
  color: #E4E4E7;
  font-size: 16px;
  flex: 1;
`;

const AddButton = styled.TouchableOpacity`
  background-color: rgba(63, 63, 70, 0.5);
  border-radius: 8px;
  padding: 12px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const AddButtonText = styled.Text`
  color: #E4E4E7;
  font-size: 16px;
  margin-left: 8px;
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

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export default function TasksScreen() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', text: 'Record YouTube video', completed: false },
    { id: '2', text: 'Edit Instagram content', completed: true },
    { id: '3', text: 'Write blog post', completed: false },
  ]);

  const [newTask, setNewTask] = useState('');

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now().toString(),
        text: newTask.trim(),
        completed: false
      }]);
      setNewTask('');
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Container>
        <Title>Task Management</Title>

        <Input
          value={newTask}
          onChangeText={setNewTask}
          placeholder="Add a new task..."
          placeholderTextColor="#71717A"
          onSubmitEditing={addTask}
        />

        <TaskSection>
          <SectionTitle>Today's Focus</SectionTitle>
          {tasks.map(task => (
            <TaskCard key={task.id}>
              <TouchableOpacity onPress={() => toggleTask(task.id)}>
                <Ionicons
                  name={task.completed ? "checkmark-circle" : "ellipse-outline"}
                  size={24}
                  color={task.completed ? "#10B981" : "#71717A"}
                />
              </TouchableOpacity>
              <TaskText style={{ marginLeft: 12, textDecorationLine: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </TaskText>
            </TaskCard>
          ))}
          <AddButton onPress={addTask}>
            <Ionicons name="add" size={24} color="#E4E4E7" />
            <AddButtonText>Add Task</AddButtonText>
          </AddButton>
        </TaskSection>
      </Container>
    </ScrollView>
  );
} 