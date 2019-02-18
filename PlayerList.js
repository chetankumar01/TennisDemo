/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Appbar, List, Divider } from 'react-native-paper';
import { players } from './players';

export default class PlayerList extends Component {
  state = {
    filter: {
      gender: null,
      skill: null,
    },
  };

  applyFilter = filter => this.setState({ filter });

  _openFilter = () => {
    const { filter } = this.state;
    this.props.navigation.navigate('PlayerFilter', {
      filter,
      applyFilter: this.applyFilter,
    });
  };

  _renderPlayer = ({ item }) => (
    <List.Item
      title={item.name}
      description={item.skill + ' - ' + item.gender}
    />
  );

  _renderSeparator = () => <Divider />;

  render() {
    const { filter } = this.state;
    let list = [...players];
    if (filter.gender) {
      list = list.filter(player => player.gender === filter.gender);
    }
    if (filter.skill) {
      list = list.filter(player => player.skill === filter.skill);
    }
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Players" />
          <Appbar.Action icon="filter-list" onPress={this._openFilter} />
        </Appbar.Header>
        <FlatList
          data={list}
          renderItem={this._renderPlayer}
          renderSeparator={this._renderSeparator}
          keyExtractor={item => String(item.id)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
