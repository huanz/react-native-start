import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, ListView, TouchableOpacity } from 'react-native';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
            selectedIndex: 0
        };
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                {this.renderBanner()}
                {this.renderTab()}
                {this.renderList()}
            </ScrollView>
        );
    }
    renderBanner() {
        return (
            <Image style={styles.banner} source={{ uri: 'http://jdbopt.b0.upaiyun.com/dmp/20170415131921/6a82e8.jpg' }} />
        );
    }
    renderTab() {
        let tabs = [{
            id: 1,
            name: '全部',
        }, {
            id: 2,
            name: '新手入门',
        }, {
            id: 3,
            name: '进阶攻略',
        }];
        return (
            <View style={styles.tab}>
                {tabs.map((tab, index) => {
                    return (
                        <TouchableOpacity key={tab.id} style={styles.tabWrap} onPress={() => this.changeTab(index)}>
                            <Text style={[styles.tabText, index === this.state.selectedIndex ? styles.tabActive : '']}>{tab.name}</Text>
                            {index === this.state.selectedIndex ? <View style={styles.activeDot}></View> : null}
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }
    renderList() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                initialListSize={15}
            ></ListView>
        );
    }
    renderRow(rowData) {
        return (
            <TouchableOpacity>
                <View><Text>111</Text></View>
            </TouchableOpacity>
        );
    }
    changeTab(index) {
        this.setState({
            selectedIndex: index
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    banner: {
        height: 110,
    },
    tab: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    tabWrap: {
        height: 40,
        justifyContent: 'center',
    },
    tabText: {
        color: '#000',
        fontWeight: '600',
        textAlign: 'center',
    },
    tabActive: {
        color: 'green',
    },
    activeDot: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 3,
        backgroundColor: 'green',
        borderRadius: 2,
    }
});