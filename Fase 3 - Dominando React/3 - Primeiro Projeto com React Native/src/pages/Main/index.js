import React, { Component } from 'react';
import { keyboard, ToastAndroid } from 'react-native';
import AsyncSorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import {
    Container,
    Form,
    Input,
    SubmitButton,
    List,
    User,
    Avatar,
    Name,
    Bio,
    ProfileButton,
    ProfileButtonText
} from './styles';

export default class Main extends Component {
    state = {
        newUser: '',
        users: []
    };

    handleAddUser = async () => {
        const { users, newUser } = this.state;

        const response = await api.get(`/users/${newUser}`);
        ToastAndroid.show(response.data.name, ToastAndroid.LONG);

        const data = {
            name: response.data.name,
            login: response.data.login,
            bio: response.data.bio,
            avatar: response.data.avatar_url
        };

        this.setState({
            users: [...users, data],
            newUser: ''
        });

        console.log('Hello!');

        keyboard.dismiss();
    };

    render() {
        const { users, newUser } = this.state;

        return (
            <Container>
                <Form>
                    <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Adicionar Usuário"
                        value={newUser}
                        onChangeText={text => this.setState({ newUser: text })}
                        returnKeyType="send"
                        onSubmitEditing={this.handleAddUser}
                    />
                    <SubmitButton onPress={this.handleAddUser}>
                        <Icon name="add" size={20} color="#fff" />
                    </SubmitButton>
                </Form>
                <List
                    data={users}
                    keyExtractor={user => user.login}
                    renderItem={({ item }) => (
                        <User>
                            <Avatar source={{ uri: item.avatar }} />
                            <Name>{item.name}</Name>
                            <Bio>{item.bio}</Bio>

                            <ProfileButton onPress={() => {}}>
                                <ProfileButtonText>
                                    Ver Perfil
                                </ProfileButtonText>
                            </ProfileButton>
                        </User>
                    )}
                />
            </Container>
        );
    }
}

Main.navigationOptions = {
    title: 'Principal'
};
