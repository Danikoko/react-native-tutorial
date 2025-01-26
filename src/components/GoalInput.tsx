import { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

type Props = {
    visible: boolean;
    onAddGoal: (goalInput: string) => void;
};

const GoalInput = ({ visible, onAddGoal }: Props) => {
    const [goalInput, setGoalInput] = useState<string>('');

    const goalInputHandler = (input: string) => {
        setGoalInput(input);
    };

    const addGoalHandler = () => {
        onAddGoal(goalInput);
        setGoalInput('');
    };

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={goalInputHandler}
                    style={styles.textInput}
                    placeholder='Your course goal'
                    value={goalInput}
                />
                <Button onPress={addGoalHandler} title='Add Goal' />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
    },
});

export default GoalInput;
