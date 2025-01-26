import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './src/components/GoalItem';
import GoalInput from './src/components/GoalInput';

const App = () => {
    const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
    const [goals, setGoals] = useState<{ text: string; id: string }[]>([]);

    const startAddGoalHandler = () => {
        setModalIsVisible(true);
    };

    const addGoalHandler = (goalInput: string) => {
        if (!goalInput) return;
        setGoals((currentGoals) => [
            ...currentGoals,
            { text: goalInput, id: Math.random().toString() },
        ]);
    };

    const deleteGoalHandler = (index: number) => {
        setGoals((currentGoals) =>
            currentGoals.filter(
                (_currentGoal, currentGoalIndex) => currentGoalIndex !== index
            )
        );
    };

    return (
        <View style={styles.appContainer}>
            <Button
                title='Add New Goal'
                color='#5e0acc'
                onPress={startAddGoalHandler}
            />
            <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} />
            <View style={styles.goalsContainer}>
                <FlatList
                    data={goals}
                    keyExtractor={(_item, index) => `goal-${index + 1}`}
                    renderItem={(itemData) => (
                        <GoalItem
                            text={itemData.item.text}
                            index={itemData.index}
                            onDeleteGoal={deleteGoalHandler}
                        />
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
    },
    goalsContainer: {
        flex: 5,
    },
});

export default App;
