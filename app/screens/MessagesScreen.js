import React, {useState} from 'react';
import { FlatList } from 'react-native';


import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: "t1",
        description: "d1",
        image: require('../assets/kenma.jpg'),
    },
    {
        id: 2,
        title: "t2",
        description: "d2",
        image: require('../assets/kenma.jpg'),
    },
]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

const handleDelete = msg => {
    //Remove msgs from msgs array of objects
    const newMessages = messages.filter(m => m.id !== msg.id);
    setMessages(newMessages);
}
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({item}) => 
                <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log("Message opened", item)}
                    renderRightActions={() => <ListItemDeleteAction
                        onPress={() => handleDelete(item)}/>}
                />}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing = {refreshing}
                onRefresh={() => {setMessages(
                    [
                        {
                            id: 2,
                            title: "t2",
                            description: "d2",
                            image: require('../assets/kenma.jpg'),
                        },
                    ]
                );
                }
            }
            />
        </Screen>
    );
}

export default MessagesScreen;